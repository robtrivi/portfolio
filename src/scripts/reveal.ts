import { animate, inView } from "motion";

inView(".reveal", (element) => {
  animate(element, { opacity: 1 }, { duration: 0.6 });
});
