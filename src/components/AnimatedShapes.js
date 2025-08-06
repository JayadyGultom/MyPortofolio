import React, { useEffect, useRef } from 'react';

const SHAPES_COUNT = 18;
const SHAPE_SIZE = Array.from({length: SHAPES_COUNT}, (_,i) => 60 + (i%6)*15 + Math.floor(Math.random()*20));
const SHAPE_OPACITY = 0.10;
const REPULSE_RADIUS = 180;
const REPULSE_FORCE = 3.2;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const AnimatedShapes = () => {
  const shapesRef = useRef([]);
  const animData = useRef(
    Array.from({ length: SHAPES_COUNT }).map((_, i) => ({
      x: getRandom(0, window.innerWidth - SHAPE_SIZE[i]),
      y: getRandom(0, window.innerHeight - SHAPE_SIZE[i]),
      dx: getRandom(-0.45, 0.45),
      dy: getRandom(-0.35, 0.35),
      scale: getRandom(0.8, 1.2),
      dScale: getRandom(-0.003, 0.003)
    }))
  );
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animate = () => {
      animData.current.forEach((data, i) => {
        // Repulse effect
        const cx = data.x + SHAPE_SIZE[i] / 2;
        const cy = data.y + SHAPE_SIZE[i] / 2;
        const dx = mouse.current.x - cx;
        const dy = mouse.current.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPULSE_RADIUS) {
          // Dorong menjauh dari kursor
          const angle = Math.atan2(dy, dx);
          const force = (REPULSE_RADIUS - dist) / REPULSE_RADIUS * REPULSE_FORCE;
          data.x -= Math.cos(angle) * force;
          data.y -= Math.sin(angle) * force;
        }
        // Update posisi normal
        data.x += data.dx;
        data.y += data.dy;
        // Bounce di tepi layar
        if (data.x < 0 || data.x > window.innerWidth - SHAPE_SIZE[i]) data.dx *= -1;
        if (data.y < 0 || data.y > window.innerHeight - SHAPE_SIZE[i]) data.dy *= -1;
        // Update scale (membesar-mengecil)
        data.scale += data.dScale;
        if (data.scale < 0.8 || data.scale > 1.3) data.dScale *= -1;
        // Apply ke style
        const shape = shapesRef.current[i];
        if (shape) {
          shape.style.transform = `translate3d(${data.x}px, ${data.y}px, 0) scale(${data.scale})`;
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="animated-shapes">
      {[...Array(SHAPES_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={el => shapesRef.current[i] = el}
          className="animated-shape"
          style={{
            width: SHAPE_SIZE[i],
            height: SHAPE_SIZE[i],
            background: `rgba(255,255,255,${SHAPE_OPACITY})`,
            position: 'fixed',
            top: 0,
            left: 0,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(6px)'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedShapes;