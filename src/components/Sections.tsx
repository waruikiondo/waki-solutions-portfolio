import Link from "next/link";
import Image from "next/image";
import type { Project, ArchiveRow } from "@/lib/projects";
import { octocopterPlates } from "@/lib/projects";

export function TitleBlock() {
  const cells = [
    { key: "ROLE", value: ["Full-stack developer", "Mechatronics engineer"] },
    { key: "STACK", value: ["Next.js, TypeScript", "Postgres, Supabase, Flutter"] },
    { key: "BASED", value: ["Nairobi, Kenya", "UTC+3, remote worldwide"] },
    { key: "STATUS", value: ["Open to full-time remote", "and contract work"] },
  ];
  return (
    <div className="titleblock">
      {cells.map((c) => (
        <div className="tb-cell" key={c.key}>
          <span className="tb-key">{c.key}</span>
          <span className="tb-val">
            {c.value[0]}
            <br />
            {c.value[1]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Specs({ specs }: { specs: { key: string; value: string }[] }) {
  return (
    <ul className="specs">
      {specs.map((s) => (
        <li key={s.key}>
          <b>{s.key}</b>
          <span>{s.value}</span>
        </li>
      ))}
    </ul>
  );
}

export function WorkSheet({ project, index }: { project: Project; index: number }) {
  const hasDetail = Boolean(project.detail?.length);
  return (
    <article className="sheet">
      <div className="sheet-head">
        <span className="sheet-no">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="sheet-title">
          {hasDetail ? (
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          ) : (
            project.title
          )}
        </h3>
      </div>
      <p className="sheet-sub">{project.summary}</p>
      <div className="sheet-body">
        <div className="prose">
          {project.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Specs specs={project.specs} />
        <p className="links">
          {project.liveUrl && (
            <a href={project.liveUrl} rel="noopener">
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} rel="noopener">
              Source
            </a>
          )}
          {hasDetail && <Link href={`/work/${project.slug}`}>Read more</Link>}
          {project.privateNote && <span className="muted">{project.privateNote}</span>}
        </p>
      </div>
    </article>
  );
}

export function HardwareSection() {
  return (
    <section className="board" id="hardware">
      <div className="wrap">
        <div className="section-head">
          <h2>Before the web</h2>
          <span className="data">MECHATRONICS</span>
        </div>

        <div className="board-grid">
          <div>
            <h3>A self-piloting octocopter, built from nothing</h3>
            <p className="kicker">
              Final year engineering project, Dedan Kimathi University of Technology, 2021–22
            </p>
            <div className="prose">
              <p>
                Eight rotors, an airframe machined by hand, and two circuit boards laid out
                from scratch in KiCad — a flight controller carrying GPS, compass, sonar and
                barometer on an 80 × 49.5 mm board, and a power distribution board tying eight
                ESCs together.
              </p>
              <p>
                The control work came first. I derived the six-degree-of-freedom equations of
                motion in Simulink, linearised the model about hover, and designed a Linear
                Quadratic Regulator that commands twelve states through a 4 × 12 gain matrix.
                In simulation it tracked position setpoints cleanly on all three axes. Attitude
                estimation used a Madgwick filter I implemented in C, and the ground station —
                live piloting, telemetry capture and flight logging — I wrote in C#.
              </p>
              <p>
                Then the airframe met physics. Motor vibration through the aluminium-and-acrylic
                structure swamped the IMU, and hand assembly put the build 300 g over its CAD
                weight. Autonomous flight was never demonstrated. The honest lesson is that I
                designed the control system before I understood the mechanical noise floor it
                would have to survive, and I now start hardware projects at the vibration budget
                instead of the controller.
              </p>
            </div>
            <p className="note">
              Three-person final year team. I owned the control design, the sensor fusion and
              the ground-station software.
            </p>
            <Specs
              specs={[
                { key: "SPAN", value: "431.2 mm centre to motor" },
                { key: "ROTORS", value: "8 × 10″, 5° dihedral" },
                { key: "CONTROL", value: "LQR, 12 states" },
                { key: "TOOLS", value: "MATLAB, KiCad, SolidWorks, Keil" },
              ]}
            />
          </div>

          <div className="plates">
            {octocopterPlates.map((p) => (
              <figure className="plate" key={p.src}>
                <div className="plate-img">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArchiveTable({ rows }: { rows: ArchiveRow[] }) {
  return (
    <table className="archive">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>PROJECT</th>
          <th>WHAT IT IS</th>
          <th>BUILT WITH</th>
          <th>LINK</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td className="yr">{r.year}</td>
            <td className="nm">{r.name}</td>
            <td className="st">{r.what}</td>
            <td className="st">{r.stack}</td>
            <td>
              {r.href ? (
                <a href={r.href} rel="noopener">
                  {r.hrefLabel ?? "Link"}
                </a>
              ) : (
                <span className="st">Client site</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Contact() {
  return (
    <section className="close" id="contact">
      <div className="wrap">
        <h2>Currently open to remote full-stack work.</h2>
        <div className="prose">
          <p>
            I also teach PLC programming, ladder logic, hydraulics and pneumatics part-time at
            Kiambu Institute of Science and Technology, and run its mechatronics laboratory.
            Teaching a thing is the fastest way to find out whether you actually understand it.
          </p>
        </div>
        <div className="contact">
          <a href="mailto:waruikiondo@gmail.com">waruikiondo@gmail.com</a>
          <a href="https://github.com/waruikiondo" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/kelvin-warui-51b57315b/" rel="noopener">LinkedIn</a>
          <a href="/kelvin-warui-cv.pdf">Engineering CV</a>
        </div>
      </div>
    </section>
  );
}
