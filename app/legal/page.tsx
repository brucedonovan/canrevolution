'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { theme } from '@/lib/theme';
import { useState } from 'react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const tabClasses = (isActive: boolean) => ({
    padding: '0.75rem 1.5rem',
    border: 'none',
    backgroundColor: isActive ? theme.primary.light : 'transparent',
    color: isActive ? theme.background.dark : theme.text.mutedDark,
    cursor: 'pointer',
    fontWeight: isActive ? '600' : '500',
    borderBottom: isActive ? `3px solid ${theme.primary.light}` : `3px solid transparent`,
    transition: 'all 0.3s ease',
    fontSize: '1rem'
  });

  return (
    <>
      {/* Header with Back Button */}
      <header
        className="relative"
        style={{ backgroundColor: theme.background.dark }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: theme.background.dark, opacity: 0.6 }}
        />

        <nav className="relative z-10 flex items-center p-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:opacity-75"
            style={{ color: theme.text.onDark }}
          >
            <ArrowLeft size={24} />
            <span className="text-sm/6 font-semibold">Back</span>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div style={{ backgroundColor: theme.background.dark, minHeight: '100vh' }}>
        <div className="max-w-4xl mx-auto px-4 py-12 lg:px-8">
          {/* Tab Navigation */}
          <div className="border-b mb-12" style={{ borderColor: theme.border.dark }}>
            <div className="flex gap-0">
              <button
                onClick={() => setActiveTab('privacy')}
                style={tabClasses(activeTab === 'privacy') as React.CSSProperties}
                className="hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                style={tabClasses(activeTab === 'terms') as React.CSSProperties}
                className="hover:opacity-80 transition-opacity"
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{ color: theme.text.onDark }}>
            {/* PRIVACY POLICY */}
            {activeTab === 'privacy' && (
              <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  1. Introduction
                </h2>
                <p className="mb-4 leading-relaxed">
                  can(RE)volution ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p className="leading-relaxed">
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-4" style={{ color: theme.primary.light }}>
                  2.1 Information You Provide Directly
                </h3>
                <p className="mb-4 leading-relaxed">
                  We may collect information you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Fill out our contact form</li>
                  <li>Request information about our products</li>
                  <li>Schedule a demo or appointment</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Correspond with us via email</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  This information may include:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Name and email address</li>
                  <li>Phone number</li>
                  <li>Company name and industry</li>
                  <li>Messages and inquiries</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-4" style={{ color: theme.primary.light }}>
                  2.2 Automatically Collected Information
                </h3>
                <p className="mb-4 leading-relaxed">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>IP address</li>
                  <li>Device identifiers</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. You can disable cookies in your browser settings, though this may affect site functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  3. How We Use Your Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Responding to your inquiries and requests</li>
                  <li>Providing customer support</li>
                  <li>Scheduling and conducting demos or meetings</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Analyzing user behavior and trends</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  4. Sharing Your Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  We do not sell, trade, or share your personal information with third parties for their marketing purposes. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>With our service providers who assist in website operations</li>
                  <li>When required by law or to protect legal rights</li>
                  <li>With your consent</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  5. Data Security
                </h2>
                <p className="mb-4 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  6. Your Privacy Rights
                </h2>
                <p className="mb-4 leading-relaxed">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your information</li>
                  <li>Right to opt-out of marketing communications</li>
                  <li>Right to data portability</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  7. Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  8. Children's Privacy
                </h2>
                <p className="leading-relaxed">
                  Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child's account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  9. Changes to This Privacy Policy
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last Updated" date at the top of this page.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  10. Contact Us
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <p className="font-semibold">can(RE)volution</p>
                <p style={{ color: theme.text.mutedDark }}>Email: hello@canrevolution.com</p>
                <p style={{ color: theme.text.mutedDark }}>Website: www.canrevolution.com</p>
                <p className="mt-2 text-sm" style={{ color: theme.text.mutedDark }}>We will respond to your inquiry within 30 business days.</p>
              </section>
            </>
            )}

            {/* TERMS OF SERVICE */}
            {activeTab === 'terms' && (
              <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  1. Agreement to Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  2. Use License
                </h2>
                <p className="mb-4 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on can(RE)volution's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Conduct any systematic or automated data collection activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  3. Disclaimer
                </h2>
                <p className="mb-4 leading-relaxed">
                  The materials on can(RE)volution's website are provided on an "as is" basis. can(RE)volution makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="leading-relaxed">
                  Further, can(RE)volution does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  4. Limitations
                </h2>
                <p className="leading-relaxed">
                  In no event shall can(RE)volution or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on can(RE)volution's website, even if can(RE)volution or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  5. Accuracy of Materials
                </h2>
                <p className="mb-4 leading-relaxed">
                  The materials appearing on can(RE)volution's website could include technical, typographical, or photographic errors. can(RE)volution does not warrant that any of the materials on its website are accurate, complete, or current. can(RE)volution may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  6. Links
                </h2>
                <p className="mb-4 leading-relaxed">
                  can(RE)volution has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by can(RE)volution of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  7. Modifications
                </h2>
                <p className="leading-relaxed">
                  can(RE)volution may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  8. Governing Law
                </h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which can(RE)volution operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  9. User Conduct
                </h2>
                <p className="mb-4 leading-relaxed">
                  You agree not to use this website in any way that:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Is illegal or violates any applicable laws or regulations</li>
                  <li>Harasses, abuses, insults, threatens, or intimidates others</li>
                  <li>Infringes upon intellectual property rights</li>
                  <li>Transmits viruses, malware, or harmful code</li>
                  <li>Attempts to gain unauthorized access to systems or networks</li>
                  <li>Impersonates any person or entity</li>
                  <li>Interferes with the normal operation of the website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  10. Intellectual Property Rights
                </h2>
                <p className="mb-4 leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of can(RE)volution or its content suppliers and is protected by international copyright laws. Any unauthorized reproduction or distribution is prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  11. Third-Party Content
                </h2>
                <p className="leading-relaxed">
                  can(RE)volution is not responsible for the content, accuracy, or practices of third-party websites linked to or from our site. Your use of third-party websites is at your own risk and subject to their terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  12. Limitation of Liability
                </h2>
                <p className="mb-4 leading-relaxed">
                  To the fullest extent permitted by law, in no event shall can(RE)volution be liable for any indirect, incidental, special, consequential, or punitive damages, regardless of the cause of action or the theory of liability, even if can(RE)volution has been advised of the possibility of such damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  13. Indemnification
                </h2>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless can(RE)volution and its officers, directors, employees, and agents from any claims, damages, losses, and expenses arising from your use of the website or violation of these terms of service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary.light }}>
                  14. Contact Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <p className="font-semibold">can(RE)volution</p>
                <p style={{ color: theme.text.mutedDark }}>Email: hello@canrevolution.com</p>
                <p style={{ color: theme.text.mutedDark }}>Website: www.canrevolution.com</p>
                <p className="mt-2 text-sm" style={{ color: theme.text.mutedDark }}>We will respond to your inquiry within 30 business days.</p>
              </section>
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
