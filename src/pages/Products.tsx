import { motion } from 'motion/react';
import { Book, Newspaper, Smartphone, FileText, ChevronRight } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function Products() {
  const categories = [
    {
      id: 'chronicles',
      name: 'Kingdom Chronicles',
      icon: <Book />,
      items: [
        { name: '21 Days with Jesus', style: 'Cinematic visual story series' },
        { name: 'Moses: Journey to the Promised', style: 'Historical epic narrative' },
        { name: 'Apostles Creed Graphic Novel', style: 'Cinematic comic narrative' },
        { name: 'Ancient Witnesses collection', style: 'Illustrated historical journals' }
      ]
    },
    {
      id: 'soulead',
      name: 'SouLead',
      icon: <FileText />,
      items: [
        { name: 'The Soul Journey Tool', style: 'Interactive character diagnostic' },
        { name: 'SouLead Executive Framework', style: 'Character-based leadership guides' },
        { name: 'Corporate Alignment Syllabus', style: 'Workshops & seminars kit' },
        { name: 'Daily Alignment Planner', style: 'Hardcover journal' }
      ]
    },
    {
      id: 'digital',
      name: 'Digital Mentorship',
      icon: <Smartphone />,
      items: [
        { name: 'Trainings for Community Leaders', style: 'Digital video masterclasses' },
        { name: 'Custom Visual Mentorship Platforms', style: 'SaaS & native app setups' },
        { name: 'Global Network Integrations', style: 'Global ecosystem consulting' },
        { name: 'Reflections Mobile Platform', style: 'Daily mindfulness application' }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Catalog</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Explore the <span className="text-gradient-gold">Ecosystem</span></h1>
            <p className="text-white/40 italic max-w-xl mx-auto">From cinematic stories to deep leadership insights, discover resources for every step of your personal and professional growth journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-10 rounded-xl group hover:border-brand-gold/40 transition-all"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center border border-brand-gold/20">
                    {cat.icon}
                  </div>
                  <h2 className="font-serif text-3xl group-hover:text-brand-gold transition-colors">{cat.name}</h2>
                </div>

                <div className="space-y-6 mb-10">
                   {cat.items.map((item, idx) => (
                     <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors rounded-sm cursor-pointer">
                        <div>
                          <h4 className="font-medium text-sm text-white/90">{item.name}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-brand-gold/60">{item.style}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-brand-gold" />
                     </div>
                   ))}
                </div>

                <Button variant="outline" className="w-full">Explore {cat.name.split(' ')[0]}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-24 px-6 bg-brand-navy/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop" 
                  alt="Featured Product" 
                  className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
            </div>
            <div className="w-full md:w-1/2">
                <span className="text-brand-gold text-[10px] uppercase tracking-widest mb-4 block">Signature Experience</span>
                <h2 className="font-serif text-5xl mb-8 leading-tight">21 Days with Jesus <br /><span className="italic text-brand-gold opacity-80">Cinematic Classic</span></h2>
                <p className="text-white/50 mb-10 leading-relaxed italic">
                  Explore the visual steps and timeless leadership lessons of historical narratives. This flagship visual experience walks you through 21 distinct moments of the historical record, integrating modern high-fidelity graphics with deep reflections from the SouLead character-building framework.
                </p>
                <Button>Begin the Journey</Button>
            </div>
        </div>
      </section>
    </div>
  );
}
