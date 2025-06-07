import React from 'react';

const MinimalTemplate = ({ data }) => (
  <div className="template-minimal p-10 md:p-12 min-h-[297mm] bg-white text-gray-900">
    <div className="mb-10 md:mb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-x-8 mb-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-3 md:mb-4 break-words">{data.personal.fullName || 'Your Name'}</h1>
          <div className="text-gray-500 space-y-1 text-xs md:text-sm">
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
      <div className="mb-10 md:mb-12">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light">{data.summary}</p>
      </div>
    )}

    {data.experience && data.experience.length > 0 && data.experience[0].company && (
      <div className="mb-10 md:mb-12">
        <h2 className="text-xs md:text-sm font-medium text-gray-900 uppercase tracking-widest mb-4 md:mb-6">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-1 md:mb-2">
              <h3 className="text-base md:text-lg font-medium text-gray-900">{exp.position}</h3>
              <span className="text-gray-500 text-xs md:text-sm mt-1 md:mt-0 whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="text-gray-600 mb-2 md:mb-3 text-sm md:text-base">{exp.company}</p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base">{exp.description}</p>
          </div>
        ))}
      </div>
    )}

    {data.education && data.education.length > 0 && data.education[0].institution && (
      <div className="mb-10 md:mb-12">
        <h2 className="text-xs md:text-sm font-medium text-gray-900 uppercase tracking-widest mb-4 md:mb-6">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-baseline">
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600 text-sm md:text-base">{edu.institution}</p>
              </div>
              <div className="text-left md:text-right text-gray-500 text-xs md:text-sm mt-1 md:mt-0 whitespace-nowrap">
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
        <h2 className="text-xs md:text-sm font-medium text-gray-900 uppercase tracking-widest mb-4 md:mb-6">Skills</h2>
        <p className="text-gray-700 font-light text-sm md:text-base">{data.skills}</p>
      </div>
    )}
    {data.custom && data.custom.length > 0 && (
  <div className="mt-10 md:mt-12">
    {data.custom.map((section, index) => (
      <div key={index} className="mb-8 md:mb-10">
        <h2 className="text-xs md:text-sm font-medium text-gray-900 uppercase tracking-widest mb-3 md:mb-4">
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base whitespace-pre-wrap">
          {section.text || section.content || 'No content available.'}
        </p>
      </div>
    ))}
  </div>
)}

  </div>
);

export default MinimalTemplate;