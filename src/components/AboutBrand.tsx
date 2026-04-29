import React from 'react';
import { StrikeThrough } from './ui/Doodles';

export const AboutBrand = () => {
  return (
    <section id="about" className="py-32 relative bg-[var(--color-marker)] text-[var(--color-paper)] overflow-hidden">
      {/* Decorative tape elements */}
      <div className="absolute top-0 left-1/4 w-32 h-8 bg-white/20 -rotate-3 backdrop-blur-sm -translate-y-4"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-10 bg-white/10 rotate-6 backdrop-blur-sm"></div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Collage Image Area */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--color-wine)] transform -rotate-3 rough-border translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="relative bg-[var(--color-kraft)] aspect-[4/5] p-4 rough-border transform rotate-2 transition-transform group-hover:rotate-1">
              {/* Using the back t-shirt as a mood image here */}
              <div className="w-full h-full overflow-hidden rough-border-sm relative filter sepia-[0.3] contrast-125 grayscale-[0.2]">
                <img src="/images/retro-tshirt.jpeg" alt="Nisundor Vibe" className="w-full h-full object-cover mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
              </div>
              
              {/* Fake tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 rotate-2 backdrop-blur-md"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter">
                The Ethos
              </h2>
              <StrikeThrough className="text-[var(--color-wine)] top-2 md:top-4 opacity-80" />
            </div>

            <div className="space-y-6 font-body text-lg md:text-xl text-[var(--color-paper)]/80">
              <p>
                We grew tired of the <span className="text-[var(--color-wine)] font-bold font-heading line-through decoration-white">perfect</span> aesthetic. 
                Nisundor is born from the streets, the late nights, and the beautiful mistakes.
              </p>
              <p>
                It's not luxury. It's not fast fashion. It's a canvas for the rebellious, the creatives, and those who appreciate the ironic subtext of a well-placed wine stain.
              </p>
              <div className="pt-6 border-t-2 border-dashed border-[var(--color-paper)]/20">
                <p className="font-heading font-bold text-2xl text-[var(--color-kraft)] italic">
                  "Art is what you can get away with."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
