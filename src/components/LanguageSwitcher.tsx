import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'nav' | 'mobile';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', variant = 'nav' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div 
        className={`inline-flex items-center justify-center gap-2 p-1 rough-border-sm bg-[var(--color-paper)] ${className}`}
        role="group"
        aria-label="Selettore lingua / Language selector"
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-4 py-1.5 font-heading text-base font-bold uppercase tracking-wider transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-[var(--color-marker)] text-[var(--color-paper)] -rotate-1'
              : 'text-[var(--color-pencil)] hover:text-[var(--color-marker)]'
          }`}
          aria-label="Switch to English"
          aria-pressed={language === 'en'}
        >
          EN
        </button>
        <span className="text-[var(--color-pencil)] font-heading font-bold select-none">/</span>
        <button
          type="button"
          onClick={() => setLanguage('it')}
          className={`px-4 py-1.5 font-heading text-base font-bold uppercase tracking-wider transition-all cursor-pointer ${
            language === 'it'
              ? 'bg-[var(--color-wine)] text-[var(--color-paper)] rotate-1'
              : 'text-[var(--color-pencil)] hover:text-[var(--color-marker)]'
          }`}
          aria-label="Passa a Italiano"
          aria-pressed={language === 'it'}
        >
          IT
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center rough-border-sm bg-[var(--color-paper)] p-0.5 text-xs font-heading font-bold tracking-wider uppercase ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
          language === 'en'
            ? 'bg-[var(--color-marker)] text-[var(--color-paper)]'
            : 'text-[var(--color-pencil)] hover:text-[var(--color-wine)]'
        }`}
        aria-label="English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-[var(--color-pencil)]/40 px-0.5 select-none text-[10px]">|</span>
      <button
        type="button"
        onClick={() => setLanguage('it')}
        className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
          language === 'it'
            ? 'bg-[var(--color-wine)] text-[var(--color-paper)]'
            : 'text-[var(--color-pencil)] hover:text-[var(--color-wine)]'
        }`}
        aria-label="Italiano"
        aria-pressed={language === 'it'}
      >
        IT
      </button>
    </div>
  );
};
