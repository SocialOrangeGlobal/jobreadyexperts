import Link from "next/link";
import { ChevronRight, ExternalLink, Mail, MessageCircle } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      {/* Hero Banner */}
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <nav className="legal-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} strokeWidth={2.5} />
            <span>{title}</span>
          </nav>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <span className="legal-meta">Last updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Page body */}
      <div className="legal-body">
        <div className="legal-inner">

          {/* Main content */}
          <article className="legal-content">
            {children}
          </article>

          {/* Sticky sidebar */}
          <aside className="legal-sidebar">

            <div className="legal-sidebar-card">
              <div className="lsc-title">Quick Links</div>
              <div className="lsc-links">
                <Link href="/privacy-policy" className="lsc-link">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="lsc-link">
                  Terms &amp; Conditions
                </Link>
                <Link href="/#enquire" className="lsc-link">
                  Enquiry Form
                </Link>
                <Link href="/#faq" className="lsc-link">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="legal-sidebar-card lsc-contact">
              <div className="lsc-title">Have Questions?</div>
              <p className="lsc-desc">
                If you have any questions about our policies or services, our team is here to help.
              </p>
              <a href="mailto:info@jobreadyexperts.com.au" className="lsc-btn-outline">
                <Mail size={14} strokeWidth={2} />
                Email Us
              </a>
              <a href="https://wa.me/61400000000" className="lsc-btn-gold">
                <MessageCircle size={14} strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>

            <div className="legal-sidebar-card lsc-disclaimer">
              <div className="lsc-disc-icon">
                <ExternalLink size={16} strokeWidth={2} />
              </div>
              <p className="lsc-disc-text">
                Job Ready Experts is not a registered migration agent and does not provide visa or legal advice.
              </p>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
