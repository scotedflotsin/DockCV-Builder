
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';


const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  
  const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design with blue accents',
    preview: 'bg-gradient-to-br from-blue-50 to-blue-100',
    color: 'border-blue-500'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional and professional layout',
    preview: 'bg-gradient-to-br from-gray-50 to-gray-100',
    color: 'border-gray-500'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Vibrant and eye-catching with purple gradients',
    preview: 'bg-gradient-to-br from-purple-50 to-pink-100',
    color: 'border-purple-500'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant with lots of white space',
    preview: 'bg-gradient-to-br from-gray-25 to-gray-50',
    color: 'border-gray-400'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Corporate style with structured layout',
    preview: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    color: 'border-blue-600'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated design with centered layout',
    preview: 'bg-gradient-to-br from-amber-50 to-orange-100',
    color: 'border-amber-500'
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'High-contrast design with yellow accents',
    preview: 'bg-gradient-to-br from-yellow-100 to-orange-200',
    color: 'border-yellow-500'
  },
  {
    id: 'clean',
    name: 'Clean',
    description: 'Minimalist approach with subtle styling',
    preview: 'bg-gradient-to-br from-slate-50 to-slate-100',
    color: 'border-slate-400'
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Premium design for senior professionals',
    preview: 'bg-gradient-to-br from-stone-50 to-stone-100',
    color: 'border-stone-500'
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Developer-focused with terminal styling',
    preview: 'bg-gradient-to-br from-green-900 to-green-800',
    color: 'border-green-500'
  },
  {
    id: 'extraElegant',
    name: 'ExtraElegant',
    description: 'Polished and extra-refined for standout resumes',
    preview: 'bg-gradient-to-br from-gray-25 to-gray-50',
    color: 'border-slate-400'
  },
  {
    id: 'urbanChic',
    name: 'Urban Chic',
    description: 'Trendy layout with modern city-style elements',
    preview: 'bg-gradient-to-br from-zinc-50 to-zinc-100',
    color: 'border-zinc-500'
  },
  {
    id: 'heritage',
    name: 'Heritage',
    description: 'Classic serif design with legacy typography',
    preview: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    color: 'border-yellow-600'
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Minimal black-and-white layout with sharp contrasts',
    preview: 'bg-gradient-to-br from-white to-gray-200',
    color: 'border-black'
  },
  {
    id: 'quantum',
    name: 'Quantum',
    description: 'Futuristic layout with digital-inspired styling',
    preview: 'bg-gradient-to-br from-slate-900 to-slate-700',
    color: 'border-indigo-500'
  },
  {
    id: 'structure',
    name: 'Structure',
    description: 'Grid-based layout with consistent alignment',
    preview: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
    color: 'border-cyan-600'
  },
  {
    id: 'venguard',
    name: 'Venguard',
    description: 'Avant-garde layout for visual impact',
    preview: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    color: 'border-indigo-400'
  },
  {
    id: 'gallery',
    name: 'Gallery',
    description: 'Visual-focused resume for creative professionals',
    preview: 'bg-gradient-to-br from-pink-50 to-pink-100',
    color: 'border-pink-500'
  },
  {
    id: 'impact',
    name: 'Impact',
    description: 'Bold typography and layout for strong impression',
    preview: 'bg-gradient-to-br from-red-50 to-red-100',
    color: 'border-red-500'
  },
  {
    id: 'ascend',
    name: 'Ascend',
    description: 'Clean upward flow with subtle visuals',
    preview: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    color: 'border-emerald-500'
  },
  {
    id: 'serifSimple',
    name: 'Serif Simple',
    description: 'Elegant serif typography with classic layout',
    preview: 'bg-gradient-to-br from-fuchsia-50 to-fuchsia-100',
    color: 'border-fuchsia-500'
  }
];


  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Template</h2>
        <p className="text-gray-600">Select a professional template that matches your style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedTemplate === template.id
                  ? `ring-2 ring-offset-2 ${template.color.replace('border-', 'ring-')} shadow-lg`
                  : 'hover:shadow-md'
                }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardContent className="p-4">
                <div className={`h-32 rounded-lg mb-4 ${template.preview} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-20 bg-white rounded shadow-sm mx-auto mb-2 flex items-center justify-center">
                      <div className="text-xs text-gray-400">Preview</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                <Button
                  variant={selectedTemplate === template.id ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  {selectedTemplate === template.id ? 'Selected' : 'Select Template'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default TemplateSelector;
