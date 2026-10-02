export type Language = 'en' | 'it';

export interface Translations {
  nav: {
    ethos: string;
    shop: string;
    buyNow: string;
    buyTheDrop: string;
    menuToggle: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    limitedStock: string;
  };
  about: {
    title: string;
    p1Part1: string;
    p1Highlight: string;
    p1Part2: string;
    p2: string;
    quote: string;
  };
  showcase: {
    title: string;
    product1Title: string;
    product1Desc: string;
    product2Title: string;
    product2Desc: string;
    almostGone: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    signUp: string;
    linksTitle: string;
    privacy: string;
    privacyNote: string;
    terms: string;
    returns: string;
    instagram: string;
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      ethos: 'ethos',
      shop: 'shop',
      buyNow: 'buy now',
      buyTheDrop: 'Buy the drop',
      menuToggle: 'Toggle menu',
    },
    hero: {
      badge: 'not just a tee',
      titleLine1: 'Studied',
      titleLine2: 'Imperfect.',
      description: "A rebellious take on everyday wear. The spilled wine isn't an accident, it's a statement.",
      cta: 'Shop the drop',
      limitedStock: '*limited stock, obviously',
    },
    about: {
      title: 'The Ethos',
      p1Part1: 'We grew tired of the',
      p1Highlight: 'perfect',
      p1Part2: 'aesthetic. Nisundor is born from the streets, the late nights, and the beautiful mistakes.',
      p2: "It's not luxury. It's not fast fashion. It's a canvas for the rebellious, the creatives, and those who appreciate the ironic subtext of a well-placed wine stain.",
      quote: '"Art is what you can get away with."',
    },
    showcase: {
      title: 'The Drop',
      product1Title: 'Core Tee - Front',
      product1Desc: '100% Cotton. 0% F*cks.',
      product2Title: 'Core Tee - Back',
      product2Desc: 'Wait, look at the back.',
      almostGone: 'Almost gone',
    },
    footer: {
      newsletterTitle: 'Join the cult.',
      newsletterDesc: "We'll only email you when we drop something new or when we accidentally spill wine on the keyboard. No spam.",
      emailPlaceholder: 'your@email.com',
      signUp: 'Sign up',
      linksTitle: 'Links that matter',
      privacy: 'Privacy Policy',
      privacyNote: '(just kidding, but seriously)',
      terms: 'Terms of Service',
      returns: 'Return Policy',
      instagram: 'Instagram',
      rights: 'All rights reserved.',
      madeWith: 'Made with ❤️ and 🍷',
    },
  },
  it: {
    nav: {
      ethos: 'ethos',
      shop: 'shop',
      buyNow: 'acquista',
      buyTheDrop: 'Acquista il drop',
      menuToggle: 'Apri/chiudi menu',
    },
    hero: {
      badge: 'non una semplice tee',
      titleLine1: 'Studiata',
      titleLine2: 'Imperfetta.',
      description: 'Una visione ribelle del guardaroba quotidiano. Il vino versato non è un incidente, è una dichiarazione.',
      cta: 'Scopri il drop',
      limitedStock: '*scorte limitate, ovviamente',
    },
    about: {
      title: "L'Ethos",
      p1Part1: "Ci siamo stancati dell'estetica",
      p1Highlight: 'perfetta',
      p1Part2: '. Nisundor nasce dalla strada, dalle notti in bianco e dagli errori meravigliosi.',
      p2: 'Non è lusso. Non è fast fashion. È una tela per i ribelli, i creativi e chi apprezza il sottotesto ironico di una macchia di vino al posto giusto.',
      quote: '"L\'arte è tutto ciò che puoi permetterti di fare."',
    },
    showcase: {
      title: 'Il Drop',
      product1Title: 'Core Tee - Fronte',
      product1Desc: '100% Cotone. 0% F*cks.',
      product2Title: 'Core Tee - Retro',
      product2Desc: 'Aspetta, guarda il retro.',
      almostGone: 'Quasi esaurito',
    },
    footer: {
      newsletterTitle: 'Unisciti al culto.',
      newsletterDesc: 'Ti scriveremo solo quando rilasceremo novità o quando rovesceremo accidentalmente del vino sulla tastiera. Niente spam.',
      emailPlaceholder: 'la-tua@email.com',
      signUp: 'Iscriviti',
      linksTitle: 'Link importanti',
      privacy: 'Privacy Policy',
      privacyNote: '(scherzavamo, ma sul serio)',
      terms: 'Termini di Servizio',
      returns: 'Politica di Reso',
      instagram: 'Instagram',
      rights: 'Tutti i diritti riservati.',
      madeWith: 'Fatto con ❤️ e 🍷',
    },
  },
};
