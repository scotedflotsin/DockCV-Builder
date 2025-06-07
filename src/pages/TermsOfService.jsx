import React from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { FileCheck } from 'lucide-react'
import SEO from '@/components/SEO'  // Adjust the import path as per your project structure

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Add SEO component here with relevant props */}
      <SEO
        title="Terms of Service - DockCV"
        description="Read the terms and conditions for using DockCV's resume builder service. Learn about your rights and responsibilities."
        url="https://www.dockcv.com/terms-of-service"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12 md:mb-16">
              <FileCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">Last updated: June 04, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the DockCV Builder website (the "Service") operated by DockCV Builder ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Use of Service</h2>
              <p>
                DockCV Builder provides an online platform for creating resumes. You are granted a non-exclusive, non-transferable, revocable license to access and use the Service strictly in accordance with these Terms.
              </p>
              <p>
                You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service or interfere with any other party's use and enjoyment of the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. User Content</h2>
              <p>
                You are solely responsible for the content you create, including text, images, and other materials ("User Content") that you input into the Service. You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and authorize us to use all patent, trademark, trade secret, copyright or other proprietary rights in and to any and all User Content.
              </p>
              <p>
                By submitting User Content, you grant DockCV Builder a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the Service and DockCV Builder's (and its successors' and affiliates') business. However, your resume data is primarily stored in your browser's local storage, and we do not claim ownership over it.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of DockCV Builder and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DockCV Builder.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p>
                DockCV Builder does not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall DockCV Builder, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@dockcv.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TermsOfService
