"use client";

import Link from "next/link";
import { useState } from "react";

const navGroups = [
  {
    title: "Getting Started",
    links: [
      { href: "/", label: "Overview" },
      { href: "/getting-started/architecture", label: "System Architecture" },
      { href: "/getting-started/installation", label: "Installation" },
    ],
  },
  {
    title: "Modules",
    links: [
      { href: "/modules/catalogs", label: "Catalogs (Master Data)" },
      { href: "/modules/journals", label: "Journals (Transactions)" },
      { href: "/modules/inventory", label: "Inventory" },
      { href: "/modules/finance", label: "Finance & GL" },
      { href: "/modules/dashboards", label: "Dashboards & Analytics" },
    ],
  },
  {
    title: "Reports",
    links: [
      { href: "/reports/overview", label: "Report Overview" },
      { href: "/reports/export", label: "Report Exports" },
    ],
  },
  {
    title: "Deployment",
    links: [
      { href: "/deployment/vercel", label: "Vercel Deployment" },
      { href: "/deployment/configuration", label: "Configuration" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="p-4">
      {navGroups.map((group) => (
        <div key={group.title} className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2 border-0 m-0">
            {group.title}
          </h2>
          <ul className="list-none p-0 m-0">
            {group.links.map((link) => (
              <li key={link.href} className="mb-0.5">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white px-3 py-2 rounded-md shadow-lg"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-100 overflow-y-auto z-40">
        <div className="p-6 border-b border-slate-800">
          <Link href="/">
            <h1 className="text-xl font-bold text-white m-0 mb-1 border-0">VDR Documentation</h1>
          </Link>
          <p className="text-sm text-slate-400 mb-0">ERP System on Jam.py</p>
        </div>
        {nav}
        <div className="p-6 border-t border-slate-800 text-xs text-slate-500">
          <p className="mb-0">Version 5.4.136</p>
          <p className="mb-0">Last updated: 2026</p>
        </div>
      </aside>

      {/* Mobile overlay sidebar */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)}>
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-slate-900 text-slate-100 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-800">
              <h1 className="text-xl font-bold text-white m-0 mb-1 border-0">VDR Documentation</h1>
              <p className="text-sm text-slate-400 mb-0">ERP System on Jam.py</p>
            </div>
            {nav}
          </aside>
        </div>
      )}
    </>
  );
}