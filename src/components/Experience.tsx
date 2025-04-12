
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Medkart Pharmacy',
      period: 'Jan 2025 - Present',
      role: 'Software Engineer Intern',
      description: [
        'Working on software development & process automation.',
        'Optimizing internal tools for efficiency.',
      ],
    },
    {
      company: 'Trident Infoway',
      period: 'May 2024 - June 2024',
      role: 'Software Engineer Intern',
      description: [
        'Full-stack development with React & Node.js.',
        'Implemented JWT authentication.',
      ],
    },
    {
      company: 'Internauts InfoTech',
      period: 'May 2023 - June 2023',
      role: 'Software Engineer Intern',
      description: [
        'Enhanced UI/UX, reduced input errors by 15%.',
        'JWT security implementation.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-darkNavy">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="timeline-dot"></div>
              <div className="mb-1">
                <span className="text-teal font-mono">{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <h4 className="text-lg font-medium text-lightestSlate mb-3">{exp.company}</h4>
              <ul className="list-disc list-inside text-lightGray space-y-2 ml-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
