gsap.registerPlugin(ScrollTrigger);

gsap.to(".page__overlay", {
  backdropFilter: "blur(0px)",
  delay: 1,
  duration: 1,
  display: "none",
});

gsap.to(".header__line", {
  width: "100%",
  duration: 2,
  delay: 1,
});

gsap.fromTo(
  ".header__logo",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1.2,
  },
);

gsap.fromTo(
  ".header__navlink",
  {
    y: -10,
    opacity: 0,
    stagger: 0.1,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    stagger: 0.1,
    delay: 1,
  },
);

gsap.fromTo(
  ".header__hamburger-line.line-1",
  {
    x: -100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 1,
    duration: 1,
  },
);

gsap.fromTo(
  ".header__hamburger-line.line-3",
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 1,
    duration: 1,
  },
);

gsap.fromTo(
  ".header__hamburger-line.line-2",
  {
    rotate: 90,
    opacity: 0,
  },
  {
    rotate: 0,
    opacity: 1,
    delay: 1,
    duration: 1,
  },
);

gsap.fromTo(
  ".main__hero-content .content",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1,
    stagger: 0.2,
  },
);

gsap.to(".about__greeting", {
  scrollTrigger: {
    trigger: ".about__greeting",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 1,
  delay: 0.4,
});

gsap.to(".about__name", {
  scrollTrigger: {
    trigger: ".about__name",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 1,
  delay: 0.6,
});

gsap.to(".about__paragraph", {
  scrollTrigger: {
    trigger: ".about__paragraph",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 1,
  delay: 0.8,
  stagger: 0.2,
});

gsap.to(".courses__subtitle", {
  scrollTrigger: {
    trigger: ".courses__subtitle",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 1,
  delay: 0.6,
});

gsap.to(".courses__title", {
  scrollTrigger: {
    trigger: ".courses__title",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 1,
  delay: 0.4,
});

gsap.fromTo(
  ".courses__card",
  {
    opacity: 0,
    y: 15,
  },
  {
    scrollTrigger: {
      trigger: ".courses__title",
      toggleActions: "restart none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
    stagger: 0.1,
  },
);
