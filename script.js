const timerT = document.getElementById("timer");
const daysD = document.getElementById("days");
const hrH = document.getElementById("hr");
const minM = document.getElementById("min");
const secS = document.getElementById("sec");

function countdown() {
  let halloweenDate = new Date("October 31, 2026 00:00:00");

  setInterval(() => {
    let now = new Date().getTime();
    let diff = halloweenDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hr = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let min = Math.floor((diff / (1000 * 60)) % 60);
    let sec = Math.floor((diff / 1000) % 60);

    daysD.innerHTML = days + "d";
    hrH.innerHTML = hr + "h";
    minM.innerHTML = min + "min";
    secS.innerHTML = sec + "s";
    timerT.innerHTML = days + " days left until halloween";
  }, 1000);
}

countdown();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-para p", {
  y: 30,
  stagger: 0.6,
  opacity: 0,
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".gsap-p ",
    start: "top 80%",
    end: "bottom 20%",

    toggleActions: "play none none reverse",
  },
});

gsap.from(".activities-card", {
  scrollTrigger: {
    trigger: "#activities",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".gallery-container img", {
  y: 80,
  opacity: 0,
  duration: 0.1,
  ease: "power3.out",
  stagger: 0.2,
  scale: 0.8,
  scrollTrigger: {
    trigger: ".gallery-container",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
