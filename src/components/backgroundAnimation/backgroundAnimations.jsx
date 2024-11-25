function backgroundAnimations() {
    const canvas = document.getElementById("lines-canvas");
    const ctx = canvas.getContext("2d");
    const lines = [];
    const maxLines = 50;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    function createLine() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      };
    }
  
    for (let i = 0; i < maxLines; i++) {
      lines.push(createLine());
    }
  
    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
  
        for (let j = i + 1; j < lines.length; j++) {
          const otherLine = lines[j];
          const dist = Math.sqrt(
            (line.x - otherLine.x) ** 2 + (line.y - otherLine.y) ** 2
          );
  
          if (dist < 150) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(otherLine.x, otherLine.y);
            ctx.stroke();
          }
        }
      }
  
      for (const line of lines) {
        line.x += line.vx;
        line.y += line.vy;
  
        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1;
      }
  
      requestAnimationFrame(drawLines);
    }
  
    drawLines();
  }

export default backgroundAnimations;