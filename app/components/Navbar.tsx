"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Link href="/" className="logo">
          JobReady<em>Experts</em>
        </Link>
        <div className="nav-links">
          <a href="/#how" className="hide-mob">How it works</a>
          <a href="/#trades" className="hide-mob">Occupations</a>
          <a href="/#faq" className="hide-mob">FAQ</a>
          <a href="/#enquire" className="nav-cta">
            Enquire Now <ChevronRight size={14} strokeWidth={2.5} />
          </a>
        </div>
        <button
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open
            ? <X size={22} strokeWidth={2} color="white" />
            : <Menu size={22} strokeWidth={2} color="white" />
          }
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mob-drawer">
          <a href="/#how"     className="mob-link" onClick={() => setOpen(false)}>How it works</a>
          <a href="/#trades"  className="mob-link" onClick={() => setOpen(false)}>Occupations</a>
          <a href="/#faq"     className="mob-link" onClick={() => setOpen(false)}>FAQ</a>
          <a href="/#enquire" className="mob-cta"  onClick={() => setOpen(false)}>
            Enquire Now — It&apos;s Free <ChevronRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      )}
    </>
  );
}
