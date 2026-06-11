import { motion } from 'motion/react';
import Button from '@/src/components/ui/Button';
import { ArrowRight, BookOpen, Users, Workflow, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
// @ts-ignore
import stormImg from '@/src/assets/images/the_storm_kingdom_chronicles_1781032543150.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row items-stretch pt-20 overflow-hidden border-b border-white/10">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center border-r border-white/5 relative z-20">
          <motion.div {...fadeIn}>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold block mb-4">Media, Leadership & Technology Ecosystem</span>
            <h1 className="text-6xl lg:text-7xl font-serif leading-[0.95] mb-8">
              Vivid <span className="italic font-light">stories.</span> <br/>Transformational <span className="text-brand-gold">journeys.</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-md mb-12 italic">
              Empowering organizations, community leaders, and individuals with cinematic storytelling, character-based leadership frameworks, and premium digital systems under <strong className="text-white font-medium">Kaivors</strong>.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              Explore the Journey
            </Button>
            <Link to="/products">
              <Button variant="outline">View Products</Button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Visual Accent Space */}
        <div className="w-full md:w-1/2 relative bg-brand-navy/30">
          <div className="absolute inset-0 bg-gradient-to-l from-brand-black/40 to-transparent z-10" />
          <img 
            src={stormImg} 
            alt="Cinematic atmosphere" 
            className="w-full h-full object-cover opacity-65"
            referrerPolicy="no-referrer"
          />
          
          {/* Tile-like Overlay for Featured Preview */}
          <div className="absolute inset-0 flex flex-col">
             <div className="flex-1 p-12 bg-white/5 border-b border-white/5 flex flex-col justify-end backdrop-blur-sm">
                <h3 className="text-brand-gold uppercase tracking-[0.2em] text-[11px] font-bold mb-4">Featured Release</h3>
                <h2 className="text-4xl font-serif mb-4">21 Days with Jesus</h2>
                <Link to="/products" className="text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-brand-gold transition-colors">Learn More &rarr;</Link>
             </div>
             <div className="flex-1 p-12 flex flex-col justify-center">
                <h3 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-8">Ecosystem Flow</h3>
                <div className="flex items-center justify-between max-w-sm">
                   {['Stories', 'Reflection', 'Transformation', 'Leadership'].map((step, i) => (
                     <div key={i} className="text-center group">
                        <div className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center text-brand-gold text-[10px] font-serif mb-2 italic transition-all",
                          i === 3 ? "border-brand-gold bg-brand-gold/10" : "border-white/20"
                        )}>0{i+1}</div>
                        <div className={cn("text-[8px] uppercase tracking-widest font-bold", i === 3 ? "text-brand-gold" : "text-white/30")}>{step}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Brand Offerings under Kaivors */}
      <section className="py-24 px-6 bg-[#080808] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Pillars of Kaivors</span>
            <h2 className="font-serif text-4xl mb-4 text-gradient-gold">Our Mentorship Ecosystem</h2>
            <p className="text-white/40 italic max-w-xl mx-auto">We integrate visual narratives, leadership formation, and advanced digital technologies to support personal and character development.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Kingdom Chronicles */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-xl overflow-hidden flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={stormImg} 
                  alt="Kingdom Chronicles" 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                <span className="absolute bottom-4 left-6 text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-black/60 px-3 py-1 rounded-full">Vivid Stories</span>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors">Kingdom Chronicles</h3>
                  <p className="text-sm text-white/50 leading-relaxed italic mb-6">
                    Cinematic, story-driven visual narratives designed to build daily habits of reflection and wisdom. Experience historical epics and wisdom-led stories like never before.
                  </p>
                  <ul className="space-y-2 text-xs text-white/70 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      21 Days with Jesus Series
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Chronicles of Moses & Old Testament
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      High-end Graphic Novel Editions
                    </li>
                  </ul>
                </div>
                <Link to="/products" className="w-full">
                  <Button variant="outline" className="w-full">Explore Chronicles &rarr;</Button>
                </Link>
              </div>
            </motion.div>

            {/* Pillar 2: SouLead */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-xl overflow-hidden flex flex-col justify-between group border-brand-gold/20 hover:border-brand-gold/50 transition-all duration-500 bg-brand-gold/[0.02]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop" 
                  alt="SouLead Leadership" 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                <span className="absolute bottom-4 left-6 text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-black/60 px-3 py-1 rounded-full">Transformational Journeys</span>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors">SouLead</h3>
                  <p className="text-sm text-white/50 leading-relaxed italic mb-6">
                    A comprehensive, character-based leadership framework engineered for corporate groups, community organizations, and emerging global leaders.
                  </p>
                  <ul className="space-y-2 text-xs text-white/70 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Character-First Workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      The Soul Journey Tool
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Exec Coaching & Alignment Seminars
                    </li>
                  </ul>
                </div>
                <Link to="/services" className="w-full">
                  <Button variant="primary" className="w-full bg-brand-gold/95">Explore SouLead &rarr;</Button>
                </Link>
              </div>
            </motion.div>

            {/* Pillar 3: Digital Mentorship */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-xl overflow-hidden flex flex-col justify-between group hover:border-brand-gold/40 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                  alt="Digital Mentorship" 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                <span className="absolute bottom-4 left-6 text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-black/60 px-3 py-1 rounded-full">Global Scale</span>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors">Digital Mentorship</h3>
                  <p className="text-sm text-white/50 leading-relaxed italic mb-6">
                    Empowering organisations and networks globally with modern custom platforms, executive trainings, and dynamic systems.
                  </p>
                  <ul className="space-y-2 text-xs text-white/70 mb-8">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Leader Training & Implementation Guides
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Community Technology & Mobile Platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      Global Ecosystem Interconnections
                    </li>
                  </ul>
                </div>
                <Link to="/services" className="w-full">
                  <Button variant="outline" className="w-full">Explore Platforms &rarr;</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Who We Serve */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4 text-gradient-gold">Who We Serve</h2>
            <div className="w-20 h-[1px] bg-brand-gold/30 mx-auto" />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {['Churches', 'Schools', 'Organizations', 'Families', 'Leaders'].map((item) => (
              <motion.div 
                key={item}
                variants={fadeIn}
                className="glass-panel p-8 rounded-lg text-center hover:border-brand-gold/40 transition-colors cursor-default"
              >
                <Users className="w-8 h-8 mx-auto mb-4 text-brand-gold opacity-50" />
                <h4 className="font-serif text-lg tracking-wide">{item}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Our Ecosystem */}
      <section className="py-24 px-6 bg-brand-navy/20 relative">
        <div className="max-w-7xl mx-auto overflow-hidden">
           <div className="text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] mb-4 block">Growth Path</span>
            <h2 className="font-serif text-4xl">Our Ecosystem</h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Stories', icon: <BookOpen className="w-6 h-6" />, desc: 'Captivating narratives that illuminate truth.' },
                { title: 'Reflection', icon: <Sparkles className="w-6 h-6" />, desc: 'Deep contemplation to internalize wisdom.' },
                { title: 'Transformation', icon: <Heart className="w-6 h-6" />, desc: 'Life-changing shifts in character and values.' },
                { title: 'Leadership', icon: <Workflow className="w-6 h-6" />, desc: 'Empowering others to achieve peak ethical potential.' },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 text-center px-4">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mx-auto mb-6 border-brand-gold/20">
                    <div className="text-brand-gold">{step.icon}</div>
                  </div>
                  <h4 className="font-serif text-xl mb-3">{step.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-5xl mb-6">Equipping <span className="text-brand-gold italic">the Called.</span></h2>
              <p className="text-white/50 leading-relaxed italic">Beyond stories, we provide the tools and guidance to lead with purpose and character in a changing world.</p>
            </div>
            <Link to="/services">
              <Button variant="outline">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { name: 'Kingdom Chronicles Co-Ops', desc: 'Deploy cinematic visual story bundles into learning cohorts, small study groups, or academic curriculums.' },
               { name: 'SouLead Framework', desc: 'In-depth workshops focusing on character-based leadership and custom relational coaching.' },
               { name: 'Digital Mentorship Systems', desc: 'Equipping global learning networks and community cohorts with complete custom software and mobile app setups.' }
             ].map((service) => (
                <div key={service.name} className="group glass-panel p-10 rounded-lg hover:bg-brand-gold/5 transition-all duration-300">
                  <h4 className="font-serif text-xl mb-4 group-hover:text-brand-gold transition-colors">{service.name}</h4>
                  <div className="w-8 h-[1px] bg-brand-gold mb-6" />
                  <p className="text-white/40 text-sm italic group-hover:text-white/60 transition-colors">{service.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Connect & Partner */}
      <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1464639351491-a172c2aa2911?q=80&w=2574&auto=format&fit=crop" 
            alt="Sponsorship background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
         </div>
         
         <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Begin Your Transformational <br /><span className="text-gradient-gold italic">Journey.</span></h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-light">Whether you represent an organization, a school, or a global network, we are here to support your growth, leadership development, and digital integration.</p>
            <Link to="/contact">
              <Button className="px-12 py-4">Get In Touch With Us</Button>
            </Link>
         </div>
      </section>

      {/* Section 7 — Offerings Preview */}
      <section className="py-24 px-6 bg-white text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl mb-4">Ecosystem Key Offerings</h2>
            <div className="w-16 h-[2px] bg-brand-black/20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: '21 Days with Jesus Series', cat: 'Kingdom Chronicles', img: stormImg },
              { name: 'The Soul Journey Tool', cat: 'SouLead', img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2670&auto=format&fit=crop' },
              { name: 'Leader Trainings & Platform Setup', cat: 'Digital Mentorship', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm bg-neutral-100">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2 block">{item.cat}</span>
                <h4 className="font-serif text-xl mb-4 group-hover:text-brand-gold transition-colors">{item.name}</h4>
                <Link to="/products" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-[#050505]">
        <h2 className="font-serif text-5xl mb-12">Start the journey today.</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/products">
            <Button>Explore Ecosystem</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
