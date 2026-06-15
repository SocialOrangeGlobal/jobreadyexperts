import { MessageCircle, Mail } from "lucide-react";

export default function BottomCTA() {
  return (
    <div className="bcta">
      <div className="bcta-bg"></div>
      <div className="bcta-inner">
        <h2>
          Your PR journey starts
          <br />
          <em>with one enquiry.</em>
        </h2>
        <p>
          Employers are ready. Stop searching alone — let us find the right
          match for you.
        </p>
        <div className="bcta-btns">
          <a
            href="https://wa.me/61400000000"
            className="btn-wa"
          >
            <MessageCircle size={20} strokeWidth={2} />
            Chat on WhatsApp
          </a>
          <a href="#enquire" className="btn-enq">
            <Mail size={18} strokeWidth={2} />
            Submit Free Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}
