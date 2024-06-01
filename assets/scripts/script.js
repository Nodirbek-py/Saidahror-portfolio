const headerHamburger = document.querySelector("#header__hamburger");
const headerNavlist = document.querySelector(".header__navlist");

headerHamburger.addEventListener("click", () => {
  if (!headerNavlist.classList.contains("expanded")) {
    gsap.fromTo(
      ".header__navlink",
      {
        x: -15,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 0.5,
      },
    );
  }
  headerNavlist.classList.toggle("expanded");
  headerHamburger.classList.toggle("expanded");
});
