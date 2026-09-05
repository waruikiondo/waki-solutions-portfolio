import { projects, archive } from "@/lib/projects";
import {
  TitleBlock,
  WorkSheet,
  HardwareSection,
  ArchiveTable,
  Contact,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>I build production web systems, and the hardware they talk to.</h1>
          <p className="hero-lede">
            Full-stack developer and mechatronics engineer. I ship platforms that take
            payments, hold confidential records and stay up — and I came to them from PLCs,
            PCB layout and control theory, which is why I tend to ask what happens when the
            connection drops.
          </p>
          <TitleBlock />
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head">
            <h2>Selected work</h2>
            <span className="data">
              {projects.length} OF {projects.length + archive.length}
            </span>
          </div>
          {projects.map((p, i) => (
            <WorkSheet key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <HardwareSection />

      <section className="section" id="archive">
        <div className="wrap">
          <div className="section-head">
            <h2>Archive</h2>
            <span className="data">EVERYTHING ELSE</span>
          </div>
          <ArchiveTable rows={archive} />
        </div>
      </section>

      <Contact />
    </>
  );
}
