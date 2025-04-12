
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CollegeConnect',
      description: 'The College ERP system with role-based access.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com',
      // live: 'https://example.com',
    },
    {
      title: 'Outlay - Expense Tracker',
      description: 'Corporate finance management tool with Nodemailer.',
      tech: ['JWT', 'Bcrypt.js', 'React', 'MongoDB'],
      github: 'https://github.com',
      // live: 'https://example.com',
    },
    {
      title: 'DigiScholar',
      description: 'Online scholarship portal with team collaboration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Raj-9747/digiScholar',
      // live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-darkBlue">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group bg-lightNavy hover:bg-lightestNavy relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-teal/40"></div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal transition-colors">
                {project.title}
              </h3>
              
              <p className="text-lightGray mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs text-teal bg-teal/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lightGray hover:text-teal transition-colors"
                >
                  <Github size={20} />
                </a>
                {/* <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lightGray hover:text-teal transition-colors"
                >
                  <ExternalLink size={20} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
