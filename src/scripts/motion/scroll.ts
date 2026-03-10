import { scroll } from "motion";

const isReducedMotion = () =>
  document.documentElement.dataset.motion === "reduced";

if (!isReducedMotion()) {
  document
    .querySelectorAll<HTMLElement>("[data-scroll-parallax]")
    .forEach((element) => {
      const distance = Number(element.dataset.scrollParallax ?? 24);

      scroll((_, info) => {
        const progress = Math.min(Math.max(info.y.progress, 0), 1);
        const offset = Math.round(progress * distance * -1);
        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    });
}
