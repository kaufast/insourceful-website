"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} headTitle="Privacy Policy" breadcrumbTitle="Privacy Policy">
        <section className="privacy-policy" style={{ padding: '120px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="privacy-policy__content">
                  <div className="privacy-policy__text" style={{ marginBottom: '50px' }}>
                    <h2>Privacy Policy</h2>
                    <p className="mb-4">
                      <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>
                    
                    <h3>1. Information We Collect</h3>
                    <p>
                      We collect information you provide directly to us, such as when you create an account, 
                      contact us, or use our services. This may include your name, email address, phone number, 
                      and any other information you choose to provide.
                    </p>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices, updates, security alerts, and support messages</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Communicate with you about products, services, offers, and events</li>
                    </ul>

                    <h3>3. Information Sharing</h3>
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this privacy policy.
                    </p>

                    <h3>4. Data Security</h3>
                    <p>
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h3>5. Cookies and Analytics</h3>
                    <p>
                      We use cookies and similar tracking technologies to improve your experience on our website. 
                      We also use Google Analytics to analyze website traffic and usage patterns.
                    </p>

                    <h3>6. Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access, update, or delete your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request restriction of processing your personal information</li>
                      <li>Data portability</li>
                    </ul>

                    <h3>7. Contact Us</h3>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                      Email: <Link href="mailto:privacy@insourceful.io">privacy@insourceful.io</Link><br />
                      Phone: <Link href="tel:+17208788654">(720) 878-8654</Link>
                    </p>

                    <h3>8. Changes to This Policy</h3>
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any changes 
                      by posting the new privacy policy on this page and updating the effective date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}