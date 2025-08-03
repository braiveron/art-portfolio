import React, { useEffect, useState, useRef } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Suavizado movimiento (pequeño delay)
  useEffect(() => {
    let requestId;
    const smoothMove = () => {
      if (dotRef.current) {
        const currentX = dotRef.current.offsetLeft + 8; // center approx
        const currentY = dotRef.current.offsetTop + 8;
        const dx = position.x - currentX;
        const dy = position.y - currentY;

        dotRef.current.style.left = `${currentX + dx * 0.3}px`;
        dotRef.current.style.top = `${currentY + dy * 0.3}px`;
      }
      requestId = requestAnimationFrame(smoothMove);
    };
    smoothMove();

    return () => cancelAnimationFrame(requestId);
  }, [position]);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          backgroundColor: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 8px 2px #fff",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
