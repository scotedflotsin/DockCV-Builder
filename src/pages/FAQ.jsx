import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Footer from '@/components/Footer'

const FAQ = () => {
  const faqs = [
    {
      question: "Is DockCV Builder really free?",
      answer: "Yes! You can create and download professional resumes completely free. No hidden fees or subscriptions required."
    },
    {
      question: "Can I edit my resume after downloading?",
      answer: "Your resume data is automatically saved in your browser. You can return anytime to make changes and download an updated version."
    },
    {
      question: "Are the templates ATS-friendly?",
      answer: "Absolutely! All our templates are designed to be compatible with Applicant Tracking Systems (ATS) used by employers."
    },
    {
      question: "What file format will my resume be in?",
      answer: "Your resume will be exported as a high-quality PDF file, which is the preferred format for job applications."
    },
    {
      question: "How many templates are available?",
      answer: "We offer lot of professionally designed templates, each with unique styles and layouts to suit different industries and preferences."
    },
    {
      question: "Can I add my own photo?",
      answer: "Yes! You can easily upload and include a professional photo in your resume. Our templates are designed to display your photo appropriately."
    },
    {
      question: "How long does it take to create a resume?",
      answer: "Most users complete their resume in about 5-10 minutes. Our intuitive interface and real-time preview make the process quick and easy."
    },
    {
      question: "Can I create multiple resumes?",
      answer: "Yes! You can create multiple versions of your resume with different content and templates to suit different job applications."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about using ResumeBuilder Pro
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-purple-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              Still have questions?{' '}
              <a
                href="/contact"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQ