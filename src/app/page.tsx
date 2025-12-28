import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { Pricing } from '../components/Pricing'; // <-- Import Pricing
import { TechStack } from '../components/TechStack';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <main className="mx-auto w-full overflow-hidden">
      <Hero />
      
      {/* Added consistent spacing using padding/margin utility classes */}
      <div className="space-y-12">
        <Services />
        <ProjectShowcase />
        <Pricing /> {/* <-- Add Pricing Here */}
        <TechStack />
      </div>
      
      <Contact />
    </main>
  );
}