import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { AchievementIcon } from './Icons';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
       <div className="relative">
        {experienceData.map((job, jobIndex) => (
          <div key={job.company} className="relative pl-0 md:pl-16 mb-12 last:mb-0 section-hidden" style={{ transitionDelay: `${jobIndex * 150}ms` }}>
             {/* Timeline Line & Dot */}
            <div className="hidden md:block absolute top-2.5 left-4 w-0.5 h-full bg-gray/20"></div>
            <div className="hidden md:block absolute top-2.5 left-[calc(1rem-1px)] w-4 h-4 bg-black border-2 border-teal rounded-full"></div>

            <div className="interactive-card p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="text-xl font-bold text-lightest-slate">{job.role} @ <span className="text-teal">{job.company}</span></h3>
                <p className="text-slate text-sm mt-2 sm:mt-0 font-mono">{job.duration}</p>
              </div>
              
              <h4 className="text-md font-semibold text-light-slate mt-4 mb-3">Responsibilities:</h4>
              <ul className="space-y-2 text-slate text-sm leading-relaxed">
                {job.points.map((point, index) => (
                  <li key={index} className="flex items-start transition-all duration-200 origin-left hover:scale-105 hover:text-light-slate">
                    <span className="text-teal mr-3 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {job.achievements.length > 0 && (
                <>
                  <h4 className="text-md font-semibold text-light-slate mt-6 mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.achievements.map((ach, index) => (
                      <div key={index} className="flex items-start bg-black/70 backdrop-blur-sm p-4 rounded-md section-hidden transition-transform duration-300 hover:scale-105" style={{ transitionDelay: `${index * 100}ms` }}>
                         <div className="text-teal mt-1 mr-4 flex-shrink-0"><AchievementIcon/></div>
                        <div>
                          <h5 className="font-bold text-light-slate">{ach.title}</h5>
                          <p className="text-sm text-slate">{ach.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;