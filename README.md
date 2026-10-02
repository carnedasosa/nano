# Nisundor — Streetwear Web Application

Applicazione web ufficiale per il brand streetwear **Nisundor** ("Studied Imperfect."), sviluppata con React 19, Vite, TypeScript e Tailwind CSS v4.

---

## 📖 Documentazione Completa
Per l'analisi architetturale dettagliata, la mappa completa dei componenti, le specifiche del design system e il funzionamento del motore di internazionalizzazione bilingue, consulta:
👉 **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)**

---

## ⚡ Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Verifica il codice con ESLint
npm run lint

# Esegui la build di produzione
npm run build
```

---

## 🌐 Funzionalità Switch Lingua (EN / IT)
Il sito supporta la navigazione bilingue:
- **Desktop:** Switcher compatto posizionato nella barra di navigazione principale.
- **Mobile:** Switcher accessibile nella testata e versione estesa nel menu a comparsa.
- **Persistenza:** Preferenza memorizzata nel `localStorage` del browser.
- **Rilevamento Automatico:** Fallback sulla lingua del browser dell'utente.
