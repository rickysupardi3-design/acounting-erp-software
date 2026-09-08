# VDR Documentation

Documentation site for the **VDR ERP** system built on Jam.py, deployed to Vercel via Next.js.

## Features

Documentation for the VDR ERP application covering:

- **Overview** — System purpose, capabilities, and technical stack
- **Getting Started** — Architecture and installation
- **Modules** — Catalogs, Journals, Inventory, Finance & GL, Dashboards
- **Reports** — 57+ report templates and export formats
- **Deployment** — Vercel deployment and configuration reference

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or import the repository via the [Vercel Dashboard](https://vercel.com/new).

## Project Structure

```
app/
├── layout.js              — Root layout with sidebar
├── page.js                — Home / overview
├── getting-started/       — Architecture & installation
├── modules/               — Module documentation
│   ├── catalogs/
│   ├── journals/
│   ├── inventory/
│   ├── finance/
│   └── dashboards/
├── reports/               — Report documentation
└── deployment/            — Deployment guides
components/
└── Sidebar.js             — Responsive navigation sidebar
```
