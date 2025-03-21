import { useState } from "react";
import { Link } from "wouter";
import MatrixBackground from "@/components/MatrixBackground";
import TerminalWindow from "@/components/TerminalWindow";
import TypingEffect from "@/components/TypingEffect";

export default function HomePage() {
  const [startSecondTyping, setStartSecondTyping] = useState(false);
  
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Matrix Background */}
      <MatrixBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="terminal@john_doe">
            <div className="p-2 lg:p-4">
              <p className="text-[#00ff00] text-sm lg:text-base mb-4">
                [root@cybersec ~]$ <TypingEffect text="whoami" onComplete={() => setStartSecondTyping(true)} />
              </p>
              
              <div className="mt-6 mb-8 space-y-1 text-sm lg:text-base">
                <p>John Doe</p>
                <p className="text-[#00ff00] font-semibold">Cybersecurity Enthusiast | Ethical Hacker | Developer</p>
              </div>
              
              <div className="space-y-4 my-8">
                <p className="text-sm lg:text-base">I'm dedicated to identifying and mitigating security vulnerabilities, 
                with expertise in penetration testing, network security, and secure application development.</p>
              </div>
              
              <div className="pt-4 border-t border-[#00ff00]/30">
                <p className="text-[#00ff00] text-sm lg:text-base">
                  [root@cybersec ~]$ {startSecondTyping && <TypingEffect text="explore --profile" />}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Link href="/about">
                    <a className="px-4 py-2 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#121212] transition-colors">
                      ./about.sh
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a className="px-4 py-2 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#121212] transition-colors">
                      ./projects.sh
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="px-4 py-2 border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#121212] transition-colors">
                      ./contact.sh
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
