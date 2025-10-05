"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function GDPR() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} headTitle="GDPR Compliance" breadcrumbTitle="GDPR Compliance">
        <section className="gdpr-compliance">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="gdpr-compliance__content">
                  <div className="gdpr-compliance__text">
                    <h2>GDPR Compliance</h2>
                    <p className="mb-4">
                      <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                    </p>
                    
                    <h3>1. GDPR Overview</h3>
                    <p>
                      The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy. 
                      InSourceful is committed to complying with GDPR requirements for all EU residents.
                    </p>

                    <h3>2. Legal Basis for Processing</h3>
                    <p>We process personal data based on the following legal bases:</p>
                    <ul>
                      <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
                      <li><strong>Contract:</strong> When processing is necessary for the performance of a contract</li>
                      <li><strong>Legal Obligation:</strong> When processing is required by law</li>
                      <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate business interests</li>
                    </ul>

                    <h3>3. Your Rights Under GDPR</h3>
                    <p>As an EU resident, you have the following rights:</p>
                    <ul>
                      <li><strong>Right to Information:</strong> Know how your data is processed</li>
                      <li><strong>Right of Access:</strong> Request copies of your personal data</li>
                      <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                      <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                      <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                      <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                      <li><strong>Right to Object:</strong> Object to processing of your data</li>
                      <li><strong>Rights Related to Automated Decision Making:</strong> Protection against automated profiling</li>
                    </ul>

                    <h3>4. Data Processing Activities</h3>
                    <p>We process the following categories of personal data:</p>
                    <ul>
                      <li>Contact information (name, email, phone number)</li>
                      <li>Professional information (company, job title)</li>
                      <li>Website usage data (cookies, analytics)</li>
                      <li>Communication records (emails, meeting notes)</li>
                    </ul>

                    <h3>5. Data Retention</h3>
                    <p>
                      We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                      comply with legal obligations, resolve disputes, and enforce agreements.
                    </p>

                    <h3>6. Data Transfers</h3>
                    <p>
                      When transferring data outside the EU, we ensure adequate protection through appropriate safeguards 
                      such as adequacy decisions, standard contractual clauses, or binding corporate rules.
                    </p>

                    <h3>7. Data Security</h3>
                    <p>
                      We implement appropriate technical and organizational measures to ensure a level of security 
                      appropriate to the risk, including encryption, access controls, and regular security assessments.
                    </p>

                    <h3>8. Data Protection Officer</h3>
                    <p>
                      For questions regarding data protection and GDPR compliance, please contact our Data Protection Officer:
                    </p>
                    <p>
                      Email: <Link href="mailto:dpo@insourceful.ai">dpo@insourceful.ai</Link><br />
                      Phone: <Link href="tel:+17208788654">(720) 878-8654</Link>
                    </p>

                    <h3>9. Supervisory Authority</h3>
                    <p>
                      You have the right to lodge a complaint with a supervisory authority if you believe 
                      your data protection rights have been violated.
                    </p>

                    <h3>10. Exercise Your Rights</h3>
                    <p>
                      To exercise any of your GDPR rights, please contact us using the information provided above. 
                      We will respond to your request within one month, as required by GDPR.
                    </p>

                    <h3>11. Updates to This Notice</h3>
                    <p>
                      We may update this GDPR compliance notice from time to time. Changes will be posted on this page 
                      with an updated effective date.
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