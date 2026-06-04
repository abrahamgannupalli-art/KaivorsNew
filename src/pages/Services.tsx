import { motion } from 'motion/react';
import { Award, Target, MessageSquare, Handshake } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function Services() {
  const services = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Kingdom Chronicles Co-Ops",
      desc: "Deploy cinematic visual story bundles like 21 Days with Jesus and Moses directly into your church congregations, home groups, or academic curriculums.",
      tags: ["Cinematic Stories", "Group Curriculums", "Campaign Materials"]
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "SouLead Framework",
      desc: "In-depth workshops focusing on character-based leadership, relational cohesion, and custom group coaching backed by the advanced Soul Journey Tool.",
      tags: ["Leadership Framework", "Soul Journey Workshops", "Executive Coaching"]
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Digital Discipleship Systems",
      desc: "Equipping administrators and global church groups with complete software setups, custom network portals, global ecosystem guidance, and mobile app support.",
      tags: ["Platform Architectures", "Leader Trainings", "Digital Ecosystems"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 block">Empowerment</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Transformation <br /><span className="text-gradient-gold italic">& Leadership</span></h1>
          <p className="text-white/50 italic leading-relaxed">
            We provide strategic guidance and spiritual equipping for those called to lead with integrity. Our services are designed to activate your purpose and refine your character.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-2xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
              
              <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              <h2 className="font-serif text-3xl mb-6 group-hover:text-brand-gold transition-colors">{s.title}</h2>
              <p className="text-white/50 mb-10 leading-relaxed italic">{s.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full text-white/40 group-hover:border-brand-gold/30 group-hover:text-brand-gold/70 transition-colors">{tag}</span>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">Enquire About {s.title.split(' ')[0]}</Button>
            </motion.div>
          ))}
        </div>

        {/* Discovery Session */}
        <div className="max-w-5xl mx-auto bg-brand-gold p-12 md:p-20 text-brand-black text-center rounded-sm">
           <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to align your mission?</h2>
           <p className="text-brand-black/70 mb-12 max-w-2xl mx-auto font-medium">Book a 30-minute discovery session with our leadership team today.</p>
           <Button variant="secondary" className="px-16 scale-110">Book a Discovery Session</Button>
           <p className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">† Availability is limited</p>
        </div>
      </section>

      <section className="py-12 px-6 text-center max-w-2xl mx-auto">
        <p className="text-[10px] text-white/30 italic">
          ⚠️ Guidance and counseling services provided are spiritual and pastoral in nature. Kaivors does not provide clinical or licensed psychology services unless explicitly stated during intake.
        </p>
      </section>
    </div>
  );
}
