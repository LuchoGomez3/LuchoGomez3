import gsap from "gsap";
import SplitText from "gsap/SplitText";

const titleText = new SplitText("#aboutMe-title", {
  type: "chars, words",
});

const subtitleText = new SplitText("#aboutMe-text", {
  type: "chars, words",
});

subtitleText.words.forEach((word, index) => {
  word.addEventListener("mouseenter", () => {
    gsap.to(word, {
      scale: 1.2,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  word.addEventListener("mouseleave", () => {
    gsap.to(word, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  });
});

titleText.chars.forEach((char, index) => {
  char.addEventListener("mouseenter", () => {
    gsap.to(char, {
      color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(
        0,
        255
      )}, ${gsap.utils.random(0, 255)})`,
      rotation: gsap.utils.random(-360, 360),
      scale: gsap.utils.random(0.5, 5),
      duration: 0.2,
    });
  });

  char.addEventListener("mouseleave", () => {
    gsap.to(char, {
      scale: 1,
      rotation: 0,
      duration: 0.2,
      color: "#7bbe89",
    });
  });
});
