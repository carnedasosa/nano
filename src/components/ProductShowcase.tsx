import React from 'react';
import { ScribbleStar } from './ui/Doodles';

export const ProductShowcase = () => {
  return (
    <section id="shop" className="py-24 relative bg-[var(--color-paper)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-[var(--color-marker)]">
            The Drop
          </h2>
          <div className="absolute top-0 right-1/4 md:right-1/3 -translate-y-1/2">
            <ScribbleStar className="text-[var(--color-wine)] w-8 h-8 rotate-12" />
          </div>
        </div>

        {/* Scattered products layout */}
        <div className="relative min-h-[800px] md:min-h-[600px] w-full max-w-4xl mx-auto">
          
          {/* Product 1: Front */}
          <div className="absolute top-0 left-0 md:left-10 w-[80%] md:w-[45%] z-10 group">
            <div className="relative bg-[#ebebeb] p-2 rough-border transform -rotate-3 transition-transform hover:-translate-y-2 hover:rotate-0 hover:z-30 duration-300">
              <div className="w-full aspect-[3/4] overflow-hidden rough-border-sm relative">
                <img src="/images/fronte-tshirt.jpeg" alt="Nisundor T-Shirt Front" className="w-full h-full object-cover mix-blend-darken" />
              </div>
              {/* Fake tape */}
              <div className="absolute -top-3 right-10 w-16 h-5 bg-white/60 -rotate-6 backdrop-blur-sm"></div>
              
              <div className="mt-4 flex justify-between items-end px-2">
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase">Core Tee - Front</h3>
                  <p className="font-body text-[var(--color-pencil)]">100% Cotton. 0% F*cks.</p>
                </div>
                <span className="font-heading font-black text-xl">€45</span>
              </div>
            </div>
          </div>

          {/* Product 2: Back */}
          <div className="absolute top-[350px] md:top-[100px] right-0 md:right-10 w-[80%] md:w-[45%] z-20 group">
            <div className="relative bg-[#ebebeb] p-2 rough-border transform rotate-6 transition-transform hover:-translate-y-2 hover:rotate-0 hover:z-30 duration-300">
              <div className="w-full aspect-[3/4] overflow-hidden rough-border-sm relative">
                <img src="/images/retro-tshirt.jpeg" alt="Nisundor T-Shirt Back" className="w-full h-full object-cover mix-blend-darken" />
                
                {/* Out of stock tag - ironic */}
                <div className="absolute top-4 -right-8 bg-[var(--color-wine)] text-[var(--color-paper)] font-heading font-bold uppercase tracking-wider py-1 px-10 rotate-45 border-y-2 border-dashed border-[var(--color-paper)]">
                  Almost gone
                </div>
              </div>
              {/* Fake tape */}
              <div className="absolute -top-2 left-4 w-12 h-4 bg-[var(--color-kraft)]/50 rotate-12 backdrop-blur-sm"></div>
              
              <div className="mt-4 flex justify-between items-end px-2">
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase">Core Tee - Back</h3>
                  <p className="font-body text-[var(--color-pencil)]">Wait, look at the back.</p>
                </div>
                <span className="font-heading font-black text-xl">€45</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
