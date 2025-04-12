
const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'C++', level: 70 },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Laravel', level: 65 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-darkNavy">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mt-12">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-white">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-lightGray">{skill.name}</span>
                      <span className="text-teal">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
