import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Footer from '../components/Footer.jsx'

const Tutorial = () => {
  const videoUrl = "https://res.cloudinary.com/dsvhtz54c/video/upload/v1749289375/InShot_20250607_150826947_ed2571.mp4"

  return (
    <>
      <Helmet>
        <title>DockCV Tutorial - Learn to Build a Resume Fast</title>
        <meta
          name="description"
          content="Watch the DockCV tutorial and learn how to create a professional resume in minutes. Simple, fast, and powerful."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dockcv.com/tutorial" />
        <meta property="og:title" content="DockCV Tutorial - Learn to Build a Resume Fast" />
        <meta property="og:description" content="Watch how DockCV helps you build your resume quickly and easily. Our tutorial walks you through everything." />
        <meta property="og:url" content="https://www.dockcv.com/tutorial" />
        <meta property="og:type" content="video.other" />
        <meta property="og:video" content={videoUrl} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Watch DockCV Builder Tutorial
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Learn how to build a professional resume with DockCV in just minutes.
              </p>
            </motion.div>

            {/* Optimized Auto-Playing Responsive Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-2xl"
            >
              <video
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                playsInline
                loop
                controls
                preload="auto"
              />
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Tutorial
