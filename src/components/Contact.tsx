
import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-darkBlue">
      <div className="container mx-auto">
        <h2 className="section-title">Let's Build Something Amazing!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-lightGray mb-8 text-lg">
              I'm currently looking for new opportunities to collaborate on exciting projects. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-teal" size={24} />
                <a href="mailto:rajfachara9747@gmail.com" className="text-lightGray hover:text-teal transition-colors">
                  rajfachara9747@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Github className="text-teal" size={24} />
                <a 
                  href="https://github.com/Raj-9747" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightGray hover:text-teal transition-colors"
                >
                  github.com/Raj-9747
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Linkedin className="text-teal" size={24} />
                <a 
                  href="https://www.linkedin.com/in/raj-fachara-1641a3234/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lightGray hover:text-teal transition-colors"
                >
                  linkedin.com/in/rajfachara
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lightGray mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-lightNavy border border-lightestNavy rounded-md p-3 text-lightGray focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lightGray mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-lightNavy border border-lightestNavy rounded-md p-3 text-lightGray focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lightGray mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-lightNavy border border-lightestNavy rounded-md p-3 text-lightGray focus:outline-none focus:ring-2 focus:ring-teal resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary flex items-center justify-center min-w-[150px]"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
