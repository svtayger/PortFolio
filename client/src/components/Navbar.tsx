import { Link } from "wouter";

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export default function Navbar({ onOpenMobileMenu }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-[#00ff00]/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-[#00ff00] text-xl font-semibold flex items-center">
              <span className="text-[#e0e0e0] mr-1">[</span>SAVITHAR A/L RAVICHENDERAN<span className="text-[#e0e0e0]">@</span>savi<span className="text-[#e0e0e0]">]</span>
              <span className="ml-1 text-[#00ff00] animate-[blink_1s_step-end_infinite]">_</span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-sm">
            <Link href="/">
              <a className="text-[#00ff00] hover:text-[#0cbb52] transition-colors">~/home</a>
            </Link>
            <Link href="/about">
              <a className="text-[#00ff00] hover:text-[#0cbb52] transition-colors">~/about</a>
            </Link>
            <Link href="/projects">
              <a className="text-[#00ff00] hover:text-[#0cbb52] transition-colors">~/projects</a>
            </Link>
            <Link href="/blog">
              <a className="text-[#00ff00] hover:text-[#0cbb52] transition-colors">~/blog</a>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={onOpenMobileMenu}
            className="lg:hidden text-[#00ff00] hover:text-[#0cbb52]"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
