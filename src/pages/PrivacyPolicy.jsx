import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { Shield } from 'lucide-react'
import { Helmet } from 'react-helmet'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - DockCV</title>
        <meta
          name="description"
          content="DockCV's Privacy Policy explains how your resume data is collected, used, and protected. Your privacy and data security are our top priorities."
        />
        <meta property="og:title" content="Privacy Policy - DockCV" />
        <meta
          property="og:description"
          content="Read the Privacy Policy of DockCV to understand how we handle your personal and resume data with transparency and care."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dockcv.com/privacy-policy" />
        <meta property="og:image" content="https://www.dockcv.com/public/assets/dockcvhighreso.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dockcv.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-16">
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12 md:mb-16">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600">Last updated: June 04, 2025</p>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Welcome to <strong>DockCV Builder</strong>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:support@dockcv.com">support@dockcv.com</a>.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. What Information Do We Collect?</h2>
                <p>
                  <strong>Personal Information You Disclose to Us:</strong> We collect personal information that you voluntarily provide to us when you use our resume builder. This information includes your name, contact details (email, phone number, address), professional history (work experience, education), skills, and any other information you choose to include in your resume, including your profile image if you upload one.
                </p>
                <p>
                  <strong>Information Automatically Collected:</strong> We do not automatically collect any personally identifiable information. Your resume data is primarily stored in your browser's local storage. We may collect anonymous usage data (e.g., feature usage, template popularity) to improve our services. This data is aggregated and cannot be used to identify you.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How Do We Use Your Information?</h2>
                <p>
                  We use the information you provide solely for the purpose of enabling you to create, customize, and download your resume. Specifically:
                </p>
                <ul>
                  <li>To provide and maintain our resume building service.</li>
                  <li>To allow you to save your resume data locally in your browser for future edits.</li>
                  <li>To generate a PDF version of your resume for download.</li>
                  <li>To improve and optimize our service based on aggregated, anonymous usage patterns.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Will Your Information Be Shared With Anyone?</h2>
                <p>
                  We do not share, sell, rent, or trade any of your personal information with third parties for their promotional purposes. Your resume data is not stored on our servers by default and remains within your browser's local storage.
                </p>
                <p>
                  We may disclose your information if we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. How Do We Keep Your Information Safe?</h2>
                <p>
                  Since your resume data is primarily stored in your browser's local storage, the security of this data largely depends on the security of your own device and browser. We recommend using up-to-date browser software and following good security practices.
                </p>
                <p>
                  For any data that might be processed by us (e.g., anonymous usage statistics), we implement appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. How Long Do We Keep Your Information?</h2>
                <p>
                  We do not store your resume data on our servers. Data stored in your browser's local storage will remain there until you clear your browser's cache/data or specifically delete it.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Do We Collect Information From Minors?</h2>
                <p>
                  Our services are not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children under 16.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. What Are Your Privacy Rights?</h2>
                <p>
                  You have the right to access, update, or delete the information you have provided by using the resume builder and managing your browser's local storage. If you have any questions about your privacy rights, you can contact us.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Updates to This Notice</h2>
                <p>
                  We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. How Can You Contact Us About This Notice?</h2>
                <p>
                  If you have questions or comments about this notice, you may email us at <a href="mailto:support@dockcv.com">support@dockcv.com</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy
