# Nisundor — Documentazione Tecnica & Architetturale del Progetto

> **Autore:** Senior Website Developer & Software Architect  
> **Versione Progetto:** 1.0.0  
> **Ultima Revisione:** Ottobre 2026  
> **Stack:** React 19 • TypeScript 6 • Vite 8 • Tailwind CSS v4  

---

## 1. Executive Summary & Brand Identity

**Nisundor** è un'applicazione web e-commerce/landing page per un brand di abbigliamento streetwear indipendente e ribelle. L'identità visiva e concettuale è fondata sul rifiuto del minimalismo clinico e patinato, abbracciando un'estetica *"sketchbook / brutalist"* con tratti a pennarello, texture di carta, adesivi e macchie di vino (*"The spilled wine isn't an accident, it's a statement"*).

### Caratteristiche Distintive:
- **Design Artigianale:** Bordi asimmetrici organici (`.rough-border`), texture granulare SVG in overlay e rotazioni angolari calcolate.
- **Micro-interazioni:** Hover animati con rotazioni correttive (-2deg a 0deg), sottolineature ad espansione dinamica e transizioni di colore.
- **Internazionalizzazione (i18n) Nativamente Integrata:** Passaggio fluido e persistito tra lingua inglese e italiana senza dipendenze pesanti esterne.

---

## 2. Stack Tecnologico & Dipendenze Verificate

Tutti i pacchetti e le versioni sono stati verificati direttamente da `package.json` e dal lockfile:

| Tecnologia | Versione | Scopo & Note Architetturali |
| :--- | :--- | :--- |
| **React** | `^19.2.5` | Versione core con supporto completo alle ultime API React 19. |
| **React DOM** | `^19.2.5` | Rendering client-side nel target `#root`. |
| **Vite** | `^8.0.10` | Build tool e dev server ultra-veloce basato su Rollup & esbuild. |
| **Tailwind CSS** | `^4.2.4` | Motore CSS v4 con `@theme` nativo configurato in `src/index.css`. |
| **@tailwindcss/vite** | `^4.2.4` | Plugin Vite ufficiale per compilazione JIT ad alte prestazioni. |
| **TypeScript** | `~6.0.2` | Tipizzazione statica rigorosa con opzione `tsc -b`. |
| **ESLint** | `^10.2.1` | Linter di ultima generazione con supporto flat config `eslint.config.js`. |
| **Lucide React** | `^1.14.0` | Set di icone vettoriali leggere (`Menu`, `X`). |
| **clsx / tailwind-merge**| `^2.1.1` / `^3.5.0` | Utility `cn()` per fusione di classi Tailwind senza conflitti. |

---

## 3. Design System & Direzione Visiva

Il design system è definito all'interno di `src/index.css` sfruttando la direttiva `@theme` di Tailwind CSS v4.

### 3.1 Palette Cromatica Ufficiale
- **`--color-paper` (`#FAFAF8`):** Sfondo bianco caldo cartaceo.
- **`--color-marker` (`#1A1A1A`):** Nero inchiostro profondo per testi, bordi e contrasto.
- **`--color-pencil` (`#4A4A4A`):** Grafite scura per testi secondari e note.
- **`--color-kraft` (`#C4A77D`):** Tonalità cartone kraft usata come accento caldo e cornici.
- **`--color-wine` (`#722F37`):** Rosso borgogna / vino versato, colore di firma del brand per CTA, selezioni testo e badge.

### 3.2 Tipografia
Caricata via Google Fonts in `index.html`:
- **Heading (`font-heading`):** `'Space Grotesk', sans-serif` — font geometrico con kerning stretto (`letter-spacing: -0.02em`) per titoli d'impatto e bottoni.
- **Body (`font-body`):** `'Archivo', sans-serif` — carattere grottesco pulito e ad alta leggibilità per paragrafi e copy.

### 3.3 Texture & Utility Personalizzate
- **Paper Noise Texture:** Generata dinamicamente con un filtro SVG inline `fractalNoise` al 5% di opacità applicato al tag `body`.
- **`.rough-border`:** Bordo a inchiostro da 2px con raggio poligonale organico:
  ```css
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  ```
- **`.rough-border-sm`:** Variante da 1.5px per elementi di dimensioni minori (tag, badge, campi di input).

---

## 4. Architettura dei File e Componenti

```
nano/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/
│       ├── fronte-tshirt.jpeg
│       ├── nisundor-logo.png
│       └── retro-tshirt.jpeg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Doodles.tsx          # Vettori SVG organici (ScribbleStar, WineStain, ecc.)
│   │   ├── AboutBrand.tsx           # Sezione Manifesto "The Ethos"
│   │   ├── Footer.tsx               # Footer con form newsletter e link legali
│   │   ├── Hero.tsx                 # Hero section con headline e CTA primaria
│   │   ├── LanguageSwitcher.tsx     # Elemento di switch lingua EN | IT (desktop + mobile)
│   │   ├── Navbar.tsx               # Header fisso, navigazione e drawer mobile
│   │   └── ProductShowcase.tsx      # Showcase prodotti stile lookbook Polaroid
│   ├── context/
│   │   ├── language-context-definition.ts # Definizione del React Context per i18n
│   │   └── LanguageContext.tsx      # Provider per la gestione dello stato della lingua
│   ├── hooks/
│   │   └── useLanguage.ts           # Custom hook per consumare lingua e traduzioni
│   ├── i18n/
│   │   └── translations.ts          # Dizionario tipizzato bilingue (EN / IT)
│   ├── lib/
│   │   └── utils.ts                 # Funzione utility cn() per unione classi Tailwind
│   ├── App.tsx                      # Root component dell'applicazione
│   ├── index.css                    # Setup Tailwind v4, variabili CSS e stili globali
│   └── main.tsx                     # Entrypoint DOM ReactDOM.createRoot
├── eslint.config.js                 # Configurazione flat ESLint
├── index.html                       # HTML shell con preconnect e font
├── package.json                     # Metadati di progetto e script
├── tsconfig.json                    # Configurazione radice TypeScript
├── tsconfig.app.json                # Configurazione client TypeScript
└── vite.config.ts                   # Configurazione Vite con plugin React e Tailwind
```

### Dettaglio dei Componenti Principali:
1. **`Navbar`:** Barra fissa superiore con logo Nisundor, link ancora (`#about`, `#shop`), selettore di lingua integrato, pulsante d'acquisto e menu hamburger responsive con blocco dello scroll del body all'apertura (`overflow: hidden`).
2. **`Hero`:** Sezione impattante a tutto schermo con grafica vettoriale `WineStain`, stelle disegnate a mano, headline con effetto testuale a contorno `WebkitTextStroke` e CTA rotante.
3. **`AboutBrand`:** Sezione "Ethos" con contrasto cromatico scuro su `--color-marker`, effetto nastro adesivo semi-trasparente, ritaglio foto in stile vintage e manifesto di marca con linea di cancellazione grafica `StrikeThrough`.
4. **`ProductShowcase`:** Sezione "The Drop" che espone le t-shirt Nisundor con card sfalsate nello spazio tridimensionale, dettagli di prezzo (€45) e badge ironico "Almost gone / Quasi esaurito".
5. **`Footer`:** Chiusura della pagina con input newsletter, card inclinata "Links that matter" e crediti di copyright.
6. **`Doodles`:** Componenti grafici SVG nativi (`ScribbleStar`, `WineStain`, `RoughArrow`, `StrikeThrough`) che garantiscono massima nitidezza a qualsiasi risoluzione senza file raster pesanti.

---

## 5. Funzionalità di Switch Lingua (i18n Engine)

Il sistema di internazionalizzazione è stato progettato e implementato seguendo i massimi standard ingegneristici di React e TypeScript, garantendo zero overhead, assenza di librerie esterne ridondanti e totale fedeltà all'estetica del sito.

### 5.1 Struttura e Tipizzazione (`src/i18n/translations.ts`)
Tutte le chiavi di traduzione sono strettamente tipizzate tramite l'interfaccia `Translations`. In questo modo TypeScript valida a tempo di compilazione che sia `en` che `it` contengano esattamente le stesse chiavi, prevenendo regressioni o chiavi mancanti:

```typescript
export type Language = 'en' | 'it';

export interface Translations {
  nav: { ethos: string; shop: string; buyNow: string; buyTheDrop: string; menuToggle: string };
  hero: { badge: string; titleLine1: string; titleLine2: string; description: string; cta: string; limitedStock: string };
  about: { title: string; p1Part1: string; p1Highlight: string; p1Part2: string; p2: string; quote: string };
  showcase: { title: string; product1Title: string; product1Desc: string; product2Title: string; product2Desc: string; almostGone: string };
  footer: { newsletterTitle: string; newsletterDesc: string; emailPlaceholder: string; signUp: string; linksTitle: string; privacy: string; privacyNote: string; terms: string; returns: string; instagram: string; rights: string; madeWith: string };
}
```

### 5.2 Gestione dello Stato & Persistenza (`src/context/LanguageContext.tsx`)
Il provider `LanguageProvider` offre le seguenti garanzie:
1. **Rilevamento Iniziale Intelligente:** Controlla `localStorage` per preferenze salvate; se assenti, controlla la lingua del browser (`navigator.language`). Se inizia con `it`, imposta automaticamente l'italiano, altrimenti l'inglese di default.
2. **Persistenza Continua:** Ogni variazione viene memorizzata in `localStorage` sotto la chiave `nisundor_language_preference`.
3. **Sincronizzazione DOM & Accessibilità (a11y):** Aggiorna dinamicamente l'attributo `document.documentElement.lang = language`, migliorando l'accessibilità per gli screen reader e l'indicizzazione SEO.

### 5.3 L'Elemento di Switch (`src/components/LanguageSwitcher.tsx`)
L'interruttore è stato disegnato per integrarsi armoniosamente nel layout:
- **Variante Desktop (`variant="nav"`):** Un badge compatto con `.rough-border-sm` posizionato nella barra di navigazione tra le voci di menu e la CTA. Presenta i selettori `EN` e `IT` con evidenziazione in colore inchiostro o vino a seconda dello stato attivo.
- **Variante Mobile (`variant="mobile"`):** Integrato sia nella barra superiore a fianco del pulsante menu, sia in versione estesa ad alta usabilità tattile all'interno del drawer mobile a tutto schermo.
- **Accessibilità:** Dotato di ruoli ARIA `role="group"`, `aria-label` e `aria-pressed` sui pulsanti.

---

## 6. Verifica del Codice & Prestazioni

La qualità del codice è stata verificata tramite i tool di build e linting ufficiali:

### 6.1 Compilazione Produzione (`npm run build`)
- **Stato:** PASSATO (0 errori, 0 avvisi)
- **Tempo di build:** ~640ms
- **Asset generati:**
  - `dist/index.html` (~0.77 kB)
  - `dist/assets/index-[hash].css` (~39.7 kB)
  - `dist/assets/index-[hash].js` (~241 kB)

### 6.2 Controllo Qualità ESLint (`npm run lint`)
- **Stato:** PASSATO (0 errori, 0 problemi)
- È stata risolta preventivamente la conformità alle regole di **React Fast Refresh** (`react-refresh/only-export-components`), isolando le funzioni di utility (`cn`), il context React e gli hook dedicati in file separati.

---

## 7. Istruzioni per lo Sviluppo & Manutenzione

### Prerequisiti
- Node.js v18.0.0 o superiore
- Gestore pacchetti npm

### Comandi Disponibili
```bash
# Avvio dell'ambiente di sviluppo locale
npm run dev

# Controllo del codice sorgente tramite ESLint
npm run lint

# Compilazione e type-check di produzione
npm run build

# Anteprima locale del bundle di produzione
npm run preview
```
