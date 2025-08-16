const particlesConfig = {
  background: {
    color: {
      value: "#000000",
    },
  },
  particles: {
    number: {
      value: 100, // Număr mare de particule pentru un cer înstelat
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Culoarea albă a stelelor
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true, // Opacitate randomizată pentru un efect natural
    },
    size: {
      value: 1.5,
      random: true, // Dimensiune randomizată
    },
    move: {
      enable: true,
      speed: 0.5, // Viteză redusă de mișcare pentru stelele de fundal
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Liniile se conectează la hover
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.2,
        },
      },
    },
  },
  retina_detect: true,
};

// Adaugă o configurație separată pentru stelele căzătoare
const fallingStarsConfig = {
  particles: {
    number: {
      value: 5, // Un număr mic de stele căzătoare
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "star", // Forma de stea
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 10, // Viteză mare
      direction: "bottom-left", // Se mișcă pe diagonală
      random: false,
      straight: true,
      out_mode: "out",
    },
  },
};

export default { ...particlesConfig, ...fallingStarsConfig };
