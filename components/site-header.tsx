"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="YourVision home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">Y</span>
          <span className="brand-name">YourVision<span className="brand-period">.</span></span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="nav-login" href="/login">Log in</Link>
          <Link className="button primary small nav-cta" href="/signup">
            Get started <span aria-hidden="true">↗</span>
          </Link>
          <button
            className={open ? "glass-menu-toggle is-open" : "glass-menu-toggle"}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={open ? "mobile-nav open" : "mobile-nav"}
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "mobile-nav-link active" : "mobile-nav-link"}
              aria-current={isActive(link.href) ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
          <div className="mobile-nav-bottom">
            <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
            <Link className="button primary small" href="/signup" onClick={() => setOpen(false)}>
              Get started <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
