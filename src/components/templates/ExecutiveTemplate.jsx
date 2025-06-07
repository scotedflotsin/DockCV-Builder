import React from 'react';

const ExecutiveTemplate = ({ data }) => (
  <div className="template-executive p-10 min-h-[297mm] bg-white text-gray-800">
    <div className="border-4 border-gray-800 p-8">
      <div className="text-center mb-8 pb-6 border-b-2 border-gray-800">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded object-cover mx-auto mb-4 border-4 border-gray-800"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 break-words">{data.personal.fullName || 'YOUR NAME'}</h1>
        <div className="text-gray-700 text-base md:text-lg space-y-1">
          {data.personal.email && data.personal.phone && <p className="break-all">{data.personal.email} | {data.personal.phone}</p>}
          {(!data.personal.email || !data.personal.phone) && data.personal.email && <p className="break-all">{data.personal.email}</p>}
          {(!data.personal.email || !data.personal.phone) && data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
          {data.personal.address && <p className="break-all">{data.personal.address}</p>}
          {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
          {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
        </div>
      </div>

      {data.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-gray-400 pb-2 uppercase">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed text-base text-center">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-gray-400 pb-2 uppercase">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6 text-center">
              <h3 className="font-bold text-gray-800 text-xl mb-1">{exp.position}</h3>
              <p className="text-gray-600 font-semibold text-lg mb-1">{exp.company}</p>
              <p className="text-gray-600 mb-2 text-sm">{exp.duration}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b border-gray-400 pb-2 uppercase">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 text-center">
              <h3 className="font-bold text-gray-800 text-lg">{edu.degree}</h3>
              <p className="text-gray-600 font-semibold text-base">{edu.institution}</p>
              <p className="text-gray-600 text-sm">{edu.year}</p>
              {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {data.skills && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-2 uppercase">Core Competencies</h2>
          <p className="text-gray-700 text-base">{data.skills}</p>
        </div>
      )}
      {data.custom && data.custom.length > 0 && (
  <div className="mt-10">
    {data.custom.map((section, index) => (
      <div
        key={index}
        className="mb-8 text-center border-t border-gray-300 pt-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3 uppercase">
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
          {section.text || section.content || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}

    </div>
  </div>
);

export default ExecutiveTemplate;