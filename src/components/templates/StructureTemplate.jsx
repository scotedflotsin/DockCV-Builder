import React from 'react';

const StructureTemplate = ({ data }) => (
  <div className="template-structure p-8 min-h-[297mm] bg-gray-50 text-gray-800 font-sans">
    <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-4">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border-2 border-cyan-500"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 border-b-4 border-cyan-500 pb-4 mb-1 break-words">
            {data.personal.fullName || 'Your Name'}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 pt-2">
            {data.personal.email && <p><strong>Email:</strong> {data.personal.email}</p>}
            {data.personal.phone && <p><strong>Phone:</strong> {data.personal.phone}</p>}
            {data.personal.linkedin && <p><strong>LinkedIn:</strong> {data.personal.linkedin}</p>}
            {data.personal.website && <p><strong>Website:</strong> {data.personal.website}</p>}
          </div>
        </div>
      </div>
    </header>

    <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        {data.summary && (
          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-600 mb-2">Objective</h2>
            <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && data.experience[0].company && (
          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-600 mb-3">Work History</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="grid grid-cols-4">
                  <div className="col-span-1">
                    <p className="text-xs font-semibold text-gray-600">{exp.duration}</p>
                  </div>
                  <div className="col-span-3">
                    <h3 className="font-semibold text-base">{exp.position}</h3>
                    <p className="text-gray-700 font-medium text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {data.custom && data.custom.length > 0 && (
          <section>
            {data.custom.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-600 mb-2">
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

      <div className="md:col-span-1 space-y-6">
        {data.education && data.education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-600 mb-2">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold text-base">{edu.degree}</h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-xs">
                  {edu.year} {edu.gpa && `- ${edu.gpa} GPA`}
                </p>
              </div>
            ))}
          </section>
        )}

        {data.skills && (
          <section>
            <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-600 mb-2">Skills</h2>
            <p className="text-gray-700 text-sm">{data.skills}</p>
          </section>
        )}
      </div>
    </main>
  </div>
);

export default StructureTemplate;
