// import { ArrowDown } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center relative bg-darkBlue">
//       <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//       <div className="container mx-auto px-4 md:px-6 z-10">
//         <div className="max-w-3xl mx-auto md:mx-0">
//           <p className="text-teal mb-4 font-mono opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             Hi, I'm
//           </p>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
//             Raj Fachara
//           </h1>
//           <h2 className="text-2xl md:text-4xl font-bold mb-6 text-slate opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//             Full-Stack Developer | MERN Stack | Problem Solver
//           </h2>
//           <p className="text-lg text-lightGray mb-8 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
//             Building seamless web experiences with React, Node.js, and more.
//           </p>
//           <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
//             <a href="#projects" className="btn btn-primary">
//               View My Work
//             </a>
//             <a href="#contact" className="btn btn-primary">
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <a href="#about" className="text-teal">
//           <ArrowDown size={24} />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-darkBlue"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Content */}
          <div className="max-w-3xl mx-auto md:mx-0 md:w-1/2">
            <p
              className="text-teal mb-4 font-mono opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Hi, I'm
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Raj Fachara
            </h1>
            <h2
              className="text-2xl md:text-4xl font-bold mb-6 text-slate opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Full-Stack Developer | MERN Stack | Problem Solver
            </h2>
            <p
              className="text-lg text-lightGray mb-8 max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Building seamless web experiences with React, Node.js, and more.
            </p>
            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Personal Photo */}
          <div className="mt-8 md:mt-9 md:w-1/2 flex justify-center">
            <img
              src="./public/1744450992739.JPG"
              alt="Raj Fachara"
              className="rounded-full w-64 h-64 object-cover object-top shadow-lg border-4 border-teal hover:scale-105 hover:rotate-3 hover:translate-y-1 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-teal">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
