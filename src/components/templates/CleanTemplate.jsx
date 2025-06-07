import React from 'react';

const CleanTemplate = ({ data }) => (
  <div className="template-clean p-8 min-h-[297mm] bg-white text-gray-800">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-x-8 mb-8 pb-6 border-b-2 border-gray-200">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-lg object-cover shadow-md shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-light text-gray-800 mb-3 break-words">{data.personal.fullName || 'Your Name'}</h1>
          <div className="text-gray-600 space-y-1 text-sm">
            {data.personal.email && <p className="break-all">{data.personal.email}</p>}
            {data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
            {data.personal.address && <p className="break-all">{data.personal.address}</p>}
            {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
            {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
          </div>
        </div>
      </div>

      {data.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800 text-base">{exp.position}</h3>
                <span className="text-gray-600 text-xs whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="text-gray-600 mb-1 text-sm">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 text-base">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
                <div className="text-right text-gray-600 text-xs whitespace-nowrap pl-2">
                  <p>{edu.year}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.skills && (
        <div>
          <h2 className="text-xl font-light text-gray-800 mb-4">Skills</h2>
          <p className="text-gray-700 text-sm">{data.skills}</p>
        </div>
      )}
{data.custom && data.custom.length > 0 && (
  <div className="mt-10">
    {data.custom.map((section, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-xl font-light text-gray-800 mb-3">
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
          {section.text || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}


    </div>
  </div>
);

export default CleanTemplate;