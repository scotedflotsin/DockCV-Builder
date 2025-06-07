import React from 'react';

const AscendTemplate = ({ data }) => (
  <div className="template-ascend p-8 min-h-[297mm] bg-white text-gray-800 font-sans">
    <header className="text-center mb-10">
      {/* Profile Image - optional */}
      {data.profileImage && (
      <div className="mx-auto mb-4 w-[160px] aspect-square rounded-full overflow-hidden border-4 border-gray-300">
  <img
    src={data.profileImage}
    alt={`${data.personal.fullName || 'Profile'}'s Profile`}
    className="object-cover object-center w-full h-full"
    loading="lazy"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = 'https://via.placeholder.com/160?text=No+Image';
    }}
  />
</div>

      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
      <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
        {data.personal.email && <p>{data.personal.email}</p>}
        {data.personal.phone && <p>&bull; {data.personal.phone}</p>}
        {data.personal.linkedin && <p>&bull; linkedin.com/{data.personal.linkedin}</p>}
      </div>
    </header>

    {data.summary && (
      <section className="mb-8">
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed text-sm">{data.summary}</p>
      </section>
    )}
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        {data.experience && data.experience.length > 0 && data.experience[0].company && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">Work Experience</h2>
            <div className="relative border-l-2 border-gray-200">
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6 ml-6">
                  <span className="absolute -left-[9px] top-1 flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full ring-4 ring-white"></span>
                  <h3 className="font-semibold text-base text-gray-900">{exp.position}</h3>
                  <p className="text-gray-700 font-medium text-sm">{exp.company}</p>
                  <p className="text-gray-500 text-xs mb-2">{exp.duration}</p>
                  <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="md:col-span-4">
        {data.education && data.education.length > 0 && data.education[0].institution && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-base">{edu.degree}</h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <p className="text-gray-500 text-xs">{edu.year} {edu.gpa && `- ${edu.gpa} GPA`}</p>
              </div>
            ))}
          </section>
        )}

        {data.skills && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">Skills</h2>
            <p className="text-gray-700 text-sm">{data.skills}</p>
          </section>
        )}

        {data.custom && data.custom.length > 0 && (
          <section>
            {data.custom.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">
                  {section.title?.trim() || 'Info'}
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
  </div>
);

export default AscendTemplate;
