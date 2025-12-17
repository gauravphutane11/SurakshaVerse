import Particles from "react-tsparticles";

function CyberParticles() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#ff0000" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}

export default CyberParticles;
