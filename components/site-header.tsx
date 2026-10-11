"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="YourVision home" onClick={() => setOpen(false)}>
          <span className="brand-mark">Y</span>
          YourVision
        </Link>
        <button
          className="button small menu-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? "×" : "☰"}
        </button>
        <nav id="site-navigation" className={"nav-links" + (open ? " open" : "")} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="button small" href="/login">Log in</Link>
          <Link className="button primary small" href="/signup">Get started ↗</Link>
        </div>
      </div>
    </header>
  );
}
