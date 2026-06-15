import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="f-top">
        <div className="f-logo">JobReady<em>Experts</em></div>
        <p className="f-tagline">Australia&apos;s JRP Employer Placement Specialists</p>
      </div>
      <div className="f-mid">
        <div className="f-col">
          <div className="f-col-title">Services</div>
          <Link href="/#how">How It Works</Link>
          <Link href="/#trades">Occupations</Link>
          <Link href="/#enquire">Get Placed</Link>
        </div>
        <div className="f-col">
          <div className="f-col-title">Company</div>
          <Link href="/#faq">FAQ</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
        {/* <div className="f-col">
          <div className="f-col-title">Contact</div>
          <a href="mailto:info@jobreadyexperts.com.au">info@jobreadyexperts.com.au</a>
          <a href="https://wa.me/61400000000">WhatsApp Us</a>
        </div> */}
      </div>
      <div className="f-copy">
        © 2025 Job Ready Experts. All rights reserved. &nbsp;·&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;·&nbsp;
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        <br />
        Job Ready Experts is not a registered migration agent and does not provide visa or legal advice.
        For migration advice, please consult a registered MARA agent. All placement outcomes depend on individual circumstances.
      </div>
    </footer>
  );
}
