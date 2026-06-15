import {
  CheckCircle2,
  Users,
  BadgeCheck,
  FileText,
  MapPin,
  ArrowRight,
  Lock,
  Phone,
  Mail,
  User,
  Briefcase,
  CreditCard,
  Globe,
} from "lucide-react";

const proofPoints = [
  { Icon: Users,      text: "Established employer network across 16 occupations" },
  { Icon: BadgeCheck, text: "100% TRA-compliant verified employers" },
  { Icon: FileText,   text: "Full documentation support throughout JRP" },
  { Icon: MapPin,     text: "NSW · VIC · QLD · SA · WA coverage" },
  { Icon: CheckCircle2, text: "Free initial enquiry — no upfront commitment" },
];

const stats = [
  { num: "16", label: "Trade occupations" },
  { num: "5",  label: "States covered" },
  { num: "24h", label: "Response time" },
];

export default function EnquiryForm() {
  return (
    <section className="enq-section" id="enquire">
      {/* Background decoration */}
      <div className="enq-bg-dec" />

      <div className="enq-inner">
        {/* ── LEFT PANEL ── */}
        <div className="enq-left">
          <div className="eyebrow" style={{ color: "rgba(245,166,35,0.8)" }}>
            Free enquiry
          </div>
          <h2 className="enq-title">
            Ready to find your<br />
            <em>JRP employer?</em>
          </h2>
          <p className="enq-desc">
            Fill in your details and we&apos;ll get back to you within 24 hours
            with an honest assessment. No commitment. No cost.
          </p>

          {/* Mini stats */}
          <div className="enq-mini-stats">
            {stats.map((s) => (
              <div className="enq-mini-stat" key={s.label}>
                <div className="enq-stat-num">{s.num}</div>
                <div className="enq-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Proof points */}
          <div className="enq-proof">
            {proofPoints.map(({ Icon, text }) => (
              <div className="enq-proof-item" key={text}>
                <div className="enq-proof-icon">
                  <Icon size={14} strokeWidth={2.2} />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT FORM CARD ── */}
        <div className="enq-card">
          <div className="enq-card-header">
            <h3>Get your free placement assessment</h3>
            <p>We&apos;ll review your situation and be in touch within 24 hours.</p>
          </div>

          <div className="enq-form">
            {/* Row 1: Name + Phone */}
            <div className="enq-row">
              <div className="enq-field">
                <label>
                  <User size={12} strokeWidth={2.5} />
                  Full name
                </label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="enq-field">
                <label>
                  <Phone size={12} strokeWidth={2.5} />
                  WhatsApp / Phone
                </label>
                <input type="tel" placeholder="+61 4XX XXX XXX" />
              </div>
            </div>

            {/* Row 2: Email (full width) */}
            <div className="enq-field">
              <label>
                <Mail size={12} strokeWidth={2.5} />
                Email address
              </label>
              <input type="email" placeholder="your@email.com" />
            </div>

            {/* Row 3: Trade + Visa */}
            <div className="enq-row">
              <div className="enq-field">
                <label>
                  <Briefcase size={12} strokeWidth={2.5} />
                  Trade occupation
                </label>
                <select defaultValue="">
                  <option value="" disabled>Select trade...</option>
                  <optgroup label="Construction & Building">
                    <option>Carpenter</option>
                    <option>Bricklayer</option>
                    <option>Wall &amp; Floor Tiler</option>
                    <option>Roof Tiler</option>
                    <option>Joiner</option>
                    <option>Painting Trades Worker</option>
                    <option>Plasterer</option>
                    <option>Cabinet Maker</option>
                    <option>Stonemason</option>
                  </optgroup>
                  <optgroup label="Automotive">
                    <option>Motor Mechanic (General)</option>
                    <option>Diesel Motor Mechanic</option>
                    <option>Motorcycle Mechanic</option>
                    <option>Panelbeater</option>
                  </optgroup>
                  <optgroup label="Metal Trades">
                    <option>Metal Fabricator / Welder</option>
                  </optgroup>
                  <optgroup label="Food Trades">
                    <option>Commercial Cook / Chef</option>
                  </optgroup>
                </select>
              </div>
              <div className="enq-field">
                <label>
                  <CreditCard size={12} strokeWidth={2.5} />
                  Current visa
                </label>
                <select defaultValue="">
                  <option value="" disabled>Select visa...</option>
                  <option>Graduate visa (Subclass 485)</option>
                  <option>Student visa (Subclass 500)</option>
                  <option>Bridging visa</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Row 4: State (full width) */}
            <div className="enq-field">
              <label>
                <Globe size={12} strokeWidth={2.5} />
                Preferred state
              </label>
              <select defaultValue="">
                <option value="" disabled>Select your preferred state...</option>
                <option>New South Wales (NSW)</option>
                <option>Victoria (VIC)</option>
                <option>Queensland (QLD)</option>
                <option>South Australia (SA)</option>
                <option>Western Australia (WA)</option>
                <option>Any / flexible</option>
              </select>
            </div>

            {/* Submit */}
            <button type="button" className="enq-submit">
              Submit Free Enquiry
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>

            <div className="enq-privacy">
              <Lock size={12} strokeWidth={2.5} />
              Your details are private and confidential. We never share your information.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
