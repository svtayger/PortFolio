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
    id: "xss-vulnerabilities",
    date: "2023-10-15",
    title: "Understanding XSS Vulnerabilities",
    description: "A comprehensive guide to Cross-Site Scripting vulnerabilities, with practical examples and prevention techniques for web developers.",
    tags: ["Web Security", "XSS", "Tutorial"],
    url: "#"
  },
  {
    id: "secure-home-network",
    date: "2023-09-28",
    title: "Setting Up a Secure Home Network",
    description: "Best practices for configuring your home network with security in mind, including router hardening, IoT device isolation, and VPN setup.",
    tags: ["Network Security", "Home Lab", "How-to"],
    url: "#"
  },
  {
    id: "defcon-experience",
    date: "2023-09-10",
    title: "My Experience at DefCon 2023",
    description: "A personal account of attending DefCon, including notable talks, workshops, and insights from the cybersecurity community.",
    tags: ["Conference", "DefCon", "Experience"],
    url: "#"
  },
  {
    id: "owasp-top-10",
    date: "2023-08-22",
    title: "Breaking Down the OWASP Top 10",
    description: "An in-depth analysis of the latest OWASP Top 10 web application security risks, with real-world examples and mitigation strategies.",
    tags: ["OWASP", "Web Security", "Best Practices"],
    url: "#"
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
                  <a href={post.url} className="inline-block mt-4 text-[#00ff00] hover:text-[#0cbb52] text-sm">Read More →</a>
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
