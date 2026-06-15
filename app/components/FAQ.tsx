"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is the Job Ready Program (JRP)?",
    a: "The JRP is a TRA program for international students who completed a trade qualification at a CRICOS-registered Australian institution. It requires 1,725 hours (approximately 52 weeks) of paid employment in your nominated trade occupation. Once complete, TRA issues your skills assessment — a critical step toward Subclass 189, 190 and 491 skilled migration visas.",
  },
  {
    q: "How does the placement process work?",
    a: "You submit a free enquiry with your trade, visa and location. We review your eligibility, then match you with a verified TRA-compliant employer from our established network. Timeframes vary depending on your trade, location and current availability — we'll give you an honest assessment when we speak.",
  },
  {
    q: "Are your employers definitely TRA compliant?",
    a: "Yes. Every employer in our network has been verified and understands TRA requirements including proper supervision, hour logging and assessment visit cooperation. We only partner with employers who are committed to supporting you through the full JRP process.",
  },
  {
    q: "Which states do you cover?",
    a: "We have employer connections across NSW, VIC, QLD, SA and WA. Tell us your preferred state when you enquire and we'll do our best to match you locally. Regional placements may also be available and can be beneficial for state nomination pathways.",
  },
  {
    q: "Do you provide migration or visa advice?",
    a: "We specialise solely in JRP employer placement. We do not provide migration or visa advice. For those matters we refer you to a trusted, registered MARA migration agent who we work closely with.",
  },
  {
    q: "How much does it cost?",
    a: "The initial enquiry and eligibility assessment is completely free. Our placement fee is discussed openly after we confirm your eligibility — with no commitment required from you upfront. We believe in full transparency about cost before you decide anything.",
  },
  {
    q: "Can I change employers mid-JRP?",
    a: "Yes. TRA allows employer changes during the JRP as long as the new role is in your nominated occupation and all hours are correctly documented. We can help guide you through this if your circumstances change during the program.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="sec sec-bg" id="faq">
      <div className="sec-inner" style={{ textAlign: "center" }}>
        <div className="eyebrow">Questions answered</div>
        <h2 className="sec-title">Common questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`fq ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <button className="fq-q" onClick={() => toggle(index)}>
                {faq.q}
                {openIndex === index ? (
                  <Minus size={18} strokeWidth={2} />
                ) : (
                  <Plus size={18} strokeWidth={2} />
                )}
              </button>
              <div className="fq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
