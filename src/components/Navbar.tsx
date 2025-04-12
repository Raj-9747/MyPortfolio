
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkNavy/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-teal font-poppins text-2xl font-bold">
            RF
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Raj-9747" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-teal transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/raj-fachara-1641a3234/" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-teal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rajfachara9747@gmail.com" className="text-lightGray hover:text-teal transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-lightGray hover:text-teal focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-darkNavy/95 z-50 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="nav-link text-xl py-4"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center space-x-6 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-teal transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lightGray hover:text-teal transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rajfachara@example.com" className="text-lightGray hover:text-teal transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
