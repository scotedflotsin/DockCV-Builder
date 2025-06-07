import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Footer from '@/components/Footer'
import { useToast } from '@/components/ui/use-toast'
import { Send, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://www.dockcv.com/mail-agent/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast({
          title: "Failed to send",
          description: result.message || "Something went wrong.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      })
      console.error("Send Mail Error:", error)
    }

    setIsSubmitting(false)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - DockCV Builder</title>
        <meta
          name="description"
          content="Get in touch with DockCV Builder team. Have questions or feedback? Reach out via email or phone. We're here to help you build your perfect resume."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dockcv.com/contact" />
        <meta property="og:title" content="Contact Us - DockCV Builder" />
        <meta property="og:description" content="Reach out to DockCV Builder for support or inquiries. We're here to help you build your resume." />
        <meta property="og:url" content="https://www.dockcv.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 pt-16">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
                feel free to reach out.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">Our team will get back to you within 24 hours.</p>
                    <a href="mailto:support@resumebuilder.pro" className="text-purple-600 hover:text-purple-700 font-medium">
                      support@dockcv.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">Mon-Fri from 9am to 5pm EST.</p>
                    <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-medium">
                      Not Avaliable to time
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">Unnao, Uttar Pradesh, 209801</p>
                    <a href="https://maps.app.goo.gl/m3ZkDypqufczDnrq7" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 font-medium">
                      View on Map
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-2 w-6 h-6 text-green-600"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M12 17.25a7.25 7.25 0 0 0 7.25-7.25V7.25A7.25 7.25 0 0 0 12 0a7.25 7.25 0 0 0-7.25 7.25V10A7.25 7.25 0 0 0 12 17.25Z"/><path d="M9.8 19.33c.8-.42 1.76-.71 2.7-.85"/><path d="M12 17.25v4.75"/><path d="M12 0v7.25"/><path d="M2.46 15H7a2 2 0 0 1 2 2v4.54"/><path d="M15 2.46V7a2 2 0 0 0-2 2H2.46"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">Connect With Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">Follow us on social media for updates and news.</p>
                    <div className="flex space-x-4">
                      <a href="https://www.instagram.com/dockcv.builder/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors duration-200">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/company/dockcv-builder/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors duration-200">
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                    <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Regarding..." required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message here..." rows={5} required className="mt-1" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Contact
