import React from 'react';

const GalleryTemplate = ({ data }) => {
  const {
    profileImage,
    personal = {},
    summary,
    experience = [],
    education = [],
    skills,
    custom = [],
  } = data;

  const {
    fullName = 'Your Name',
    email,
    phone,
    address,
    linkedin,
    website,
  } = personal;

  return (
    <div className="template-gallery min-h-[297mm] bg-white text-gray-800 flex shadow-lg">
      {/* Left Column (Sidebar with Image) */}
      <div className="w-1/3 bg-gray-100 p-8 flex flex-col justify-between">
        <div>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto object-cover mb-6 rounded"
            />
          ) : (
            <div className="w-full h-48 mb-6 flex items-center justify-center bg-gray-300 rounded">
              {/* Simple default avatar placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-800 mb-4 break-words">{fullName}</h1>

          <div className="space-y-2 text-sm text-gray-600">
            {email && <p className="break-all">{email}</p>}
            {phone && <p className="break-all">{phone}</p>}
            {address && <p className="break-all">{address}</p>}
            {linkedin && <p className="break-all">linkedin.com/{linkedin}</p>}
            {website && <p className="break-all">{website}</p>}
          </div>
        </div>

        {skills && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold border-t-2 border-gray-300 pt-4 mt-4">Skills</h2>
            <p className="text-gray-600 text-sm mt-2 whitespace-pre-wrap">{skills}</p>
          </div>
        )}
      </div>

      {/* Right Column (Main Content) */}
      <div className="w-2/3 p-10 overflow-y-auto">
        {summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4">Profile</h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </section>
        )}

        {experience.length > 0 && experience[0].company && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-5 border-l-4 border-gray-200 pl-4">
                <h3 className="font-semibold text-base text-gray-900">{exp.position}</h3>
                <p className="text-gray-700 font-medium mb-1 text-sm">{exp.company}</p>
                <span className="text-gray-500 text-xs mb-2 block">{exp.duration}</span>
                <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && education[0].institution && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 border-l-4 border-gray-200 pl-4">
                <h3 className="font-semibold text-base text-gray-900">{edu.degree}</h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <div className="text-gray-500 text-xs mt-1">
                  <span>{edu.year}</span>
                  {edu.gpa && <span> &bull; GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </section>
        )}

        {custom.length > 0 && (
          <section>
            {custom.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 pb-2 mb-4">
                  {section.title?.trim() || 'Custom Section'}
                </h2>
                <div className="border-l-4 border-gray-200 pl-4">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                    {section.text || section.content || 'No content provided.'}
                  </p>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default GalleryTemplate;
