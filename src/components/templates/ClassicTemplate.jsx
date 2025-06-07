import React from 'react';

const ClassicTemplate = ({ data }) => (
  <div className="template-classic p-8 min-h-[297mm] bg-white text-gray-800">
    <div className="text-center mb-8 border-b-2 border-gray-800 pb-6">
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-gray-800"
        />
      )}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
      <div className="text-gray-600 text-sm">
        {data.personal.email && data.personal.phone && <p className="break-all">{data.personal.email} | {data.personal.phone}</p>}
        {(!data.personal.email || !data.personal.phone) && data.personal.email && <p className="break-all">{data.personal.email}</p>}
        {(!data.personal.email || !data.personal.phone) && data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
        {data.personal.address && <p className="break-all">{data.personal.address}</p>}
        {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
        {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
      </div>
    </div>

    {data.summary && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Objective</h2>
        <p className="text-gray-700 leading-relaxed text-justify text-sm">{data.summary}</p>
      </div>
    )}

    {data.experience && data.experience.length > 0 && data.experience[0].company && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800 text-base">{exp.position}</h3>
              <span className="text-gray-600 italic text-xs whitespace-nowrap pl-2">{exp.duration}</span>
            </div>
            <p className="font-semibold text-gray-700 mb-1 text-sm">{exp.company}</p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.education && data.education.length > 0 && data.education[0].institution && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-800 text-base">{edu.degree}</h3>
                <p className="text-gray-700 italic text-sm">{edu.institution}</p>
              </div>
              <div className="text-right text-gray-600 text-xs whitespace-nowrap pl-2">
                <p className="italic">{edu.year}</p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {data.skills && (
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">Skills</h2>
        <p className="text-gray-700 text-justify text-sm">{data.skills}</p>
      </div>
    )}
{data.custom && data.custom.length > 0 && (
  <div className="mt-8">
    {data.custom.map((section, index) => (
      <div key={index} className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide">
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 text-sm whitespace-pre-wrap text-justify">
          {section.text || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}


  </div>
);

export default ClassicTemplate;