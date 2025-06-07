import React from 'react';

const VanguardTemplate = ({ data }) => (
  <div className="template-vanguard min-h-[297mm] bg-white text-gray-800 flex">
    <div className="w-2/5 bg-gray-800 text-white p-8 flex flex-col justify-center items-center text-center">
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-2 border-white mb-6"
        />
      )}
      <div>
        <h1 className="text-4xl font-bold break-words mb-4">{data.personal.fullName || 'Your Name'}</h1>
        <div className="space-y-2 text-sm text-gray-300">
          {data.personal.email && <p className="break-all">{data.personal.email}</p>}
          {data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
          {data.personal.address && <p className="break-all">{data.personal.address}</p>}
          {data.personal.linkedin && <p className="break-all">linkedin.com/{data.personal.linkedin}</p>}
          {data.personal.website && <p className="break-all">{data.personal.website}</p>}
        </div>
      </div>
    </div>

    <div className="w-3/5 p-8">
      {data.summary && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-500 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-500 mb-3">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-base text-gray-900">{exp.position}</h3>
              <div className="flex justify-between items-baseline">
                <p className="text-gray-700 font-medium text-sm">{exp.company}</p>
                <span className="text-gray-500 text-xs whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="mt-1 text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-500 mb-3">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold text-base text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-xs">{edu.year} {edu.gpa && `| GPA: ${edu.gpa}`}</p>
            </div>
          ))}
        </section>
      )}

      {data.skills && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-500 mb-3">Skills</h2>
          <p className="text-gray-700 text-sm">{data.skills}</p>
        </section>
      )}

      {data.custom && data.custom.length > 0 && (
        <section>
          {data.custom.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-500 mb-3">
                {section.title?.trim() || 'Custom Section'}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                {section.text || section.content || 'No content provided.'}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  </div>
);

export default VanguardTemplate;
