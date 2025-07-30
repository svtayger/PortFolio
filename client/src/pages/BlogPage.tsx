import TerminalWindow from "@/components/TerminalWindow";

interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "secops-internship-day-one",
    date: "2025-07-28",
    title: "Day One as SecOps Intern at Genting Malaysia",
    description: `My first day at Genting Malaysia Berhad as a Security Operations (SecOps) intern involved getting familiar with the tools and environment used by the team. I learned about various detection and vulnerability management tools, including VDR and firewall systems. Although access was delayed due to pending account registration, I began planning an automated reporting workflow using PowerBI to streamline scheduled security reporting tasks. This experience gave me a clear understanding of my responsibilities and the SecOps workflow.`,
    tags: ["Internship", "SecOps", "PowerBI", "Detection Tools"],
    url: "#"
  },
  {
    id: "blackberry-ccoe-ctf",
    date: "2025-05-08",
    title: "BlackBerry CCOE CTF – Top 10 Finish",
    description: `I competed in the BlackBerry CCOE Anniversary Capture the Flag (CTF) competition held at the Centre of Excellence, Cyberjaya. Out of 17 teams, my team whiteberry secured the 10th position. I personally completed all the OSINT (Open-Source Intelligence) challenges, which had the highest point weightage, significantly boosting our score. The event sharpened my investigative and analytical skills while reinforcing the importance of information gathering in cyber operations.`,
    tags: ["CTF", "OSINT", "Cybersecurity Competition", "BlackBerry"],
    url: "#"
  },
  {
    id: "bsides-ctf-2025",
    date: "2025-04-21",
    title: "BSides CTF 2025 – Top 11% Globally",
    description: `Participated in the BSides CTF 2025 and my team whiteberry ranked 47th out of 435 teams worldwide. This international cybersecurity competition tested skills across multiple domains including web exploitation, reverse engineering, cryptography, and forensics. It was an enriching experience that improved my technical depth and problem-solving under pressure. The event helped me grow as a cybersecurity enthusiast and network with global talent.`,
    tags: ["CTF", "BSides", "Cybersecurity", "Hacking"],
    url: "https://ctftime.org/event/2721"
  }
];



export default function BlogPage() {
  return (
    <section id="blog" className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="text-[#00ff00]">/</span>blog<span className="text-[#00ff00]">/</span>articles<span className="text-[#00ff00]">;</span>
        </h2>
        
        <TerminalWindow title="cat latest_articles.md">
          <div className="p-2 lg:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="border border-[#00ff00]/30 rounded p-5 hover:border-[#00ff00] transition-colors">
                  <span className="text-xs text-[#e0e0e0]/60">{post.date}</span>
                  <h3 className="text-xl font-medium text-[#00ff00] mt-2">{post.title}</h3>
                  <p className="mt-3 text-sm">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-[#2a2a2a] text-xs rounded">{tag}</span>
                    ))}
                  </div>
                  <a href={post.url} className="inline-block mt-4 text-[#00ff00] hover:text-[#0cbb52] text-sm"></a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a href="#" className="px-6 py-3 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#121212] transition-colors inline-block">
                View All Articles
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
