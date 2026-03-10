const root = document.documentElement;
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const syncReducedMotionPreference = () => {
  root.dataset.motion = mediaQuery.matches ? "reduced" : "full";
};

syncReducedMotionPreference();
mediaQuery.addEventListener("change", syncReducedMotionPreference);
