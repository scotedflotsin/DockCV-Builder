import { motion } from 'framer-motion'
import ModernTemplate from '@/components/templates/ModernTemplate';
import ClassicTemplate from '@/components/templates/ClassicTemplate';
import CreativeTemplate from '@/components/templates/CreativeTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import ProfessionalTemplate from '@/components/templates/ProfessionalTemplate';
import ElegantTemplate from '@/components/templates/ElegantTemplate';
import BoldTemplate from '@/components/templates/BoldTemplate';
import CleanTemplate from '@/components/templates/CleanTemplate';
import ExecutiveTemplate from '@/components/templates/ExecutiveTemplate';
import TechTemplate from '@/components/templates/TechTemplate';
import ExtraElegantTemplate from '@/components/templates/ExtraElegantTemplate';
import UrbanChicTemplate from '@/components/templates/UrbanChicTemplate';
import HeritageTemplate from '@/components/templates/HeritageTemplate';
import MonochromeTemplate from '@/components/templates/MonochromeTemplate';
import QuantumTemplate from '@/components/templates/QuantumTemplate';
import StructureTemplate from '@/components/templates/StructureTemplate';
import VanguardTemplate from '@/components/templates/VanguardTemplate';
import GalleryTemplate from '@/components/templates/GalleryTemplate';
import ImpactTemplate from '@/components/templates/ImpactTemplate';
import AscendTemplate from '@/components/templates/AscendTemplate';
import SerifSimpleTemplate from '@/components/templates/SerifSimpleTemplate';
import React, { forwardRef } from 'react';



const ResumePreview = ({ resumeData, selectedTemplate }, ref) => {

const renderTemplate = () => {
  console.log('Rendering template:', selectedTemplate, resumeData);
  switch (selectedTemplate) {
    case 'modern':
      return <ModernTemplate data={resumeData} />;
    case 'classic':
      return <ClassicTemplate data={resumeData} />;
    case 'creative':
      return <CreativeTemplate data={resumeData} />;
    case 'minimal':
      return <MinimalTemplate data={resumeData} />;
    case 'professional':
      return <ProfessionalTemplate data={resumeData} />;
    case 'elegant':
      return <ElegantTemplate data={resumeData} />;
    case 'bold':
      return <BoldTemplate data={resumeData} />;
    case 'clean':
      return <CleanTemplate data={resumeData} />;
    case 'executive':
      return <ExecutiveTemplate data={resumeData} />;
    case 'tech':
      return <TechTemplate data={resumeData} />;
    case 'extraElegant':
      return <ExtraElegantTemplate data={resumeData} />;
    case 'urbanChic':
      return <UrbanChicTemplate data={resumeData} />;
    case 'heritage':
      return <HeritageTemplate data={resumeData} />;
    case 'monochrome':
      return <MonochromeTemplate data={resumeData} />;
    case 'quantum':
      return <QuantumTemplate data={resumeData} />;
    case 'structure':
      return <StructureTemplate data={resumeData} />;
    case 'venguard':
      return <VanguardTemplate data={resumeData} />;
    case 'gallery':
      return <GalleryTemplate data={resumeData} />;
    case 'impact':
      return <ImpactTemplate data={resumeData} />;
    case 'ascend':
      return <AscendTemplate data={resumeData} />;
    case 'serifSimple':
      return <SerifSimpleTemplate data={resumeData} />;
    default:
      return <ModernTemplate data={resumeData} />;
  }
};


  return (
    <motion.div
      ref={ref}
      key={selectedTemplate}
      initial={{ opacity: 0.8, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="resume-preview bg-white shadow-2xl rounded-lg overflow-hidden resume-page"
      id="resume-preview"
    >
      {renderTemplate()}
    </motion.div>
  )



}

export default ResumePreview