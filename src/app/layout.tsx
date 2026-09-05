import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const SITE_URL = "https://kelvinwarui.com"; // <- your real domain
const NAME = "Kelvin Warui Kiondo";
const ROLE = "Full-stack developer & mechatronics engineer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${NAME} — ${ROLE}`, template: `%s — ${NAME}` },
  description:
    "I build production web systems and the hardware they talk to. Next.js, TypeScript, Postgres. Based in Nairobi, working remotely worldwide.",
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: NAME,
    title: `${NAME} — ${ROLE}`,
    description: "Production web systems and the hardware they talk to.",
    locale: "en_KE",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${NAME} — ${ROLE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: "Production web systems and the hardware they talk to.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/warui.png", apple: "/warui.png" },
};

export const viewport: Viewport = { themeColor: "#FAFAF8", colorScheme: "light" };

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: ROLE,
  email: "mailto:waruikiondo@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Dedan Kimathi University of Technology" },
  knowsAbout: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Flutter", "Mechatronics", "Embedded systems", "Control systems"],
  sameAs: [
    "https://github.com/waruikiondo",
    "https://www.linkedin.com/in/kelvin-warui-51b57315b/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a className="skip" href="#main">Skip to content</a>

        <header className="masthead">
          <div className="wrap">
            <Link href="/" className="mark">Kelvin Warui Kiondo</Link>
            <nav className="nav">
              <Link href="/#work">Work</Link>
              <Link href="/#hardware">Hardware</Link>
              <Link href="/#archive">Archive</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>
      </body>
    </html>
  );
}
