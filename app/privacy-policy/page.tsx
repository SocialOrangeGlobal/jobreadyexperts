import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Job Ready Experts",
  description: "Learn how Job Ready Experts collects, uses and protects your personal information when you use our JRP employer placement services.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout
          title="Privacy Policy"
          subtitle="How we collect, use and protect your personal information."
          lastUpdated="15 June 2025"
        >
          <section className="lsec">
            <h2>1. About This Policy</h2>
            <p>
              Job Ready Experts (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of individuals who enquire about or use our JRP employer placement services. This Privacy Policy explains how we collect, use, disclose and safeguard your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs).
            </p>
            <p>
              By submitting an enquiry or otherwise engaging with our services, you consent to the collection and use of your information as described in this policy.
            </p>
          </section>

          <section className="lsec">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li><strong>Identity information:</strong> Full name, date of birth</li>
              <li><strong>Contact information:</strong> Email address, phone number (including WhatsApp)</li>
              <li><strong>Visa and migration information:</strong> Current visa subclass, visa expiry, work rights</li>
              <li><strong>Trade and qualification information:</strong> Trade occupation, CRICOS institution attended, year of completion, TRA reference numbers</li>
              <li><strong>Location preferences:</strong> Preferred Australian state or territory for placement</li>
              <li><strong>Communication records:</strong> Records of emails, WhatsApp messages and phone calls between you and our team</li>
            </ul>
            <p>
              We collect this information directly from you when you complete our enquiry form, contact us via WhatsApp, email or phone, or engage with our services at any stage.
            </p>
          </section>

          <section className="lsec">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Assess your eligibility for the Job Ready Program (JRP)</li>
              <li>Match you with suitable TRA-compliant employers in our network</li>
              <li>Communicate with you about your placement, documentation and progress</li>
              <li>Provide guidance and support throughout your 52-week JRP placement</li>
              <li>Refer you to trusted migration agents where applicable (with your consent)</li>
              <li>Comply with our legal obligations</li>
              <li>Improve our services and internal processes</li>
            </ul>
            <p>
              We will not use your information for any purpose that is unrelated to the services described above without first obtaining your consent.
            </p>
          </section>

          <section className="lsec">
            <h2>4. Disclosure to Third Parties</h2>
            <p>We may disclose your personal information to:</p>
            <ul>
              <li><strong>Prospective employers:</strong> To facilitate your placement, we will share relevant details (name, trade, visa status, location preference) with employers in our network. We only share the minimum necessary information.</li>
              <li><strong>Migration agents:</strong> With your explicit consent, we may refer your details to a registered MARA migration agent to assist with visa-related matters.</li>
              <li><strong>TRA (Trades Recognition Australia):</strong> Where required to support your skills assessment documentation.</li>
              <li><strong>Service providers:</strong> Third-party tools we use to operate our business (e.g., CRM software, email platforms), under strict confidentiality obligations.</li>
            </ul>
            <p>
              We do not sell, rent or trade your personal information to any third party for marketing purposes.
            </p>
          </section>

          <section className="lsec">
            <h2>5. Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification or disclosure. These measures include password-protected systems, restricted access to personal data, and secure communication channels.
            </p>
            <p>
              While we take all reasonable precautions, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="lsec">
            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services to you and to comply with our legal obligations. Once your information is no longer required, we will take reasonable steps to destroy or de-identify it securely.
            </p>
          </section>

          <section className="lsec">
            <h2>7. Access and Correction</h2>
            <p>
              You have the right to request access to the personal information we hold about you, and to request correction of any inaccuracies. To make a request, please contact us using the details below. We will respond within a reasonable time and, where required, within 30 days.
            </p>
          </section>

          <section className="lsec">
            <h2>8. Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. This data is collected in aggregate and is not linked to your personal identity. You may disable cookies in your browser settings; however, this may affect your ability to use certain features of our website.
            </p>
          </section>

          <section className="lsec">
            <h2>9. Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="lsec">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically. Your continued use of our services after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* <section className="lsec">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns or complaints regarding this Privacy Policy or the way we handle your personal information, please contact us:
            </p>
            <div className="legal-contact-block">
              <p><strong>Job Ready Experts</strong></p>
              <p>Australia</p>
              <p>Email: <a href="mailto:info@jobreadyexperts.com.au">info@jobreadyexperts.com.au</a></p>
              <p>WhatsApp: <a href="https://wa.me/61400000000">+61 4XX XXX XXX</a></p>
            </div>
            <p>
              If you are not satisfied with our response, you may contact the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner (OAIC)</a> at oaic.gov.au.
            </p>
          </section> */}
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
