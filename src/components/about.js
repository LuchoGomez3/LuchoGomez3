import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.from("#about-title", {
  y: -200,
  delay: 1.5,
  duration: 2,
  ease: "bounce.out",
});

const subtitleText = new SplitText("#about-text", {
  type: "chars, words",
});
subtitleText.chars.forEach((char, index) => {
  let charTl = gsap.timeline();

  charTl.from(char, {
    y: gsap.utils.random(-100, 100),
    x: gsap.utils.random(-100, 100),
    rotation: gsap.utils.random(-360, 360),
    delay: 2.5,
    duration: 2.5,
    opacity: 0,
  });

  charTl.from(
    char,
    {
      color: `hsl(${gsap.utils.random(0, 100)}, 100%, 50%)`,
      duration: 1,
    },
    "-=1.5"
  );
});
