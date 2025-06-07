import React from 'react';

const UrbanChic = ({ data }) => (
  <div className="template-urbanchic p-8 min-h-[297mm] bg-gray-900 text-white font-sans">
    <div className="grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="col-span-1 border-r-2 border-green-400 pr-8">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 ring-4 ring-green-400"
          />
        )}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-400 break-words">{data.personal.fullName || 'Your Name'}</h1>
        </div>
        <div className="space-y-4 text-sm text-gray-300">
          <h2 className="text-lg font-semibold text-white border-b border-green-400 pb-1 mb-3">Contact</h2>
          {data.personal.email && <p className="break-all">Email: {data.personal.email}</p>}
          {data.personal.phone && <p className="break-all">Phone: {data.personal.phone}</p>}
          {data.personal.address && <p className="break-all">Address: {data.personal.address}</p>}
          {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
          {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
        </div>
        {data.skills && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-white border-b border-green-400 pb-1 mb-3">Skills</h2>
            <p className="text-gray-300 text-sm whitespace-pre-wrap">{data.skills}</p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="col-span-2">
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-3">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-300 leading-relaxed text-sm">{data.summary}</p>
          </div>
        )}

        {data.experience && data.experience.length > 0 && data.experience[0].company && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">WORK EXPERIENCE</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4 relative pl-5">
                <div className="absolute left-0 top-1.5 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-white text-base">{exp.position}</h3>
                  <span className="text-gray-400 text-xs whitespace-nowrap pl-2">{exp.duration}</span>
                </div>
                <p className="text-green-300 font-medium mb-1 text-sm">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.education && data.education.length > 0 && data.education[0].institution && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">EDUCATION</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3 relative pl-5">
                 <div className="absolute left-0 top-1.5 w-2 h-2 bg-green-400 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-white text-base">{edu.degree}</h3>
                  <p className="text-green-300 text-sm">{edu.institution}</p>
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  <p>{edu.year} {edu.gpa && ` | GPA: ${edu.gpa}`}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {data.custom && data.custom.length > 0 && (
          <div>
            {data.custom.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-2xl font-bold text-green-400 mb-3">
                  {section.title?.trim().toUpperCase() || 'CUSTOM SECTION'}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {section.text || section.content || 'No content provided.'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default UrbanChic;
