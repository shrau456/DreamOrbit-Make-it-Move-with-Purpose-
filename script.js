// Animate navbar on page load
gsap.to(".navbar", {
  duration: 1,
  y: 0,
  opacity: 1,
  ease: "power3.out"
});

// Scroll-triggered fade-ins
gsap.utils.toArray(".fade-section").forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }
  );
});
