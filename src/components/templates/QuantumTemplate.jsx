import React from 'react';

const QuantumTemplate = ({ data }) => (
  <div className="template-quantum p-8 min-h-[297mm] bg-white text-gray-800 font-sans">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Inter:wght@400;500;700&display=swap');
      .template-quantum { --font-mono: 'Roboto Mono', monospace; --font-sans: 'Inter', sans-serif; }
    `}</style>

    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b-2 border-indigo-500">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
          />
        )}
        <h1
          style={{ fontFamily: 'var(--font-sans)' }}
          className="text-4xl font-bold text-indigo-800 break-words"
        >
          {data.personal.fullName || 'Your Name'}
        </h1>
      </div>

      <div
        style={{ fontFamily: 'var(--font-mono)' }}
        className="text-right text-xs text-gray-600 space-y-1"
      >
        {data.personal.email && <p>{data.personal.email}</p>}
        {data.personal.phone && <p>{data.personal.phone}</p>}
        {data.personal.linkedin && <p>linkedin/{data.personal.linkedin}</p>}
        {data.personal.website && <p>{data.personal.website}</p>}
      </div>
    </header>

    {data.summary && (
      <section className="mb-6">
        <h2
          style={{ fontFamily: 'var(--font-mono)' }}
          className="text-sm font-medium text-indigo-600 mb-2"
        >
          // PROFESSIONAL_SUMMARY
        </h2>
        <p
          style={{ fontFamily: 'var(--font-sans)' }}
          className="text-gray-700 leading-relaxed text-sm"
        >
          {data.summary}
        </p>
      </section>
    )}

    {data.experience && data.experience.length > 0 && (
      <section className="mb-6">
        <h2
          style={{ fontFamily: 'var(--font-mono)' }}
          className="text-sm font-medium text-indigo-600 mb-3"
        >
          // WORK_EXPERIENCE
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3
                style={{ fontFamily: 'var(--font-sans)' }}
                className="font-semibold text-base text-gray-900"
              >
                {exp.position} @ <span className="text-indigo-700">{exp.company}</span>
              </h3>
              <span
                style={{ fontFamily: 'var(--font-mono)' }}
                className="text-gray-500 text-xs whitespace-nowrap pl-2"
              >
                {exp.duration}
              </span>
            </div>
            <p
              style={{ fontFamily: 'var(--font-sans)' }}
              className="text-gray-700 leading-relaxed text-sm"
            >
              {exp.description}
            </p>
          </div>
        ))}
      </section>
    )}

    {data.education && data.education.length > 0 && (
      <section className="mb-6">
        <h2
          style={{ fontFamily: 'var(--font-mono)' }}
          className="text-sm font-medium text-indigo-600 mb-3"
        >
          // EDUCATION
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h3
                  style={{ fontFamily: 'var(--font-sans)' }}
                  className="font-semibold text-base text-gray-900"
                >
                  {edu.degree}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-sans)' }}
                  className="text-indigo-700 text-sm"
                >
                  {edu.institution}
                </p>
              </div>
              <div className="text-right text-gray-500 text-xs whitespace-nowrap pl-2">
                <p style={{ fontFamily: 'var(--font-mono)' }}>
                  {edu.year} {edu.gpa && `| ${edu.gpa} GPA`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    )}

    {data.skills && (
      <section className="mb-6">
        <h2
          style={{ fontFamily: 'var(--font-mono)' }}
          className="text-sm font-medium text-indigo-600 mb-2"
        >
          // SKILLS
        </h2>
        <p
          style={{ fontFamily: 'var(--font-mono)' }}
          className="text-indigo-900 text-sm leading-relaxed bg-indigo-50 p-3 rounded"
        >
          {data.skills}
        </p>
      </section>
    )}

    {data.custom && data.custom.length > 0 && (
      <section>
        {data.custom.map((section, index) => (
          <div key={index} className="mb-6">
            <h2
              style={{ fontFamily: 'var(--font-mono)' }}
              className="text-sm font-medium text-indigo-600 mb-2"
            >
              // {section.title?.trim().toUpperCase().replace(/ /g, '_') || 'CUSTOM_SECTION'}
            </h2>
            <p
              style={{ fontFamily: 'var(--font-sans)' }}
              className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap"
            >
              {section.text || section.content || 'No content provided.'}
            </p>
          </div>
        ))}
      </section>
    )}
  </div>
);

export default QuantumTemplate;
