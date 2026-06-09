import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen font-sans">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 block">Connect with us</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">Let's start the <br /><span className="text-gradient-gold italic">Conversation.</span></h1>
            <p className="text-white/50 mb-12 italic leading-relaxed">Whether you're looking for organizational partnerships, leadership coaching, or simply want to inquire about our frameworks—we are here to listen and engage.</p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Email</span>
                   <span className="font-serif text-lg">hello@kaivors.com</span>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-gold">
                  <Phone size={20} />
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">Phone</span>
                   <span className="font-serif text-lg">+1 (555) 000-LEAD</span>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-brand-gold">
                  <MapPin size={20} />
                </div>
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-1">HQ</span>
                   <span className="font-serif text-lg">Visual Arts District, Austin TX</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-12 rounded-2xl relative"
          >
             <h2 className="font-serif text-3xl mb-8">Send an Inquiry</h2>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-gold outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-gold outline-none transition-colors appearance-none">
                    <option className="bg-brand-black">General Inquiry</option>
                    <option className="bg-brand-black">Enterprise & Corporate Group Partnership</option>
                    <option className="bg-brand-black">School & Academic Partnership</option>
                    <option className="bg-brand-black">Non-Profit & Community Partnership</option>
                    <option className="bg-brand-black">Sponsorship & Advertising</option>
                    <option className="bg-brand-black">Coaching & Advising</option>
                    <option className="bg-brand-black">Wholesale & Distribution Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
                  <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:border-brand-gold outline-none transition-colors resize-none" placeholder="Tell us about your mission..."></textarea>
                </div>

                <Button className="w-full py-5 flex gap-3 group">
                   Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
             </form>

             <div className="mt-8 flex justify-center gap-6 grayscale opacity-50">
               <span className="text-[10px] uppercase tracking-widest">Follow us:</span>
               <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-4">Instagram</a>
               <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-4">Facebook</a>
               <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-4">Twitter</a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Map or location visualizer */}
      <section className="h-[400px] w-full grayscale opacity-30 mt-20">
         <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
          alt="Map context" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
}
