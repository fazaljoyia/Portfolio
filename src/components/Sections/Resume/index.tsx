import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import Github from './Github';
import ResumeSection from './ResumeSection';
import Techstack from './TechStack';
import TimelineItem from './TimelineItem';
import Tools from './Tools';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-black-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            style={{marginTop: '40px', display: 'flex', flexWrap: 'wrap'}}>
            <Techstack />
          </div>
        </ResumeSection>
        <ResumeSection title="Tools">
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            style={{marginTop: '40px', display: 'flex', flexWrap: 'wrap'}}>
            <Tools />
          </div>
        </ResumeSection>
        <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-max">
              <h2 className="text-xl font-bold uppercase text-neutral-800">
                <span style={{color: 'white'}}>Days I</span> Code
              </h2>
              {/* <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" /> */}
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:col-span-3">
            <Github />
          </div>
        </div>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
