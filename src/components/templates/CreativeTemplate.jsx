import React from 'react';

const CreativeTemplate = ({ data }) => (
  <div className="template-creative min-h-[297mm] bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800">
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
      <div className="flex items-center gap-x-6">
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
          />
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
          <div className="text-purple-100 space-y-1 text-sm">
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></span>
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow-sm text-sm">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></span>
            Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800 text-base">{exp.position}</h3>
                <span className="text-purple-600 font-medium text-xs whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="text-pink-600 font-semibold mb-1 text-sm">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></span>
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-3 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-base">{edu.degree}</h3>
                  <p className="text-pink-600 font-medium text-sm">{edu.institution}</p>
                </div>
                <div className="text-right text-purple-600 text-xs whitespace-nowrap pl-2">
                  <p className="font-medium">{edu.year}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.skills && (
        <div>
          <h2 className="text-2xl font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></span>
            Skills
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-sm">{data.skills}</p>
          </div>
        </div>
      )}
    
    {data.custom && data.custom.length > 0 && (
  <div className="mt-6">
    {data.custom.map((section, index) => (
      <div key={index} className="mb-6 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-purple-600 mb-3 flex items-center">
          <span className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></span>
          {section.title || 'Untitled Section'}
        </h2>
        <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
          {section.text || section.content || 'No content provided.'}
        </p>
      </div>
    ))}
  </div>
)}

    </div>
  </div>
);

export default CreativeTemplate;