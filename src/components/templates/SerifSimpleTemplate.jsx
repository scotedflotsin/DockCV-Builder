import React from 'react';

const SerifSimpleTemplate = ({ data }) => (
  <div className="template-serif-simple p-12 min-h-[297mm] bg-white text-gray-800 font-serif">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
      .template-serif-simple { font-family: 'Lora', serif; }
    `}</style>
    
    <header className="mb-12 flex justify-between items-start">
      {/* Left side: Name and contact */}
      <div className="max-w-[70%]">
        <h1 className="text-4xl font-semibold mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
        <hr className="w-1/4 border-t-2 border-gray-300 my-4"/>
        <div className="text-sm text-gray-600 space-y-1">
            {data.personal.email && <p>{data.personal.email}</p>}
            {data.personal.phone && <p>{data.personal.phone}</p>}
            {data.personal.address && <p>{data.personal.address}</p>}
            {data.personal.linkedin && <p>linkedin.com/{data.personal.linkedin}</p>}
        </div>
      </div>

      {/* Right side: Optional Profile Picture */}
      {data.profileImage && (
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300 flex-shrink-0">
          <img
            src={data.profileImage}
            alt={`${data.personal.fullName || 'Profile'}'s Profile`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/112?text=No+Image';
            }}
          />
        </div>
      )}
    </header>

    <main className="space-y-10">
      {data.summary && (
        <section>
          <h2 className="text-xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 leading-loose text-sm">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-base">{exp.position}</h3>
                <span className="text-gray-500 text-xs italic whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="italic text-gray-600 mb-2 text-sm">{exp.company}</p>
              <p className="text-gray-700 leading-loose text-sm">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base">{edu.degree}</h3>
                  <p className="italic text-gray-600 text-sm">{edu.institution}</p>
                </div>
                <div className="text-right text-gray-500 text-xs italic whitespace-nowrap pl-2">
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
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <p className="text-gray-700 leading-loose text-sm">{data.skills}</p>
        </section>
      )}

      {data.custom && data.custom.length > 0 && (
        <section>
          {data.custom.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-3">
                {section.title?.trim() || 'Custom Section'}
              </h2>
              <p className="text-gray-700 text-sm leading-loose whitespace-pre-wrap">
                {section.text || section.content || 'No content provided.'}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  </div>
);

export default SerifSimpleTemplate;
