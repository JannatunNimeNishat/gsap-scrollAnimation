gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.panel',
    start: "top 6%",
    markers: true,
    toggleClass: {targets:"nav", className:'nav-active'}

})