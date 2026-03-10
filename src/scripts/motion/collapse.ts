import { animate } from "motion";

type AnimateDom = (
  element: Element,
  keyframes: Record<string, string[] | number[]>,
  options?: Parameters<typeof animate>[2],
) => ReturnType<typeof animate>;

const animateDom = animate as AnimateDom;

const isReducedMotion = () =>
  document.documentElement.dataset.motion === "reduced";

const getContent = (details: HTMLDetailsElement) =>
  details.querySelector<HTMLElement>("[data-collapse-content]");

const stopAnimation = (content: HTMLElement) => {
  content.getAnimations().forEach((animation) => animation.cancel());
};

const openCollapse = (details: HTMLDetailsElement, content: HTMLElement) => {
  details.open = true;
  stopAnimation(content);

  content.style.overflow = "hidden";
  content.style.height = "0px";
  content.style.opacity = "0";
  content.style.transform = "translateY(-8px)";

  const targetHeight = `${content.scrollHeight}px`;

  animateDom(
    content,
    {
      height: ["0px", targetHeight],
      opacity: [0, 1],
      transform: ["translateY(-8px)", "translateY(0px)"],
    },
    {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  ).finished.finally(() => {
    content.style.height = "auto";
    content.style.opacity = "1";
    content.style.transform = "translateY(0px)";
    content.style.overflow = "";
  });
};

const closeCollapse = (details: HTMLDetailsElement, content: HTMLElement) => {
  stopAnimation(content);

  const startHeight = `${content.offsetHeight}px`;

  content.style.overflow = "hidden";
  content.style.height = startHeight;
  content.style.opacity = "1";
  content.style.transform = "translateY(0px)";

  animateDom(
    content,
    {
      height: [startHeight, "0px"],
      opacity: [1, 0],
      transform: ["translateY(0px)", "translateY(-6px)"],
    },
    {
      duration: 0.24,
      ease: [0.4, 0, 1, 1],
    },
  ).finished.finally(() => {
    details.open = false;
    content.style.height = "";
    content.style.opacity = "";
    content.style.transform = "";
    content.style.overflow = "";
  });
};

const syncInitialState = (
  details: HTMLDetailsElement,
  content: HTMLElement,
) => {
  if (details.open) {
    content.style.opacity = "1";
    content.style.transform = "translateY(0px)";
    return;
  }

  content.style.height = "0px";
  content.style.opacity = "0";
  content.style.transform = "translateY(-6px)";
  content.style.overflow = "hidden";
};

document
  .querySelectorAll<HTMLDetailsElement>("[data-motion-collapse]")
  .forEach((details) => {
    const summary = details.querySelector("summary");
    const content = getContent(details);

    if (
      !(summary instanceof HTMLElement) ||
      !(content instanceof HTMLElement)
    ) {
      return;
    }

    syncInitialState(details, content);

    summary.addEventListener("click", (event) => {
      if (isReducedMotion()) {
        content.style.height = "";
        content.style.opacity = "";
        content.style.transform = "";
        content.style.overflow = "";
        return;
      }

      event.preventDefault();

      if (details.open) {
        closeCollapse(details, content);
        return;
      }

      openCollapse(details, content);
    });
  });
