import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | BRAIN Foundation',
  description: 'Privacy Policy for the Bihar Rejuvenation and Innovation Network Foundation.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-h1 text-[40px] md:text-[56px] font-extrabold text-on-surface mb-4">
            Privacy Policy
          </h1>
          <p className="text-on-surface-variant font-medium mb-12">
            Effective Date: June 30, 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant">
            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">1. Information We Collect</h2>
            <p>
              To fulfill our aims and objectives, the BRAIN Foundation may collect the following information:
            </p>
            <ul>
              <li><strong>Personal Identification Data:</strong> Name, contact information, and professional details collected during membership registration, event enrollment, or newsletter subscriptions.</li>
              <li><strong>Financial Data:</strong> Necessary billing information required to securely process grants, donations, and membership fees.</li>
              <li><strong>Research & Survey Data:</strong> Information collected voluntarily through district-wise, block-wise, and community-level surveys and assessments utilized strictly for developmental research.</li>
            </ul>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">2. How We Use Your Information</h2>
            <p>
              As a Section 8 non-profit, we do not sell your personal data. We use collected information exclusively to:
            </p>
            <ul>
              <li>Facilitate community engagement programs, training, and awareness campaigns.</li>
              <li>Disseminate research reports, policy briefs, and newsletters.</li>
              <li>Process and acknowledge donations, grants, and scholarships.</li>
              <li>Manage organizational memberships and communications.</li>
            </ul>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">3. Data Sharing and Collaborations</h2>
            <p>
              We may share anonymized data or collaborate with Central Government, State Government, local authorities, and other partner institutions to achieve the developmental objects of the Foundation. Personal data is never shared for commercial marketing.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">4. Data Security</h2>
            <p>
              We maintain proper records and adhere to applicable statutory laws regarding the security of your information. Financial transactions and organizational accounts are subjected to annual audits by a qualified Chartered Accountant.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">5. Your Rights</h2>
            <p>
              Registered Members of the Foundation have the right to participate in meetings, receive notices, and inspect records as permitted by law. If you wish to update your information, opt out of communications, or resign from a membership, you may do so in writing to the Board.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">6. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy or how your data is handled, please contact us at our registered office:
            </p>
            <p>
              <strong>BIHAR REJUVENATION AND INNOVATION NETWORK (BRAIN) FOUNDATION</strong><br />
              39, Bardokhar, Halsi, Konag, Lakhisarai, Bihar – 811311.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
