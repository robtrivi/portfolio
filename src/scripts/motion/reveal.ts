import { animate, inView, stagger, type DOMKeyframesDefinition } from "motion";

type AnimateDom = (
  element: Element | Element[],
  keyframes: DOMKeyframesDefinition,
  options?: Parameters<typeof animate>[2],
) => ReturnType<typeof animate>;

const animateDom = animate as AnimateDom;

const isReducedMotion = () =>
  document.documentElement.dataset.motion === "reduced";

const revealElement = (element: HTMLElement) =>
  animateDom(
    element,
    {
      opacity: 1,
      transform: "translateY(0px)",
      filter: "blur(0px)",
    },
    {
      duration: 0.6,
      ease: "easeOut",
    },
  );

const hideElement = (element: HTMLElement) =>
  animateDom(
    element,
    {
      opacity: 0,
      transform: "translateY(24px)",
      filter: "blur(6px)",
    },
    {
      duration: 0.35,
      ease: "easeIn",
    },
  );

const revealChildren = (items: HTMLElement[]) =>
  animateDom(
    items,
    {
      opacity: 1,
      transform: "translateY(0px)",
      filter: "blur(0px)",
    },
    {
      duration: 0.45,
      delay: stagger(0.08),
      ease: "easeOut",
    },
  );

const hideChildren = (items: HTMLElement[]) =>
  animateDom(
    items,
    {
      opacity: 0,
      transform: "translateY(18px)",
      filter: "blur(4px)",
    },
    {
      duration: 0.25,
      ease: "easeIn",
    },
  );

if (!isReducedMotion()) {
  inView(
    ".reveal",
    (element) => {
      if (!(element instanceof HTMLElement)) {
        return undefined;
      }

      revealElement(element);

      return () => {
        hideElement(element);
      };
    },
    { amount: 0.25 },
  );

  inView(
    "[data-stagger]",
    (element) => {
      if (!(element instanceof HTMLElement)) {
        return undefined;
      }

      const items = Array.from(
        element.querySelectorAll<HTMLElement>(
          "[data-stagger-item], .reveal-item",
        ),
      );

      if (items.length === 0) {
        return undefined;
      }

      revealChildren(items);

      return () => {
        hideChildren(items);
      };
    },
    { amount: 0.2 },
  );
}
