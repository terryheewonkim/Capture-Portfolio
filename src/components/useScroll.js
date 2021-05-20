// Intersection observer - a way JS allows you to do something to an element once it's in view
import { useInView } from "react-intersection-observer";
// useAnimation - way for you to control animation in framer motion (when the element should start animating)
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3, triggerOnce: true });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
