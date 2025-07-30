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

const securityProjects: Project[] = [
  {
    id: "kitahack-2025-food-aid",
    title: "KITAHACK 2025 - Food Aid Coordination App",
    description: "A hackathon project to optimize and automate food aid distribution in Malaysia using mapping, coordination, and AI-based analytics. Developed during the KITAHACK 2025 event.",
    technologies: ["Flutter", "Google Maps API", "AI", "Hackathon"],
    githubUrl: "https://github.com/svtayger/KITAHACK-2025-Food-Aid-Coordination-App",
    demoUrl: "python model.py for reference"
  }
];

const devProjects: Project[] = [
  {
    id: "book-portal",
    title: "Book Portal - Secondhand Book Selling Platform",
    description: "A React + Firebase application that connects buyers and sellers of secondhand books. Users can browse, list, and purchase books easily.",
    technologies: ["React", "Firebase", "Web App"],
    githubUrl: "https://github.com", // Add real GitHub repo if you have one
    demoUrl: "https://book-portal-7dxdjmsfb-svtaygers-projects.vercel.app/"
  },
  {
    id: "leave-application-system",
    title: "Leave Management System",
    description: "A simple leave application system built using React and integrated with MSSQL. Designed to handle employee leave requests and approvals.",
    technologies: ["React", "MSSQL", "Node.js"],
    githubUrl: "https://github.com", // Add real GitHub repo if you have one
    demoUrl: "https://leave-application-system-theta.vercel.app/"
  },
  {
    id: "kwazam-chess",
    title: "Kwazam Chess",
    description: "A fully functional chess game built in Java. Includes game logic, board rendering, and rules enforcement for standard chess.",
    technologies: ["Java", "OOP", "Desktop App"],
    githubUrl: "https://github.com/svtayger/Kwazan-Chess",
    demoUrl: "#" // Add live demo if available
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
