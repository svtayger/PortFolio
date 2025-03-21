import TerminalWindow from "@/components/TerminalWindow";

export default function AboutPage() {
  return (
    <section id="about" className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="text-[#00ff00]">/</span>about<span className="text-[#00ff00]">/</span>me<span className="text-[#00ff00]">;</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Info */}
          <TerminalWindow title="profile.json" className="h-full">
            <div className="p-2 lg:p-6">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#2a2a2a] rounded-full overflow-hidden border-2 border-[#00ff00]/50">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-[#00ff00]/60">
                    <path 
                      fill="currentColor" 
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00ff00]">John Doe</h3>
                  <p className="text-sm text-[#e0e0e0]/80 mt-1">Computer Science Student</p>
                  <p className="text-sm text-[#e0e0e0]/80">Cybersecurity Specialization</p>
                  
                  <div className="mt-4 flex space-x-3">
                    <a href="https://github.com/johndoe" className="text-[#00ff00] hover:text-[#0cbb52]">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/johndoe" className="text-[#00ff00] hover:text-[#0cbb52]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/johndoe" className="text-[#00ff00] hover:text-[#0cbb52]">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="mb-4">I'm a Computer Science student specializing in cybersecurity, passionate about ethical hacking and secure systems development. Currently building my expertise through hands-on projects, CTF challenges, and continuous learning.</p>
                
                <p>My homelab setup includes virtualized environments for security testing, with tools like Wireshark, Metasploit, and custom-built security solutions to practice and enhance my skills.</p>
              </div>
            </div>
          </TerminalWindow>
          
          {/* Skills & Certifications */}
          <div className="flex flex-col gap-6">
            {/* Certifications */}
            <TerminalWindow title="certifications.sh">
              <div className="p-2 lg:p-6">
                <p className="text-[#00ff00] text-sm mb-4">[root@cybersec ~]$ ls -la ./certifications/</p>
                
                <ul className="space-y-3">
                  <li className="pl-4 border-l-2 border-[#00ff00]">
                    <h4 className="font-medium">Cisco Introduction to Cybersecurity</h4>
                    <p className="text-sm text-[#e0e0e0]/70">Completed: June 2022</p>
                  </li>
                  <li className="pl-4 border-l-2 border-[#00ff00]">
                    <h4 className="font-medium">Palo Alto Fundamentals of Cloud Security</h4>
                    <p className="text-sm text-[#e0e0e0]/70">Completed: January 2023</p>
                  </li>
                  <li className="pl-4 border-l-2 border-[#00ff00]">
                    <h4 className="font-medium">CompTIA Security+ (In Progress)</h4>
                    <p className="text-sm text-[#e0e0e0]/70">Expected: December 2023</p>
                  </li>
                </ul>
              </div>
            </TerminalWindow>
            
            {/* Skills */}
            <TerminalWindow title="skills.log" className="flex-1">
              <div className="p-2 lg:p-6">
                <p className="text-[#00ff00] text-sm mb-4">[root@cybersec ~]$ cat ./skills.log</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <h4 className="text-[#00ff00] mb-2">Languages</h4>
                    <ul className="space-y-1 text-sm">
                      <li>C/C++</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>Bash</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#00ff00] mb-2">Technologies</h4>
                    <ul className="space-y-1 text-sm">
                      <li>React</li>
                      <li>Node.js</li>
                      <li>Firebase</li>
                      <li>Linux</li>
                      <li>Docker</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#00ff00] mb-2">Security</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Penetration Testing</li>
                      <li>Network Analysis</li>
                      <li>Wireshark</li>
                      <li>Metasploit</li>
                      <li>Burp Suite</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#00ff00] mb-2">Web</h4>
                    <ul className="space-y-1 text-sm">
                      <li>HTML/CSS</li>
                      <li>Responsive Design</li>
                      <li>REST APIs</li>
                      <li>OWASP Top 10</li>
                      <li>Authentication Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
