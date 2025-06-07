import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '@/components/Hero'
import ResumeBuilder from '@/components/ResumeBuilder'
import Footer from '@/components/Footer'

const Home = () => {
  const builderRef = React.useRef(null)

  const scrollToBuilder = () => {
    builderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Helmet>
        <title>DockCV - Build Beautiful Resumes Instantly</title>
        <meta
          name="description"
          content="Create professional resumes and CVs online with DockCV. Easy, fast, and free resume builder tool with modern templates."
        />
        <meta property="og:title" content="DockCV - Build Beautiful Resumes Instantly" />
        <meta
          property="og:description"
          content="DockCV helps job seekers create professional, ATS-friendly resumes in minutes. Try our sleek templates and get hired faster!"
        />
        <meta property="og:url" content="https://dockcv.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.dockcv.com/public/assets/dockcvhighreso.png" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-16">
        <Hero scrollToBuilder={scrollToBuilder} />
        <div ref={builderRef}>
          <ResumeBuilder />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
