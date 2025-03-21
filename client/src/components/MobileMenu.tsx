import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div 
      className={`fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-[#00ff00] hover:text-[#0cbb52]"
      >
        <i className="fas fa-times text-2xl"></i>
      </button>
      
      <nav className="flex flex-col items-center space-y-8 text-xl">
        <Link href="/">
          <a 
            className="text-[#00ff00] hover:text-[#0cbb52] transition-colors"
            onClick={onClose}
          >
            ~/home
          </a>
        </Link>
        
        <Link href="/about">
          <a 
            className="text-[#00ff00] hover:text-[#0cbb52] transition-colors"
            onClick={onClose}
          >
            ~/about
          </a>
        </Link>
        
        <Link href="/projects">
          <a 
            className="text-[#00ff00] hover:text-[#0cbb52] transition-colors"
            onClick={onClose}
          >
            ~/projects
          </a>
        </Link>
        
        <Link href="/blog">
          <a 
            className="text-[#00ff00] hover:text-[#0cbb52] transition-colors"
            onClick={onClose}
          >
            ~/blog
          </a>
        </Link>
        
        <Link href="/contact">
          <a 
            className="text-[#00ff00] hover:text-[#0cbb52] transition-colors"
            onClick={onClose}
          >
            ~/contact
          </a>
        </Link>
      </nav>
    </div>
  );
}
