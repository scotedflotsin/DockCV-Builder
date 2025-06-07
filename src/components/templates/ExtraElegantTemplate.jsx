import React from 'react';

// Simple SVG Icons for the template
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const AddressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const ExtraElegantTemplate = ({ data }) => (
  <div className="template-creative min-h-[297mm] bg-white text-gray-800 flex shadow-lg">
    {/* Left Column (Sidebar) */}
    <div className="w-1/3 bg-teal-700 text-white p-8">
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-teal-500"
        />
      )}
      
      <div className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-teal-500 pb-2 mb-4">Contact</h2>
        <div className="space-y-3 text-sm">
          {data.personal.email && <p className="break-all"><MailIcon />{data.personal.email}</p>}
          {data.personal.phone && <p className="break-all"><PhoneIcon />{data.personal.phone}</p>}
          {data.personal.address && <p className="break-all"><AddressIcon />{data.personal.address}</p>}
          {data.personal.linkedin && <p className="break-all">LinkedIn: {data.personal.linkedin}</p>}
          {data.personal.website && <p className="break-all">Website: {data.personal.website}</p>}
        </div>
      </div>
      
      {data.skills && (
        <div className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-teal-500 pb-2 mb-4">Skills</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{data.skills}</p>
        </div>
      )}
    </div>

    {/* Right Column (Main Content) */}
    <div className="w-2/3 p-8">
      <div className="mb-8">
        <h1 className="text-5xl font-extrabold text-teal-800 mb-2 break-words">{data.personal.fullName || 'Your Name'}</h1>
        <p className="text-gray-600 text-lg">{data.personal.title || 'Professional Title'}</p>
      </div>
      
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2 mb-4">Profile</h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </div>
      )}

      {data.experience && data.experience.length > 0 && data.experience[0].company && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2 mb-4">Work Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base text-gray-800">{exp.position}</h3>
                <span className="text-gray-600 text-xs whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <p className="text-teal-700 font-semibold mb-1 text-sm">{exp.company}</p>
              <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education && data.education.length > 0 && data.education[0].institution && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2 mb-4">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-base text-gray-800">{edu.degree}</h3>
                  <p className="text-teal-700 text-sm">{edu.institution}</p>
                </div>
                <div className="text-right text-gray-600 text-xs whitespace-nowrap pl-2">
                  <p>{edu.year}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {data.custom && data.custom.length > 0 && (
        <div>
          {data.custom.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-200 pb-2 mb-4">
                {section.title?.trim() || 'Custom Section'}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                {section.text || section.content || 'No content provided.'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default ExtraElegantTemplate;