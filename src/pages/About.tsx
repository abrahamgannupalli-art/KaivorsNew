import { motion } from 'motion/react';
import Button from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export default function About() {
  const sections = [
    {
      title: "Our Story",
      content: "Kaivors was born out of a deep-seated vision to ignite personal breakthroughs, purposeful expansion, and character development across generations. We believe that visual imagery, premium leadership tools, and robust digital integration can elevate how global organizations, leaders, and families engage with timeless wisdom and life values. Under the Kaivors umbrella, we publish the critically-acclaimed Kingdom Chronicles visual wisdom series, instruct with the SouLead character framework, and engineer digital mentorship technology ecosystems."
    },
    {
      title: "Mission Statement",
      content: "To create vivid stories and guide transformational journeys that empower individuals and organizations to realize their ultimate purpose and potential.",
      isQuote: true
    },
    {
      title: "Vision Statement",
      content: "To pioneer a globally connected, tech-driven mentorship ecosystem that builds character and outstanding leadership.",
      isQuote: true
    }
  ];

  const values = [
    { name: "Truth", desc: "Upholding universal truth and integrity in every story." },
    { name: "Compassion", desc: "Leading with empathy, responsiveness, and genuine human care." },
    { name: "Integrity", desc: "Excellence and honesty in everything we create." },
    { name: "Transformation", desc: "Resources designed for real, lasting life change." },
    { name: "Purpose", desc: "Helping every individual find their unique potential and calling." }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 border-b border-white/10">
         <div className="max-w-4xl mx-auto text-center">
           <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 block">About the Mission</span>
           <h1 className="font-serif text-5xl md:text-7xl mb-10">KAI<span className="text-gradient-gold italic">VORS</span></h1>
           <div className="w-20 h-[1px] bg-brand-gold/30 mx-auto" />
         </div>
       </section>

      {/* Story Sections */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-serif text-brand-gold text-2xl uppercase tracking-widest mb-10">{section.title}</h2>
              <p className={cn(
                "leading-relaxed md:text-lg",
                section.isQuote ? "text-2xl md:text-3xl font-serif italic text-white/90" : "text-white/60 font-light"
              )}>
                {section.isQuote ? `"${section.content}"` : section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-brand-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Core Values</h2>
            <p className="text-white/40 italic">The pillars that define our culture and content.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass-panel p-8 rounded-lg text-center">
                <h4 className="font-serif text-brand-gold text-xl mb-4">{v.name}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-2xl mb-6 text-brand-gold">A Message from our Founder</h3>
        <p className="text-white/60 italic leading-relaxed mb-10">
          "Our goal is to ignite a passion for character, wisdom, and leadership in every heart. We want to see leaders rise, communities grow, and lives transformed through the power of timeless truths told through a modern visual lens."
        </p>
        <div className="font-serif text-white/80">John Abraham G. <br /><span className="text-[10px] uppercase tracking-widest text-brand-gold">Founder & CEO</span></div>
      </section>
    </div>
  );
}
