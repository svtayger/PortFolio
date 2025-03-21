import TerminalWindow from "@/components/TerminalWindow";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
}

// Cybersecurity projects
const securityProjects: Project[] = [
  {
    id: "network_traffic_analyzer",
    title: "Network Traffic Analyzer",
    description: "A Python-based tool for real-time network traffic monitoring and analysis. Features packet inspection and threat detection.",
    technologies: ["Python", "Wireshark", "Network Security"],
    githubUrl: "https://github.com/johndoe/network-analyzer",
    demoUrl: "#"
  },
  {
    id: "vuln_scanner",
    title: "Web Vulnerability Scanner",
    description: "Automated scanner to identify OWASP Top 10 vulnerabilities in web applications. Includes detailed reporting features.",
    technologies: ["JavaScript", "Node.js", "OWASP"],
    githubUrl: "https://github.com/johndoe/vuln-scanner",
    demoUrl: "#"
  },
  {
    id: "ctf_writeups",
    title: "CTF Challenge Writeups",
    description: "Detailed documentation of various Capture The Flag challenges, including methodologies and solution approaches.",
    technologies: ["CTF", "Penetration Testing", "Documentation"],
    githubUrl: "https://github.com/johndoe/ctf-writeups",
    demoUrl: "#"
  }
];

// Development projects
const devProjects: Project[] = [
  {
    id: "secure_messaging_app",
    title: "Secure Messaging App",
    description: "End-to-end encrypted messaging application built with React and Firebase, featuring secure authentication and ephemeral messages.",
    technologies: ["React", "Firebase", "E2E Encryption"],
    githubUrl: "https://github.com/johndoe/secure-messaging",
    demoUrl: "#"
  },
  {
    id: "security_dashboard",
    title: "Security Monitoring Dashboard",
    description: "Real-time dashboard for monitoring system security metrics, with alerts and comprehensive visualization tools.",
    technologies: ["JavaScript", "D3.js", "WebSockets"],
    githubUrl: "https://github.com/johndoe/security-dashboard",
    demoUrl: "#"
  },
  {
    id: "password_manager",
    title: "Secure Password Manager",
    description: "Encrypted password storage solution with zero-knowledge architecture, password strength analysis and breach detection.",
    technologies: ["C++", "Encryption", "Qt Framework"],
    githubUrl: "https://github.com/johndoe/password-manager",
    demoUrl: "#"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
      <TerminalWindow title={project.id}>
        <div className="p-4">
          <div className="h-40 bg-[#2a2a2a]/50 rounded overflow-hidden mb-4 flex items-center justify-center">
            {project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <svg className="w-16 h-16 text-[#00ff00]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            )}
          </div>
          <h3 className="text-lg font-medium text-[#00ff00]">{project.title}</h3>
          <p className="text-sm my-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 my-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-[#2a2a2a] text-xs rounded">{tech}</span>
            ))}
          </div>
          <div className="mt-3 flex justify-between">
            <a href={project.githubUrl} className="text-[#00ff00] hover:text-[#0cbb52] text-sm">
              <i className="fas fa-code-branch mr-1"></i> GitHub
            </a>
            <a href={project.demoUrl} className="text-[#00ff00] hover:text-[#0cbb52] text-sm">
              <i className="fas fa-external-link-alt mr-1"></i> Live Demo
            </a>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="text-[#00ff00]">/</span>projects<span className="text-[#00ff00]">/</span>portfolio<span className="text-[#00ff00]">;</span>
        </h2>
        
        <TerminalWindow title="projects.sh" className="mb-8">
          <div className="p-2 lg:p-6">
            <p className="text-[#00ff00] text-sm mb-6">[root@cybersec ~]$ ls -la ./projects/ | grep "cybersecurity"</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {securityProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </TerminalWindow>
        
        <TerminalWindow title="projects.sh">
          <div className="p-2 lg:p-6">
            <p className="text-[#00ff00] text-sm mb-6">[root@cybersec ~]$ ls -la ./projects/ | grep "development"</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {devProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
