import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-marker)] text-[var(--color-paper)] pt-20 pb-10 border-t-[10px] border-[var(--color-wine)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <div>
            <h3 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Join the cult.
            </h3>
            <p className="font-body text-[var(--color-pencil)] text-lg mb-6 max-w-md">
              We'll only email you when we drop something new or when we accidentally spill wine on the keyboard. No spam.
            </p>
            
            {/* UI-only newsletter form */}
            <form className="flex max-w-md relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-[var(--color-paper)] text-[var(--color-marker)] px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-[var(--color-wine)] rough-border-sm"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-0 bottom-0 bg-[var(--color-wine)] text-[var(--color-paper)] px-6 font-heading font-bold uppercase border-l-2 border-[var(--color-marker)] transition-colors hover:bg-[var(--color-kraft)] rounded-r-[15px]"
              >
                Sign up
              </button>
            </form>
          </div>

          <div className="flex md:justify-end">
            <div className="bg-[var(--color-paper)] p-6 rough-border transform rotate-2 max-w-xs w-full text-[var(--color-marker)]">
              <h4 className="font-heading font-bold text-xl mb-4 border-b-2 border-dashed border-[var(--color-pencil)] pb-2">Links that matter</h4>
              <ul className="space-y-2 font-body font-medium">
                <li><a href="#" className="hover:text-[var(--color-wine)] transition-colors line-through decoration-[var(--color-wine)]">Privacy Policy</a> (just kidding, but seriously)</li>
                <li><a href="#" className="hover:text-[var(--color-wine)] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[var(--color-wine)] transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-wine)] transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="border-t-2 border-dashed border-[var(--color-pencil)] pt-8 flex flex-col md:flex-row justify-between items-center text-[var(--color-pencil)] font-body text-sm">
          <p>© {new Date().getFullYear()} Nisundor. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ and 🍷</p>
        </div>
      </div>
    </footer>
  );
};
