
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Zap, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToBuilder }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 bg-opacity-20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Dream Resume
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Create stunning, professional resumes in minutes with our powerful builder. 
              Choose from 21+ beautiful templates and export to PDF instantly!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>21+ Professional Templates</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Instant PDF Export</span>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
              <FileText className="w-4 h-4 text-yellow-400" />
              <span>ATS-Friendly</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={scrollToBuilder}
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-6 h-6 mr-2" />
              Start Building Now
            </Button>
            <p className="text-purple-200 text-sm">No signup required • Free to use</p>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <FileText className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Templates</h3>
            <p className="text-purple-100">Choose from 21 carefully designed templates that make you stand out</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Live Preview</h3>
            <p className="text-purple-100">See your resume update in real-time as you type and make changes</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
            <Download className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Download</h3>
            <p className="text-purple-100">Export your resume as a high-quality PDF ready for job applications</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
