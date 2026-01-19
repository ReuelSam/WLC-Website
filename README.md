# Small Church Website

A modern, responsive small-church website built with a minimal, maintainable stack.

## Stack Choice
- **Next.js (App Router) + TypeScript**: routing, metadata, and performance with type safety.
- **Tailwind CSS**: rapid UI styling with consistent spacing, colors, and responsive patterns.

## Getting Started
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run start
```

## Key Data
Edit the core church info in `src/data/church.ts`:
- service time
- after-service info
- contact details
- leadership team
- cell group list
- Zoom + YouTube links

Page-specific copy lives in `src/data/home.ts`, `src/data/about.ts`, `src/data/services.ts`, and `src/data/connect.ts`.

## Images
Placeholder images live in `public/images`. Replace the SVGs with your own images using the same filenames or update the references in the page files:
- `public/images/hero.svg`
- `public/images/service.svg`
- `public/images/community-1.svg`
- `public/images/community-2.svg`
- `public/images/community-3.svg`
- `public/images/leader-1.svg` through `public/images/leader-4.svg`

## File Tree (Core)
```
.
├── README.md
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── src
│   ├── app
│   │   ├── (site)
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── connect
│   │   │   │   └── page.tsx
│   │   │   ├── services
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── forms
│   │   │   ├── ContactForm.tsx
│   │   │   ├── FieldError.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Textarea.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   └── ui
│   │       ├── Accordion.tsx
│   │       ├── Button.tsx
│   │       ├── Callout.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── data
│   │   └── church.ts
│   └── lib
│       └── utils.ts
└── public
    └── images
        ├── community-1.svg
        ├── community-2.svg
        ├── community-3.svg
        ├── hero.svg
        ├── leader-1.svg
        ├── leader-2.svg
        ├── leader-3.svg
        ├── leader-4.svg
        └── service.svg
```
