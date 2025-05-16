// BalloonTrail.jsx
import React, { useEffect, useState } from "react";

const BalloonTrail = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newBalloon = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setBalloons((prev) => [...prev.slice(-10), newBalloon]); // limit to last 10
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      {balloons.map((b) => (
        <img
          key={b.id}
          src="https://gallery.yopriceville.com/downloadfullsize/send/26923"
          alt="balloon"
          style={{
            position: "fixed",
            left: b.x,
            top: b.y,
            width: "15px",
            height: "auto",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            opacity: 0.8,
            animation: "floatUp 1s ease-out forwards",
            zIndex: 9999
          }}
        />
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -100px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BalloonTrail;
