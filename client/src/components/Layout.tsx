import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-[#121212] text-[#e0e0e0] font-mono min-h-screen flex flex-col">
      <Navbar 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="py-8 bg-[#1a1a1a] border-t border-[#00ff00]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <p className="text-center text-sm">
              <span className="text-[#00ff00]">$</span> Built with <span className="text-[#00ff00]">❤</span> by John Doe
            </p>
            <p className="text-center text-xs mt-2 text-[#e0e0e0]/60">
              © {new Date().getFullYear()} All rights reserved. Powered by HTML, CSS & JavaScript.
            </p>
            
            <div className="mt-6 flex space-x-6">
              <a href="https://github.com/johndoe" className="text-[#e0e0e0]/60 hover:text-[#00ff00]">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-[#e0e0e0]/60 hover:text-[#00ff00]">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/johndoe" className="text-[#e0e0e0]/60 hover:text-[#00ff00]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#e0e0e0]/60 hover:text-[#00ff00]">
                <i className="fas fa-rss"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
