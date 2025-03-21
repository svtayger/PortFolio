import { useEffect, useRef } from "react";
import { getRandomChar } from "@/lib/utils";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Matrix characters
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Initialize drops array
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }
    
    // Draw matrix effect
    const drawMatrix = () => {
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(18, 18, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Draw a random character
        const text = getRandomChar();
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop position when it goes beyond the screen or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };
    
    // Matrix animation loop
    const matrixAnimation = setInterval(drawMatrix, 50);
    
    return () => {
      clearInterval(matrixAnimation);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="matrix-bg absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <canvas ref={canvasRef} className="matrix-rain pointer-events-none opacity-15"></canvas>
    </div>
  );
}
