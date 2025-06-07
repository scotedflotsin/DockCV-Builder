import React from 'react';

const HeritageTemplate = ({ data }) => (
  <div className="template-heritage p-10 min-h-[297mm] bg-ivory-50 text-gray-800 font-sans">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap');
      .template-heritage { --font-serif: 'Merriweather', serif; --font-sans: 'Lato', sans-serif; }
    `}</style>

    <div className="flex flex-col items-center text-center mb-8">
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-400 mb-4"
        />
      )}

      <h1
        style={{ fontFamily: 'var(--font-serif)' }}
        className="text-4xl font-bold tracking-tight text-gray-900 mb-2 break-words"
      >
        {data.personal.fullName || 'Your Name'}
      </h1>

      <div
        style={{ fontFamily: 'var(--font-sans)' }}
        className="flex justify-center flex-wrap gap-x-5 text-gray-600 text-sm"
      >
        {data.personal.email && <p>{data.personal.email}</p>}
        {data.personal.phone && <p>{data.personal.phone}</p>}
        {data.personal.address && <p>{data.personal.address}</p>}
        {data.personal.linkedin && <p>linkedin.com/{data.personal.linkedin}</p>}
        {data.personal.website && <p>{data.personal.website}</p>}
      </div>
    </div>

    <hr className="border-t-2 border-gray-400 mb-8" />

    {data.summary && (
      <div className="mb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl font-bold text-gray-800 mb-3">
          Professional Profile
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)' }} className="text-gray-700 leading-relaxed text-sm">
          {data.summary}
        </p>
      </div>
    )}

    {data.experience && data.experience.length > 0 && data.experience[0].company && (
      <div className="mb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl font-bold text-gray-800 mb-4">
          Professional Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 style={{ fontFamily: 'var(--font-sans)' }} className="font-bold text-gray-900 text-base">
                {exp.position}
              </h3>
              <span style={{ fontFamily: 'var(--font-sans)' }} className="text-gray-600 text-xs whitespace-nowrap pl-2">
                {exp.duration}
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)' }} className="italic text-gray-700 mb-2 text-sm">
              {exp.company}
            </p>
            <p style={{ fontFamily: 'var(--font-sans)' }} className="text-gray-700 leading-relaxed text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    )}

    {data.education && data.education.length > 0 && data.education[0].institution && (
      <div className="mb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl font-bold text-gray-800 mb-4">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 style={{ fontFamily: 'var(--font-sans)' }} className="font-bold text-gray-900 text-base">
                  {edu.degree}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)' }} className="italic text-gray-700 text-sm">
                  {edu.institution}
                </p>
              </div>
              <div className="text-right text-gray-600 text-xs whitespace-nowrap pl-2">
                <p style={{ fontFamily: 'var(--font-sans)' }}>{edu.year}</p>
                {edu.gpa && <p style={{ fontFamily: 'var(--font-sans)' }}>GPA: {edu.gpa}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {data.skills && (
      <div className="mb-6">
        <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl font-bold text-gray-800 mb-3">
          Core Competencies
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)' }} className="text-gray-700 text-sm">
          {data.skills}
        </p>
      </div>
    )}

    {data.custom && data.custom.length > 0 && (
      <div>
        {data.custom.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-xl font-bold text-gray-800 mb-3">
              {section.title?.trim() || 'Custom Section'}
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)' }} className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
              {section.text || section.content || 'No content provided.'}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default HeritageTemplate;
