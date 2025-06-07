import React from 'react';

const ElegantTemplate = ({ data }) => (
  <div className="template-elegant p-10 min-h-[297mm] bg-gray-50 text-gray-800">
    <div className="bg-white shadow-lg rounded-lg p-8">
      <div className="text-center mb-8 pb-6 border-b border-gray-200">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover mx-auto mb-4 shadow-md"
          />
        )}
        <h1 className="text-4xl font-serif text-gray-800 mb-3 break-words">{data.personal.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 space-y-1 text-sm">
          {data.personal.email && data.personal.phone && <p className="break-all">{data.personal.email} • {data.personal.phone}</p>}
          {(!data.personal.email || !data.personal.phone) && data.personal.email && <p className="break-all">{data.personal.email}</p>}
          {(!data.personal.email || !data.personal.phone) && data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
          {data.personal.address && <p className="break-all">{data.personal.address}</p>}
          {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
          {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
        </div>
      </div>

      {data.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4 text-center">Professional Profile</h2>
          <p className="text-gray-700 leading-relaxed text-center italic text-sm">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4 text-center">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
              <div className="text-center mb-2">
                <h3 className="font-semibold text-gray-800 text-base">{exp.position}</h3>
                <p className="text-gray-600 italic text-sm">{exp.company} • <span className="text-xs">{exp.duration}</span></p>
              </div>
              <p className="text-gray-700 leading-relaxed text-center text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4 text-center">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 text-center">
              <h3 className="font-semibold text-gray-800 text-base">{edu.degree}</h3>
              <p className="text-gray-600 italic text-sm">{edu.institution} • <span className="text-xs">{edu.year}</span></p>
              {edu.gpa && <p className="text-gray-600 text-xs">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {data.skills && (
        <div className="text-center">
          <h2 className="text-xl font-serif text-gray-800 mb-4">Core Competencies</h2>
          <p className="text-gray-700 italic text-sm">{data.skills}</p>
        </div>
      )}
      {data.custom && data.custom.length > 0 && (
  <div className="mt-10">
    {data.custom.map((section, index) => (
      <div
        key={index}
        className="mb-8 text-center border-t border-gray-200 pt-6"
      >
        <h2 className="text-xl font-serif text-gray-800 mb-3">
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 italic text-sm whitespace-pre-wrap leading-relaxed">
          {section.text || section.content || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}

    </div>
  </div>
);

export default ElegantTemplate;