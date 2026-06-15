import { ClipboardList, Handshake, CalendarCheck } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Tell us your trade",
    desc: "Submit your free enquiry below. We check your JRP eligibility, your occupation and your visa situation.",
    Icon: ClipboardList,
  },
  {
    num: "2",
    title: "We match you to an employer",
    desc: "We connect you with a verified, TRA-compliant employer in your specific trade from our established network.",
    Icon: Handshake,
  },
  {
    num: "3",
    title: "Start your 52 weeks",
    desc: "Begin work with full documentation support — hour logs, employer letters and everything TRA requires.",
    Icon: CalendarCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="sec" id="how">
      <div className="sec-inner" style={{ textAlign: "center" }}>
        <div className="eyebrow">Simple process</div>
        <h2 className="sec-title">How we get you placed</h2>
        <p className="sec-sub" style={{ margin: "0 auto 0" }}>
          No stress. No cold calls. Employers already in our network.
        </p>
        <div className="steps">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-licon">
                <step.Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
