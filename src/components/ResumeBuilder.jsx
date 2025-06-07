import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import TemplateSelector from '@/components/TemplateSelector'
import PDFExporter from '@/components/PDFExporter'
import { FileText, Eye, Palette, Download } from 'lucide-react'

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, Country',
      linkedin: 'linkedin.com/in/johndoe',
      website: 'johndoe.com',
    },
    summary: 'Experienced software developer with expertise in React and Node.js.',
    education: [
      { institution: 'University of Example', degree: 'B.Sc. Computer Science', year: '2020', gpa: '3.8' },
    ],
    experience: [
      {
        company: 'Example Corp',
        position: 'Software Engineer',
        duration: 'Jan 2021 - Present',
        description: 'Worked on frontend and backend development for various projects.'
      }
    ],
    skills: 'JavaScript, React, Node.js, MongoDB',
    profileImage: null,
    custom: [
      {
        title: 'Projects',
        content: 'Developed a portfolio website and a resume builder app.'
      },
    ]
  });

  const resumeRef = useRef();

  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
    const savedTemplate = localStorage.getItem('selectedTemplate');
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate);
  }, [selectedTemplate]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Build Your Professional Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the simple steps below to create a stunning resume that gets
            you noticed by employers.
          </p>
        </motion.div>

        {/* Offscreen hidden preview for PDF export (always mounted) */}
        <div
          ref={resumeRef}
          style={{
            position: 'fixed',
            left: '-9999px',
            top: 0,
            width: '210mm',
            height: '297mm',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
          aria-hidden="true"
        >
          <ResumePreview
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>

        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="form"
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Fill Details</span>
              <span className="sm:hidden">Details</span>
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white"
            >
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">Choose Template</span>
              <span className="sm:hidden">Templates</span>
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Preview</span>
              <span className="sm:hidden">Preview</span>
            </TabsTrigger>
            <TabsTrigger
              value="download"
              className="flex items-center justify-center gap-2 data-[state=active]:bg-white"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Download</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ResumeForm
                  resumeData={resumeData}
                  setResumeData={setResumeData}
                />
              </div>
              <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto p-1 rounded-lg">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    Live Preview
                  </h3>
                  <div className="aspect-[210/297] w-full max-w-md mx-auto bg-white shadow-lg rounded-md overflow-y-auto overflow-x-hidden">
                    <div className="transform scale-[0.3] sm:scale-[0.4] md:scale-[0.5] origin-top-left w-[333%] sm:w-[250%] md:w-[200%] h-[333%] sm:h-[250%] md:h-[200%]">
                      <ResumePreview
                        resumeData={resumeData}
                        selectedTemplate={selectedTemplate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
            <div className="mt-8 lg:hidden">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Live Preview ({selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)})
              </h3>
              <div className="aspect-[210/297] w-full max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden">
                <div className="transform scale-[0.3] origin-top-left w-[333%] h-[333%]">
                  <ResumePreview
                    resumeData={resumeData}
                    selectedTemplate={selectedTemplate}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Resume Preview
                </h3>
                <p className="text-gray-600">
                  This is how your resume will look when downloaded.
                </p>
              </div>
              <div className="shadow-2xl rounded-lg overflow-hidden bg-white resume-page">
                <ResumePreview
                  resumeData={resumeData}
                  selectedTemplate={selectedTemplate}
                />
              </div>
            </div>
          </TabsContent>

         <TabsContent value="download">
  <div className="max-w-2xl mx-auto">
    <PDFExporter 
      ResumeComponent={() => (
        <ResumePreview 
          resumeData={resumeData} 
          selectedTemplate={selectedTemplate} 
        />
      )} 
    />
  </div>
</TabsContent>

        </Tabs>
      </div>
    </section>
  )
}

export default ResumeBuilder
