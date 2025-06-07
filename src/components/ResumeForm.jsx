
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeForm = ({ resumeData, setResumeData }) => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setResumeData(parsed);
      if (parsed.profileImage) {
        setProfileImage(parsed.profileImage);
      }
    }
  }, [setResumeData]);

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleInputChange = (section, field, value, index = null) => {
  setResumeData(prev => {
    if (index !== null) {
      const updatedSection = prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      );
      return { ...prev, [section]: updatedSection };
    } else {
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      };
    }
  });
};

  const addEntry = (section) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], getEmptyEntry(section)]
    }));
  };

  const removeEntry = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const getEmptyEntry = (section) => {
    switch (section) {
      case 'education':
        return { institution: '', degree: '', year: '', gpa: '' };
      case 'experience':
        return { company: '', position: '', duration: '', description: '' };
      case 'custom':
        return { title: '', text: '' };

      default:
        return {};
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setProfileImage(imageUrl);
        setResumeData(prev => ({
          ...prev,
          profileImage: imageUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-xl">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-purple-200">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <p className="text-sm text-gray-600">Click to upload profile photo(Optional)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={resumeData.personal.fullName}
                  onChange={(e) => handleInputChange('personal', 'fullName', e.target.value)}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={resumeData.personal.email}
                  onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={resumeData.personal.phone}
                  onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={resumeData.personal.address}
                  onChange={(e) => handleInputChange('personal', 'address', e.target.value)}
                  placeholder="123 Main St, City, State"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={resumeData.personal.linkedin}
                  onChange={(e) => handleInputChange('personal', 'linkedin', e.target.value)}
                  placeholder="linkedin.com/in/johndoe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={resumeData.personal.website}
                  onChange={(e) => handleInputChange('personal', 'website', e.target.value)}
                  placeholder="www.johndoe.com"
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="glass border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
            <CardTitle className="text-xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Textarea
              value={resumeData.summary}
              onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
              placeholder="Write a compelling professional summary that highlights your key achievements and career goals..."
              className="min-h-[120px]"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="glass border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle className="text-xl flex items-center justify-between">
              Education
              <Button
                onClick={() => addEntry('education')}
                size="sm"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800">Education {index + 1}</h4>
                  <Button
                    onClick={() => removeEntry('education', index)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Label>Institution</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                      placeholder="University Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                      placeholder="Bachelor of Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Input
                      value={edu.year}
                      onChange={(e) => handleInputChange('education', 'year', e.target.value, index)}
                      placeholder="2020-2024"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>GPA (Optional)</Label>
                    <Input
                      value={edu.gpa}
                      onChange={(e) => handleInputChange('education', 'gpa', e.target.value, index)}
                      placeholder="3.8/4.0"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="text-xl flex items-center justify-between">
              Work Experience
              <Button
                onClick={() => addEntry('experience')}
                size="sm"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800">Experience {index + 1}</h4>
                  <Button
                    onClick={() => removeEntry('experience', index)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                      placeholder="Job Title"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Duration</Label>
                    <Input
                      value={exp.duration}
                      onChange={(e) => handleInputChange('experience', 'duration', e.target.value, index)}
                      placeholder="Jan 2022 - Present"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Description</Label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                      placeholder="Describe your responsibilities and achievements..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="glass border-indigo-200">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="text-xl">Skills</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Textarea
              value={resumeData.skills}
              onChange={(e) => setResumeData(prev => ({ ...prev, skills: e.target.value }))}
              placeholder="List your skills separated by commas (e.g., JavaScript, React, Node.js, Python, SQL)"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Custom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="glass border-pink-200">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg">
            <CardTitle className="text-xl flex items-center justify-between">
              Custom Sections
              <Button
                onClick={() => addEntry('custom')}
                size="sm"
                variant="secondary"
                className="bg-white text-pink-600 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {resumeData.custom.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800">Custom Field {index + 1}</h4>
                  <Button
                    onClick={() => removeEntry('custom', index)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={item.title}
                      onChange={(e) =>
                        handleInputChange('custom', 'title', e.target.value, index)
                      }
                      placeholder="Section Title (e.g., Certifications)"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Text</Label>
                    <Textarea
                      value={item.text}
                      onChange={(e) =>
                        handleInputChange('custom', 'text', e.target.value, index)
                      }
                      placeholder="Enter your content here..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
};

export default ResumeForm;
