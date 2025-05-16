// src/components/ParticlesBackground.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#ffffff",
        },
        particles: {
          number: { value: 15 },
          move: {
            direction: "top",
            enable: true,
            outModes: "out",
            speed: 1,
          },
          shape: {
            type: "image",
            image: [
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              },
              {
                src: "https://png.pngtree.com/png-clipart/20230122/original/pngtree-happy-birthday-balloons-png-image_8927206.png",
                width: 32,
                height: 32,
              }
            ]
          },
          size: {
            value: 30,
            random: true,
          },
          opacity: {
            value: 1,
            random: true,
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
