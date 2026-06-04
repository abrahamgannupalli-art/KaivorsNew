import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-12 py-8",
        scrolled ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border-2 border-brand-gold rotate-45 flex items-center justify-center group-hover:bg-brand-gold transition-all duration-300">
             <span className="-rotate-45 text-[10px] font-bold text-brand-gold group-hover:text-black transition-colors">KV</span>
          </div>
          <span className="text-xl tracking-[0.2em] font-serif font-light text-white">KAI<span className="text-brand-gold">VORS</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-[11px] uppercase tracking-widest font-medium transition-all hover:text-brand-gold",
                location.pathname === link.href ? "text-brand-gold" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className="px-6 py-2 border border-brand-gold text-brand-gold text-[10px] uppercase tracking-[0.15em] font-bold hover:bg-brand-gold hover:text-black transition-all">Connect With Us</button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium transition-colors",
                location.pathname === link.href ? "text-brand-gold" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
