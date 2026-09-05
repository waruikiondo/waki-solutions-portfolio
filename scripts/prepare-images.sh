#!/usr/bin/env bash
# Shrinks the octocopter assets and drops them into public/octocopter/.
# The raw exports are ~19 MB, which is far too much to commit or serve.
# Run from the project root:  bash scripts/prepare-images.sh ~/Downloads/octocopter-assets

set -euo pipefail

SRC="${1:?Usage: bash scripts/prepare-images.sh /path/to/octocopter-assets}"
DEST="public/octocopter"

command -v convert >/dev/null 2>&1 || {
  echo "ImageMagick not found. Install it:  sudo apt install -y imagemagick"
  exit 1
}

mkdir -p "$DEST"

# Photographs -> JPEG, quality 82, max 1600px wide. Screenshots and PCB layouts
# stay PNG because JPEG artefacts destroy thin traces and text.
shrink_photo() { convert "$1" -resize '1600x1600>' -strip -quality 82 "$2"; }
shrink_flat()  { convert "$1" -resize '1600x1600>' -strip "$2"; }

echo "Photographs..."
for f in "$SRC"/build/*.png "$SRC"/build/*.jpg; do
  [ -e "$f" ] || continue
  out="$DEST/$(basename "${f%.*}").jpg"
  shrink_photo "$f" "$out"
  echo "  $(basename "$out")  $(du -h "$out" | cut -f1)"
done

echo "Diagrams and screenshots..."
for f in "$SRC"/pcb/*.png "$SRC"/simulation/*.png "$SRC"/software/*.png; do
  [ -e "$f" ] || continue
  out="$DEST/$(basename "$f")"
  shrink_flat "$f" "$out"
  echo "  $(basename "$out")  $(du -h "$out" | cut -f1)"
done

echo
echo "Total: $(du -sh "$DEST" | cut -f1)  (was $(du -sh "$SRC" | cut -f1))"
echo
echo "NOTE: lib/projects.ts references .png for the four homepage plates."
echo "assembly-01 is now .jpg — update octocopterPlates accordingly."
