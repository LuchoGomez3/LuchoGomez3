import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.from("#experience-img", {
  scrollTrigger: {
    trigger: "#experience-img",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
    scrub: 1,
  },
  x: -700,
  opacity: 0,
  rotation: gsap.utils.random(-360, 360),
  delay: 4,
  duration: 1.5,
  ease: "back.out(1.7)",
});
