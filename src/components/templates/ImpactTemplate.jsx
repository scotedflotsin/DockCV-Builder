import React from 'react';

const ImpactTemplate = ({ data }) => {
  const {
    personal = {},
    summary,
    education = [],
    skills,
    experience = [],
    custom = [],
    profileImage,  // <- moved here to match ModernTemplate
  } = data || {};

  const {
    fullName = 'Your Name',
    email,
    phone,
    linkedin,
    website,
  } = personal;

  return (
    <div className="template-impact p-8 min-h-[297mm] bg-white text-gray-900 font-sans">
      <div className="relative text-center mb-8 pb-8 border-b-4 border-red-600">
        {/* Profile picture */}
        {profileImage && (
          <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-red-600">
            <img
              src={profileImage}
              alt={`${fullName}'s Profile`}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/128?text=No+Image';
              }}
            />
          </div>
        )}

        <h1 className="text-6xl font-extrabold tracking-tighter uppercase mb-2 break-words">
          {fullName}
        </h1>

        <div className="flex justify-center flex-wrap gap-x-4 text-sm text-gray-600">
          {email && <p>{email}</p>}
          {phone && <p>{phone}</p>}
          {linkedin && <p>linkedin.com/{linkedin}</p>}
          {website && <p>{website}</p>}
        </div>
      </div>

      {summary && (
        <section className="mb-6">
          <p className="text-center text-gray-700 leading-relaxed text-base italic">
            {summary}
          </p>
        </section>
      )}

      <div className="mt-8 grid grid-cols-5 gap-8">
        {/* Left Sidebar */}
        <div className="col-span-2 space-y-8">
          {education.length > 0 && education[0].institution && (
            <section>
              <h2 className="text-red-600 text-xl font-bold uppercase tracking-wider mb-3">
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <p className="text-gray-800 text-sm">{edu.institution}</p>
                  <p className="text-gray-600 text-xs">
                    {edu.year} {edu.gpa && `| GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </section>
          )}

          {skills && (
            <section>
              <h2 className="text-red-600 text-xl font-bold uppercase tracking-wider mb-3">
                Skills
              </h2>
              <p className="text-gray-700 text-sm">{skills}</p>
            </section>
          )}

          {custom
            .filter((section) => section.placement === 'sidebar')
            .map((section, index) => (
              <section key={index}>
                <h2 className="text-red-600 text-xl font-bold uppercase tracking-wider mb-3">
                  {section.title?.trim() || 'Custom Section'}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                  {section.text || section.content || 'No content provided.'}
                </p>
              </section>
            ))}
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          {experience.length > 0 && experience[0].company && (
            <section>
              <h2 className="text-red-600 text-xl font-bold uppercase tracking-wider mb-4">
                Experience
              </h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <span className="text-gray-600 text-xs font-medium whitespace-nowrap pl-2">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-800 font-semibold mb-2 text-base">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </section>
          )}

          {custom
            .filter((section) => !section.placement)
            .map((section, index) => (
              <section key={index} className="mt-8">
                <h2 className="text-red-600 text-xl font-bold uppercase tracking-wider mb-4">
                  {section.title?.trim() || 'Custom Section'}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                  {section.text || section.content || 'No content provided.'}
                </p>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactTemplate;
