# De Fotografische Gastvrouw

Interactieve storytelling website gebouwd met React, Vite en TypeScript.

De huidige implementatie bevat milestone 1:
- volledige frontend met lokale mockdata
- horizontale desktop storytelling canvas
- verticale mobiele compositie
- progress navigation met klikbare secties
- `Wie ik ben` en drie afzonderlijke professionele rollen
- portfolio met rolfilters en projectdetailweergave
- generieke storytelling timeline
- testimonials en contactformulier
- design tokens en centrale CSS-architectuur
- Sanity client, image URL builder en schema's voorbereid voor milestone 2

## Tech stack

- React
- Vite
- TypeScript
- CSS (custom)
- Sanity client en image URL builder voorbereid voor milestone 2

## Scripts

- npm run dev
- npm run build
- npm run preview
- npm run typecheck
- npm run lint

## Environment

Gebruik het voorbeeldbestand `.env.example`:

- VITE_SANITY_PROJECT_ID
- VITE_SANITY_DATASET
- VITE_SANITY_API_VERSION
- VITE_SITE_URL

## Structuur

De code is opgesplitst in:

- app shell en routes
- kleine presentatiecomponenten
- contentlaag met types en mockdata
- hooks voor media query, reduced motion en horizontale scroll
- voorbereidende sanity map met client, queries en schema stubs

De mockdata volgt de nieuwe positionering: `Fotografe`, `Gastvrouw` en `Fotografische Gastvrouw` zijn afzonderlijk inzetbaar. Portfolio-projecten kunnen aan een of meerdere rollen gekoppeld worden.

## Opmerking over merk-assets

In public/brand staan tijdelijke SVG placeholders. Vervang deze met de echte aangeleverde logo-assets voor productie.
