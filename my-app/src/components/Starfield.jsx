import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Use `loadFull` for more features

const Starfield = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000ff",
        },
      },
      particles: {
        color: {
          value: "#09be16ff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.2, // Slow particle speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200, // Number of stars
        },
        opacity: {
          value: { min: 0.1, max: 0.5 }, // Twinkling effect
        },
        shape: {
          type:"star"
        },
        size: {
          value: { min: 1, max:11},
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // The mode for the gravity effect
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          // For mobile touch interactions
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100, // The radius of the "gravity well"
            duration: 0.2,
          },
        },
      },
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return null;
};

export default Starfield;
