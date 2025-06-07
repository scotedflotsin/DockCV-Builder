import React from 'react';

const MonochromeTemplate = ({ data }) => (
  <div className="template-monochrome p-10 min-h-[297mm] bg-white text-black font-sans">
    <div className="mb-10 text-center">
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-black mx-auto mb-4"
        />
      )}
      <h1 className="text-5xl font-extrabold tracking-tight mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
        {data.personal.email && <p>{data.personal.email}</p>}
        {data.personal.phone && <p>| {data.personal.phone}</p>}
        {data.personal.address && <p>| {data.personal.address}</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-500 mt-1">
        {data.personal.linkedin && <p>linkedin.com/{data.personal.linkedin}</p>}
        {data.personal.website && <p>| {data.personal.website}</p>}
      </div>
    </div>

    <div className="space-y-8">
      {data.summary && (
        <section>
          <h2 className="text-base font-bold tracking-widest uppercase text-gray-800 border-b border-black pb-2 mb-4">Profile</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <section>
          <h2 className="text-base font-bold tracking-widest uppercase text-gray-800 border-b border-black pb-2 mb-4">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg">{exp.position}</h3>
                <span className="text-gray-600 text-sm font-medium whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="text-gray-800 font-semibold mb-2 text-base">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <section>
          <h2 className="text-base font-bold tracking-widest uppercase text-gray-800 border-b border-black pb-2 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="text-gray-800 text-base">{edu.institution}</p>
                </div>
                <div className="text-right text-gray-600 text-sm whitespace-nowrap pl-2">
                  <p>{edu.year}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.skills && (
        <section>
          <h2 className="text-base font-bold tracking-widest uppercase text-gray-800 border-b border-black pb-2 mb-4">Skills</h2>
          <p className="text-gray-700 text-sm">{data.skills}</p>
        </section>
      )}

      {data.custom && data.custom.length > 0 && (
        <section>
          {data.custom.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-base font-bold tracking-widest uppercase text-gray-800 border-b border-black pb-2 mb-4">
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

export default MonochromeTemplate;
