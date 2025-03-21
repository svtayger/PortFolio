import { useEffect, useRef, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingEffect({ 
  text,
  speed = 150,
  className = "",
  onComplete
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const index = useRef(0);
  
  useEffect(() => {
    if (index.current < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index.current));
        index.current += 1;
      }, speed);
      
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, text, speed, isComplete, onComplete]);
  
  return (
    <span className={`${className} ${isComplete ? "after:animate-[blink_1s_step-end_infinite]" : ""}`}>
      {displayText}
      {!isComplete && 
        <span className="animate-[blink_1s_step-end_infinite]">|</span>
      }
    </span>
  );
}
