import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="font-serif text-2xl tracking-wider text-white">KAI<span className="text-brand-gold">VORS</span></span>
          </Link>
          <p className="text-white/50 max-w-md leading-relaxed italic">
            Vivid Stories. Transformational journeys. Empowering organisations, educators, and leaders through modern visual media, leadership frameworks, and global digital systems.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-brand-gold mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-brand-gold mb-6 tracking-wide">Connect</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Twitter</a></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 text-white/30">
        <div className="flex gap-8 md:gap-12 text-[9px] uppercase tracking-[0.3em] font-bold mb-4 md:mb-0">
          <span>Truth</span>
          <span>Compassion</span>
          <span>Integrity</span>
          <span>Transformation</span>
          <span>Purpose</span>
        </div>
        <div className="text-[10px] italic text-brand-gold font-serif">
          Vivid Stories. Transformational journeys.
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 text-[9px] uppercase tracking-[0.2em] text-white/20">
        <p>&copy; {new Date().getFullYear()} Kaivors, Inc. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
