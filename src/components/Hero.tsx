import React from 'react';
import { WineStain, RoughArrow, ScribbleStar } from './ui/Doodles';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 md:left-20 -rotate-12 opacity-40">
        <ScribbleStar className="w-12 h-12 text-[var(--color-kraft)]" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-32 rotate-45 opacity-60">
        <ScribbleStar className="w-8 h-8 text-[var(--color-marker)]" />
      </div>
      
      {/* Central big stain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 mix-blend-multiply">
        <WineStain className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] opacity-20 md:opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="relative inline-block mb-6">
          <span className="absolute -top-5 left-0 md:-left-8 text-sm font-body text-[var(--color-wine)] -rotate-6 font-bold uppercase tracking-widest border-b-2 border-dashed border-[var(--color-wine)]">
            not just a tee
          </span>
          <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter text-[var(--color-marker)] leading-none uppercase mix-blend-color-burn">
            Studied <br /> <span className="text-[var(--color-paper)]" style={{ WebkitTextStroke: '2px var(--color-marker)' }}>Imperfect.</span>
          </h1>
        </div>
        
        <p className="mt-8 max-w-2xl text-xl md:text-2xl font-body text-[var(--color-pencil)] font-medium leading-relaxed bg-[var(--color-paper)]/50 backdrop-blur-sm p-4 rough-border-sm rotate-1">
          A rebellious take on everyday wear. The spilled wine isn't an accident, it's a statement.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 relative">
          <a href="#shop" className="group relative px-10 py-4 font-heading font-bold text-xl uppercase tracking-widest bg-[var(--color-marker)] text-[var(--color-paper)] hover:bg-[var(--color-wine)] transition-colors rough-border -rotate-2 hover:rotate-0 inline-flex items-center">
            Shop the drop
            <RoughArrow className="ml-4 w-10 text-[var(--color-paper)] group-hover:translate-x-2 transition-transform" />
          </a>
          
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="font-body text-sm text-[var(--color-pencil)] rotate-6 max-w-[120px]">
              *limited stock, obviously
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
