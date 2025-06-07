import React from 'react';

const ProfessionalTemplate = ({ data }) => (
  <div className="template-professional p-8 min-h-[297mm] bg-white text-gray-800">
    <div className="border-l-4 border-blue-800 pl-6 mb-8">
      <div className="flex items-start gap-x-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded object-cover border border-gray-300 shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
          <div className="text-gray-600 space-y-1 text-sm">
            {data.personal.email && <p className="break-all">{data.personal.email}</p>}
            {data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
            {data.personal.address && <p className="break-all">{data.personal.address}</p>}
            {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
            {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
          </div>
        </div>
      </div>
    </div>

    {data.summary && (
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 mb-3 bg-gray-100 p-2 uppercase tracking-wider">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed pl-2 text-sm">{data.summary}</p>
      </div>
    )}

    {data.experience && data.experience.length > 0 && data.experience[0].company && (
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 mb-3 bg-gray-100 p-2 uppercase tracking-wider">Professional Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6 pl-2">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800 text-base">{exp.position}</h3>
              <span className="text-gray-600 font-medium text-xs whitespace-nowrap pl-2">{exp.duration}</span>
            </div>
            <p className="text-blue-700 font-semibold mb-1 text-sm">{exp.company}</p>
            <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.education && data.education.length > 0 && data.education[0].institution && (
      <div className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 mb-3 bg-gray-100 p-2 uppercase tracking-wider">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4 pl-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-800 text-base">{edu.degree}</h3>
                <p className="text-blue-700 font-medium text-sm">{edu.institution}</p>
              </div>
              <div className="text-right text-gray-600 text-xs whitespace-nowrap pl-2">
                <p className="font-medium">{edu.year}</p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {data.skills && (
      <div>
        <h2 className="text-lg font-bold text-blue-800 mb-3 bg-gray-100 p-2 uppercase tracking-wider">Core Competencies</h2>
        <p className="text-gray-700 pl-2 text-sm">{data.skills}</p>
      </div>
    )}
    {data.custom && data.custom.length > 0 && (
  <div className="mt-10">
    {data.custom.map((section, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-lg font-bold text-blue-800 mb-3 bg-gray-100 p-2 uppercase tracking-wider">
          {section.title?.trim() || 'Custom Section'}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap pl-2">
          {section.text || section.content || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}

  </div>
);

export default ProfessionalTemplate;