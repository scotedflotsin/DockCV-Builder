import React from 'react';

const TechTemplate = ({ data }) => (
  <div className="template-tech p-8 min-h-[297mm] bg-gray-900 text-green-400 font-mono">
    <div className="border border-green-400 p-6 mb-6">
      <div className="flex items-start gap-x-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded object-cover border-2 border-green-400 shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 break-words">$ {data.personal.fullName || 'your_name'}</h1>
          <div className="text-green-300 space-y-1 text-sm">
            {data.personal.email && <p className="break-all">email: {data.personal.email}</p>}
            {data.personal.phone && <p className="break-all">phone: {data.personal.phone}</p>}
            {data.personal.address && <p className="break-all">location: {data.personal.address}</p>}
            {data.personal.linkedin && <p className="break-all">linkedin: {data.personal.linkedin}</p>}
            {data.personal.website && <p className="break-all">website: {data.personal.website}</p>}
          </div>
        </div>
      </div>
    </div>

    {data.summary && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-400 mb-3">// ABOUT</h2>
        <div className="border-l-2 border-green-400 pl-4">
          <p className="text-green-300 leading-relaxed text-sm">{data.summary}</p>
        </div>
      </div>
    )}

    {data.experience && data.experience.length > 0 && data.experience[0].company && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-400 mb-3">// EXPERIENCE</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4 border-l-2 border-green-400 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-green-400 text-base">{exp.position}</h3>
              <span className="text-green-300 text-xs whitespace-nowrap pl-2">{exp.duration}</span>
            </div>
            <p className="text-green-300 mb-1 text-sm">@ {exp.company}</p>
            <p className="text-green-200 leading-relaxed text-xs">{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.education && data.education.length > 0 && data.education[0].institution && (
      <div className="mb-6">
        <h2 className="text-xl font-bold text-green-400 mb-3">// EDUCATION</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3 border-l-2 border-green-400 pl-4">
            <h3 className="font-bold text-green-400 text-base">{edu.degree}</h3>
            <p className="text-green-300 text-sm">{edu.institution}</p>
            <div className="text-green-200 text-xs">
              <p>{edu.year}</p>
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
            </div>
          </div>
        ))}
      </div>
    )}

    {data.skills && (
      <div>
        <h2 className="text-xl font-bold text-green-400 mb-3">// SKILLS</h2>
        <div className="border-l-2 border-green-400 pl-4">
          <p className="text-green-300 text-sm">{data.skills}</p>
        </div>
      </div>
    )}


   {/* Custom Sections */}
    {data.custom && data.custom.length > 0 && (
      <div className="mt-10">
        {data.custom.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-green-400 mb-3">// {section.title?.trim() || 'Custom Section'}</h2>
            <div className="border-l-2 border-green-400 pl-4">
              <p className="text-green-300 text-sm leading-relaxed whitespace-pre-wrap">
                {section.text || section.content || 'No content provided.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TechTemplate;