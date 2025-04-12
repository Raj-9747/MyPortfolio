
import React from 'react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'PHP/Laravel'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
  ];

  return (
    <section id="about" className="section-padding bg-darkBlue">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2">
            <p className="text-lightGray text-lg mb-6">
              I'm a passionate software engineer with experience in full-stack development, 
              currently interning at Medkart Pharmacy. I specialize in building scalable web 
              applications using modern technologies like React, Node.js, and MongoDB.
            </p>
            <p className="text-lightGray text-lg mb-6">
              My approach combines technical expertise with creative problem-solving to deliver 
              intuitive and efficient solutions. I'm continuously learning and adapting to new 
              technologies to stay at the forefront of web development.
            </p>
            <p className="text-lightGray text-lg">
              When I'm not coding, you can find me exploring new tech, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="bg-lightNavy rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-teal font-medium mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-darkBlue px-3 py-1 rounded-full text-sm text-lightGray">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
