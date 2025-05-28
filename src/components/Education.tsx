import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#00589A' }}>
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Currently pursuing my Bachelor's degree in Computer Science with a strong academic record.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-cyan-100 text-lg">American University of Science and Technology (AUST)</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="font-semibold text-slate-800">Duration</p>
                      <p className="text-slate-600">October 2022 - June 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="font-semibold text-slate-800">Current GPA</p>
                      <p className="text-slate-600">3.75/4.0</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Academic Focus Areas</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Software Engineering & Development</li>
                    <li>• Database Management Systems</li>
                    <li>• Cloud Computing & Architecture</li>
                    <li>• Mobile Application Development</li>
                    <li>• Cryptography & Security</li>
                    <li>• System Design & Analysis</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl p-6 border border-cyan-100">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Academic Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-slate-800">Strong Academic Performance</p>
                    <p className="text-slate-600 text-sm">Maintaining a 3.75/4.0 GPA throughout the program</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-slate-800">Practical Application</p>
                    <p className="text-slate-600 text-sm">Successfully completed multiple real-world projects</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-slate-800">System Design Expertise</p>
                    <p className="text-slate-600 text-sm">Proficient in creating comprehensive system diagrams</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="font-semibold text-slate-800">Multi-Platform Development</p>
                    <p className="text-slate-600 text-sm">Experience across web, mobile, and cloud platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
