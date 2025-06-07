import React from 'react';

const BoldTemplate = ({ data }) => (
  <div className="template-bold min-h-[297mm] bg-black text-white">
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-8">
      <div className="flex items-center gap-x-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-black shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-black mb-2 break-words">{data.personal.fullName || 'YOUR NAME'}</h1>
          <div className="text-black font-bold space-y-1 text-sm">
            {data.personal.email && <p className="break-all">{data.personal.email}</p>}
            {data.personal.phone && <p className="break-all">{data.personal.phone}</p>}
            {data.personal.address && <p className="break-all">{data.personal.address}</p>}
            {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
            {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
          </div>
        </div>
      </div>
    </div>

    <div className="p-8">
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase">About</h2>
          <p className="text-gray-300 leading-relaxed text-base">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-8">
          <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6 border-l-4 border-yellow-400 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg">{exp.position}</h3>
                <span className="text-yellow-400 font-bold text-xs whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="text-orange-400 font-bold mb-1 text-base">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-8">
          <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 border-l-4 border-yellow-400 pl-4">
              <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
              <p className="text-orange-400 font-bold text-base">{edu.institution}</p>
              <div className="text-gray-300 text-sm">
                <p>{edu.year}</p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {data.skills && (
        <div className="mb-8">
          <h2 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Skills</h2>
          <p className="text-gray-300 text-base">{data.skills}</p>
        </div>
      )}

      {data.custom && data.custom.length > 0 && (
        <div className="mt-8">
          {data.custom.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-black text-yellow-400 mb-2 uppercase">{section.title || 'Untitled Section'}</h2>
              <p className="text-gray-300 text-sm whitespace-pre-wrap">
                {section.text || 'No content provided.'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default BoldTemplate;
