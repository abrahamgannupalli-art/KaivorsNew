import { motion } from 'motion/react';
import { ShoppingCart, Plus, Minus, Search, CreditCard } from 'lucide-react';
import { useState } from 'react';
import Button from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

const products = [
  { id: 1, name: '21 Days with Jesus', cat: 'Series', price: 49.99, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, name: 'Monthly Magazine', cat: 'Subscription', price: 12.99, img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop' },
  { id: 3, name: 'Leadership Kit (25-pack)', cat: 'Church Kit', price: 299.99, img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2670&auto=format&fit=crop' },
  { id: 4, name: 'Kingdom Chronicles Poster', cat: 'Merchandise', price: 24.99, img: 'https://images.unsplash.com/photo-1579762791176-7ca2982d664c?q=80&w=2574&auto=format&fit=crop' },
  { id: 5, name: 'The Kingdom Scrolls Vol 1', cat: 'Comics', price: 19.99, img: 'https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=2670&auto=format&fit=crop' },
  { id: 6, name: 'Purpose Journal', cat: 'Reflection', price: 29.99, img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop' },
];

export default function Shop() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Books', 'Kits', 'Magazine', 'Merchandise'];

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 block">Official Shop</span>
              <h1 className="font-serif text-5xl md:text-7xl mb-4">Storefront</h1>
              <div className="w-16 h-[2px] bg-brand-gold/30" />
            </div>
            
            <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest bg-white/5 p-2 rounded-full border border-white/10">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeTab === cat ? "bg-brand-gold text-brand-black font-bold" : "text-white/50 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((p, idx) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-white/5 rounded-sm overflow-hidden mb-6 relative">
                   <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                    referrerPolicy="no-referrer"
                  />
                   <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                      <button className="w-10 h-10 bg-white text-brand-black flex items-center justify-center rounded-full hover:bg-brand-gold transition-colors shadow-xl">
                        <Plus size={20} />
                      </button>
                   </div>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold block mb-1">{p.cat}</span>
                     <h3 className="font-serif text-xl mb-4">{p.name}</h3>
                   </div>
                   <div className="text-lg font-serif italic text-white/40">${p.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary (Floating) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white text-brand-black px-10 py-4 rounded-full flex items-center gap-10 shadow-2xl border-4 border-brand-black"
      >
        <div className="flex items-center gap-3">
          <ShoppingCart size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">3 Items</span>
        </div>
        <div className="h-6 w-[1px] bg-brand-black/20" />
        <div className="text-sm font-serif italic">$542.97</div>
        <Button variant="primary" className="px-6 py-2 scale-90">Review Order</Button>
      </motion.div>

      {/* Payment Methods */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center opacity-30">
        <div className="flex justify-center gap-12 items-center">
           <CreditCard size={32} />
           <div className="font-serif italic text-2xl">Stripe</div>
           <div className="font-serif italic text-2xl">PayPal</div>
           <div className="font-bold tracking-widest text-lg">APPLE PAY</div>
        </div>
        <p className="mt-8 text-[10px] tracking-[0.3em] uppercase">Secure Transactions Guaranteed</p>
      </section>
    </div>
  );
}
