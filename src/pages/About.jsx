import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Clock, Globe } from 'lucide-react'
import Footer from '@/components/Footer'
import SEO from '../components/SEO.jsx' // ✅ SEO import

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* ✅ SEO Component */}
      <SEO
        title="About – DockCV Resume Builder"
        description="Learn more about DockCV, our mission, our story, and how we're helping thousands of users build beautiful resumes quickly and professionally."
        url="https://www.dockcv.com/about"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DockCV Builder
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to help job seekers create professional, ATS-friendly resumes
              that stand out and get them hired.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100K+</h3>
              <p className="text-gray-600">Happy Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Professional Templates</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5 Min</h3>
              <p className="text-gray-600">Average Build Time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global</h3>
              <p className="text-gray-600">Used Worldwide</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                DockCV Builder was founded in 2025 by Harsh Verma with a simple but powerful goal: to make it easy for everyone to create professional resumes that truly get results. Harsh noticed how many job seekers struggled with formatting and design, often spending hours trying to make their resumes look polished and professional.
              </p>
              <p className="text-gray-600 mb-6">
                Drawing from his experience and passion for technology, Harsh assembled a talented team of HR professionals, designers, and developers to create a solution that combines beautiful design with ATS-friendly formatting. The result is a platform that helps users craft stunning resumes in minutes, not hours.
              </p>
              <p className="text-gray-600">
                Today, DockCV Builder has empowered thousands of job seekers to land their dream jobs. But Harsh and his team are just getting started — they are committed to continuously improving the platform and adding new features to make resume building easier and more effective for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
