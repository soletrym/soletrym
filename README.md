# Soletrym – Next.js landingsside

En enkel, elegant landingsside for Soletrym med jordlige farger, myke overganger og TailwindCSS + Framer Motion.

## Kom i gang lokalt
```bash
npm install
npm run dev
```
Åpne http://localhost:3000

## Deploy til GitHub + Vercel
```bash
git init
git add .
git commit -m "Init Soletrym"
git branch -M main
git remote add origin https://github.com/<brukernavn>/soletrym-site.git
git push -u origin main
```
Deretter: Importer repoet på vercel.com → Deploy → Koble domenet `soletrym.no`.

## Notater
- Bytt ut placeholder-bilder i `pages/index.js` med faktiske produktbilder fra Gelato/Shopify når klart.
- Tailwind er konfigurert i `tailwind.config.js` og `styles/globals.css`.
- Framer Motion er brukt for myke overganger.
- Miljøfiler (`.env*`) er ignorert i `.gitignore`.

— Opprettet 2025-08-12
