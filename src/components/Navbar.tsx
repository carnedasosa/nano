import React, { useState, useEffect } from 'react';
import { ScribbleStar } from './ui/Doodles';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--color-paper)]/90 backdrop-blur-sm border-b-2 border-[var(--color-marker)] border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src="/images/nisundor-logo.png" alt="Nisundor Logo" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-heading font-medium">
            <a href="#about" className="hover:text-[var(--color-wine)] transition-colors relative group">
              ethos
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-wine)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
            </a>
            <a href="#shop" className="hover:text-[var(--color-wine)] transition-colors relative group">
              shop
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--color-wine)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
            </a>
            <a href="#shop" className="px-5 py-2 rough-border hover:bg-[var(--color-marker)] hover:text-[var(--color-paper)] transition-all flex items-center space-x-2 -rotate-1 hover:rotate-0">
              <ScribbleStar className="w-4 h-4" />
              <span>buy now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 border-2 border-[var(--color-marker)] rounded-md hover:bg-[var(--color-marker)] hover:text-[var(--color-paper)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-20 z-40 bg-[var(--color-paper)] transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full pt-12 px-6 space-y-8 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5">
            <ScribbleStar className="w-64 h-64 text-[var(--color-marker)] rotate-12" />
          </div>

          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-5xl font-heading font-black uppercase tracking-tighter hover:text-[var(--color-wine)] transition-colors"
          >
            ethos
          </a>
          <a 
            href="#shop" 
            onClick={() => setIsOpen(false)}
            className="text-5xl font-heading font-black uppercase tracking-tighter hover:text-[var(--color-wine)] transition-colors"
          >
            shop
          </a>
          
          <div className="pt-8 w-full">
            <a 
              href="#shop" 
              onClick={() => setIsOpen(false)}
              className="block w-full py-6 rough-border bg-[var(--color-marker)] text-[var(--color-paper)] font-heading font-bold text-2xl uppercase tracking-widest hover:bg-[var(--color-wine)] transition-colors -rotate-2"
            >
              Buy the drop
            </a>
          </div>

          <p className="font-body text-[var(--color-pencil)] italic pt-12">
            "Art is what you can get away with."
          </p>
        </div>
      </div>
    </nav>
  );
};
