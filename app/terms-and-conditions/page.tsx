import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Job Ready Experts",
  description: "Terms and conditions governing the use of Job Ready Experts JRP employer placement services in Australia.",
};

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main>
        <LegalLayout
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our services."
          lastUpdated="15 June 2025"
        >
          <section className="lsec">
            <h2>1. About These Terms</h2>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the services provided by Job Ready Experts (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), an employer placement service specialising in the Trades Recognition Australia (TRA) Job Ready Program (JRP).
            </p>
            <p>
              By submitting an enquiry or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="lsec">
            <h2>2. Our Services</h2>
            <p>Job Ready Experts provides the following services:</p>
            <ul>
              <li>Assessment of your JRP eligibility based on information you provide</li>
              <li>Introduction and referral to TRA-compliant employers within our network</li>
              <li>Guidance on JRP documentation requirements (hour logs, employer letters, etc.)</li>
              <li>Ongoing support and communication during your 52-week placement period</li>
              <li>Referral to registered MARA migration agents (where applicable and with your consent)</li>
            </ul>
            <div className="legal-callout">
              <strong>Important:</strong> Job Ready Experts is not a registered migration agent and does not provide visa advice, legal advice or immigration services. Nothing we communicate constitutes migration advice. For visa-related matters, please consult a registered MARA agent.
            </div>
          </section>

          <section className="lsec">
            <h2>3. Eligibility</h2>
            <p>To use our placement services, you must:</p>
            <ul>
              <li>Have completed, or be completing, a trade qualification at a CRICOS-registered Australian institution</li>
              <li>Hold a trade occupation eligible for the TRA Job Ready Program</li>
              <li>Hold a valid Australian visa that permits you to work</li>
              <li>Be at least 18 years of age</li>
              <li>Provide accurate and truthful information at all times</li>
            </ul>
            <p>
              We reserve the right to decline to provide services to any person at our absolute discretion, including where we believe the information provided is inaccurate or where a conflict of interest exists.
            </p>
          </section>

          <section className="lsec">
            <h2>4. Fees and Payment</h2>
            <p>
              Our initial eligibility assessment and enquiry is provided at <strong>no charge</strong>. Our placement service fee, if applicable, will be communicated to you clearly and transparently before you commit to engaging our services.
            </p>
            <ul>
              <li>No fee is payable until you have received and reviewed our fee schedule</li>
              <li>All fees are quoted in Australian dollars (AUD)</li>
              <li>Payment terms and schedules will be agreed in writing before commencement</li>
              <li>Refund conditions, if any, will be set out in your individual service agreement</li>
            </ul>
            <p>
              We reserve the right to update our fees. Any changes will only apply to new engagements entered into after the change takes effect.
            </p>
          </section>

          <section className="lsec">
            <h2>5. Your Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide complete, accurate and up-to-date information at all times</li>
              <li>Notify us promptly of any changes to your visa status, contact details or circumstances</li>
              <li>Attend all employer meetings, interviews and site visits as arranged</li>
              <li>Maintain your employment obligations to any employer we introduce you to</li>
              <li>Accurately log and record your working hours as required by TRA</li>
              <li>Not misrepresent your qualifications, experience or visa status to any employer</li>
              <li>Cooperate with TRA assessment visits and requirements</li>
            </ul>
          </section>

          <section className="lsec">
            <h2>6. Employer Introductions</h2>
            <p>
              We introduce you to employers in our network who have agreed to participate in the TRA Job Ready Program. While we take reasonable steps to verify that employers are TRA-compliant at the time of introduction, we do not guarantee:
            </p>
            <ul>
              <li>That a specific employer will be available or willing to hire you</li>
              <li>The ongoing TRA compliance of any employer after the introduction is made</li>
              <li>That your hours will be accepted by TRA</li>
              <li>Any particular outcome in relation to your skills assessment or PR application</li>
            </ul>
            <p>
              Any employment relationship is directly between you and the employer. We are not a party to that employment relationship and are not liable for any acts or omissions of the employer.
            </p>
          </section>

          <section className="lsec">
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by Australian law, Job Ready Experts is not liable for any direct, indirect, consequential, special or incidental loss or damage arising from:
            </p>
            <ul>
              <li>Reliance on information provided by us</li>
              <li>Any delay, failure or inability to place you with an employer</li>
              <li>TRA refusing to accept your hours or declining your skills assessment</li>
              <li>Any act or omission of an employer, migration agent or third party</li>
              <li>Changes to TRA policy, program requirements or government immigration rules</li>
            </ul>
            <p>
              Where liability cannot be excluded by law, our total liability to you is limited to the amount of fees paid by you to us in the six (6) months preceding the relevant claim.
            </p>
          </section>

          <section className="lsec">
            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any sensitive information shared during the engagement. We will not disclose your personal details to any employer without your knowledge. You agree not to disclose to third parties any proprietary information about our employer network, processes or fee structure.
            </p>
          </section>

          <section className="lsec">
            <h2>9. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and design, is the property of Job Ready Experts and is protected by Australian copyright law. You may not reproduce, distribute or use our content without our prior written permission.
            </p>
          </section>

          <section className="lsec">
            <h2>10. Termination</h2>
            <p>
              Either party may terminate the service engagement by giving written notice. We reserve the right to immediately terminate our services if you breach these Terms, provide false information, or engage in conduct that we reasonably consider harmful to our business or reputation.
            </p>
            <p>
              Upon termination, any outstanding fees become immediately payable, and we will cease to act on your behalf with any employer or third party.
            </p>
          </section>

          <section className="lsec">
            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New South Wales, Australia. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>
          </section>

          <section className="lsec">
            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Updated Terms will be posted on our website with a revised date. Your continued use of our services after an update constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* <section className="lsec">
            <h2>13. Contact Us</h2>
            <p>For questions about these Terms, please contact us:</p>
            <div className="legal-contact-block">
              <p><strong>Job Ready Experts</strong></p>
              <p>Australia</p>
              <p>Email: <a href="mailto:info@jobreadyexperts.com.au">info@jobreadyexperts.com.au</a></p>
              <p>WhatsApp: <a href="https://wa.me/61400000000">+61 4XX XXX XXX</a></p>
            </div>
          </section> */}
        </LegalLayout>
      </main>
      <Footer />
    </>
  );
}
