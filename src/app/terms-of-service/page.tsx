import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | BRAIN Foundation',
  description: 'Terms and Conditions for the Bihar Rejuvenation and Innovation Network Foundation.',
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-h1 text-[40px] md:text-[56px] font-extrabold text-on-surface mb-4">
            Terms and Conditions
          </h1>
          <p className="text-on-surface-variant font-medium mb-12">
            Effective Date: June 30, 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant">
            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">1. Introduction</h2>
            <p>
              Welcome to the BIHAR REJUVENATION AND INNOVATION NETWORK (BRAIN) FOUNDATION. By accessing our website and participating in our initiatives, you agree to abide by these Terms and Conditions. The Foundation operates across India and is headquartered at 39, Bardokhar, Halsi, Konag, Lakhisarai, Bihar – 811311.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">2. Nature of the Organization</h2>
            <p>
              The BRAIN Foundation is a registered not-for-profit entity (Section 8 Company). All income, grants, and properties of the Company are applied solely towards the promotion of its developmental, educational, and research objectives. No portion of the income or property shall be paid or transferred directly or indirectly by way of dividend or profit to any members.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">3. Use of the Platform</h2>
            <p>
              Our platform is designed to promote research, innovation, policy analysis, and public welfare initiatives. Users agree to interact with the platform solely for lawful purposes that align with community development, educational advancement, and social welfare.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">4. Memberships and Contributions</h2>
            <p>
              <strong>Membership:</strong> The Board of Directors reserves the right to admit individuals, institutions, or other entities as Members, subject to prescribed admission and annual fees. The Board holds the right to terminate membership for actions contrary to the Foundation's interests.
            </p>
            <p>
              <strong>Donations:</strong> We accept grants, donations, and contributions to mobilize resources for our initiatives. Because the Foundation operates strictly on a non-profit basis, donations are generally non-refundable unless otherwise stipulated by law.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">5. Intellectual Property</h2>
            <p>
              All research reports, policy briefs, journals, databases, and educational materials published by the Foundation remain the intellectual property of the BRAIN Foundation. Unauthorized commercial distribution of our research and policy assets is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-on-surface mt-10 mb-4">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from the use of this platform shall be subject to the jurisdiction of the courts in Bihar, India, where the Foundation's registered office is located.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
