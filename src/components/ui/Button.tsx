import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-10 py-4 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-brand-gold text-brand-black hover:bg-white",
    secondary: "bg-white text-brand-black hover:bg-brand-gold",
    outline: "bg-white/5 text-white border border-white/20 hover:border-brand-gold hover:text-brand-gold",
    ghost: "bg-transparent text-white/50 hover:text-white"
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
