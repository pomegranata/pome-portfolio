import React from 'react';
import { Github, Linkedin, Mail, Database, Brain, Server, Terminal, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-[#3674B5]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Data Engineering, AI & ML
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Transforming Data into Intelligent Solutions
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="#contact" className="bg-white text-[#3674B5] px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Get in Touch
            </a>
            <a href="#projects" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
              View Projects
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/pomegranata" className="text-white hover:text-gray-200 transition">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/immaretu/" className="text-white hover:text-gray-200 transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:imeldamaretta346@gmail.com" className="text-white hover:text-gray-200 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-[#578FCA]" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition">
              <Database className="w-12 h-12 text-[#578FCA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600">ETL Pipelines, Data Annotation, Data Cleaning, Roboflow, DVC</p>
            </div>
            <div className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition">
              <Brain className="w-12 h-12 text-[#578FCA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Python, TensorFlow, PyTorch, Keras, Scikit-learn</p>
            </div>
            <div className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition">
              <Server className="w-12 h-12 text-[#578FCA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-600"> Docker, Kubernetes, Hugging Face</p>
            </div>
            <div className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-lg hover:shadow-xl transition">
              <Terminal className="w-12 h-12 text-[#578FCA] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-600">Python, Java, SQL, Pandas, NumPy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="py-20 bg-[#A1E3F9]" id="projects">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Malishka - GPT2 Conversational AI Chatbot",
          description: "Developed a GPT-2-based chatbot with advanced preprocessing and dataset versioning using DVC",
          image: "https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://huggingface.co/paripi/Malishka"
        },
        {
          title: "LLA-TEA",
          description: "Developed a WordPress website for UMKM 'LLA-TEA' and deployed it on Vercel for seamless performance.",
          image: "https://images.unsplash.com/photo-1645535369556-eed4c5d3500f?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://lla-tea.vercel.app/"
        },
        {
          title: "FLORYS: Plant Health Detection",
          description: "Built and fine-tuned a YOLOv8 model for plant disease detection with optimized model architecture.",
          image: "https://plus.unsplash.com/premium_photo-1676068244682-38d8b44d2e22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://github.com/FLORYS-App"
        },
        {
          title: "Animagine XL 4.0",
          description: "Managed and filtered large-scale anime datasets for AI model training.",
          image: "https://cdn-uploads.huggingface.co/production/uploads/6365c8dbf31ef76df4042821/_tsxjwf3VPu94xh9wJSbo.png",
          link: "https://huggingface.co/cagliostrolab/animagine-xl-4.0"
        }
      ].map((project, index) => (
        <a 
          href={project.link} 
          key={index} 
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
      
{/* Contact Section */}
<section className="py-20 bg-[#C9E6F0]" id="contact">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Mail size={20} className="text-blue-600" />
                <span>imeldamaretta346@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin size={20} className="text-blue-600" />
                <span>Imelda Maretta Putri</span>
              </p>
              <p className="flex items-center gap-2">
                <Github size={20} className="text-blue-600" />
                <span>Pomegranata</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-600">Available for remote work worldwide</p>
            <p className="text-gray-600">Based in Kediri Regency, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Imelda Maretta Putri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;