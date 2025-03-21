import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window border border-[#00ff00] rounded shadow-[0_0_15px_rgba(0,255,0,0.15)] overflow-hidden ${className}`}>
      <div className="terminal-header bg-[#1a1a1a] border-b border-[#00ff00] py-2 px-3 flex items-center">
        <div className="terminal-controls flex gap-1.5 mr-3">
          <div className="control-dot w-3 h-3 rounded-full bg-red-500"></div>
          <div className="control-dot w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="control-dot w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="terminal-title flex-grow text-center text-xs font-medium text-[#e0e0e0]">{title}</div>
      </div>
      <div className="terminal-content p-4 min-h-[100px] bg-[#121212]">
        {children}
      </div>
    </div>
  );
}
