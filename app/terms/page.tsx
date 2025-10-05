"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} headTitle="Terms & Conditions" breadcrumbTitle="Terms & Conditions">
        <section className="terms-conditions">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="terms-conditions__content">
                  <div className="terms-conditions__text">
                    <h2>Terms & Conditions</h2>
                    <p className="mb-4">
                      <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>
                    
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                      By accessing and using InSourceful's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h3>2. Services</h3>
                    <p>
                      InSourceful provides enterprise technology consulting services including but not limited to:
                    </p>
                    <ul>
                      <li>Oracle system implementation and integration</li>
                      <li>Business process optimization</li>
                      <li>Digital transformation consulting</li>
                      <li>Custom software development</li>
                      <li>Data analytics and reporting</li>
                    </ul>

                    <h3>3. Client Responsibilities</h3>
                    <p>
                      Clients are responsible for providing accurate information, timely feedback, and necessary access to systems and personnel required for successful project completion.
                    </p>

                    <h3>4. Confidentiality</h3>
                    <p>
                      InSourceful maintains strict confidentiality regarding all client information and proprietary data. We do not share client information with third parties without explicit consent.
                    </p>

                    <h3>5. Intellectual Property</h3>
                    <p>
                      All custom solutions developed specifically for clients remain the property of the client. InSourceful retains rights to general methodologies and non-client-specific intellectual property.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                      InSourceful's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                    </p>

                    <h3>7. Payment Terms</h3>
                    <p>
                      Payment terms are specified in individual service agreements. Late payments may incur additional fees as outlined in the service contract.
                    </p>

                    <h3>8. Termination</h3>
                    <p>
                      Either party may terminate services with written notice as specified in the service agreement. Termination does not affect obligations for work performed prior to termination.
                    </p>

                    <h3>9. Governing Law</h3>
                    <p>
                      These terms are governed by the laws of Texas, United States. Any disputes will be resolved in the courts of El Paso County, Texas.
                    </p>

                    <h3>10. Contact Information</h3>
                    <p>
                      For questions regarding these terms, please contact us at:
                    </p>
                    <p>
                      Email: <Link href="mailto:legal@insourceful.ai">legal@insourceful.ai</Link><br />
                      Phone: <Link href="tel:+17208788654">(720) 878-8654</Link><br />
                      Address: 6558 Tuscany Ridge Dr, El Paso, Texas
                    </p>

                    <h3>11. Changes to Terms</h3>
                    <p>
                      InSourceful reserves the right to update these terms at any time. Changes will be posted on this page with an updated effective date.
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