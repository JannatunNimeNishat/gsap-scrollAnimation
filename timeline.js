gsap.registerPlugin(ScrollTrigger);


/* gsap.to('.box', { x: 500, duration: 2 })

gsap.to('.box', { y: 200, duration: 3, delay: 2 })
gsap.to('.box', { x: 0, duration: 2, delay: 5 }) */


const tl = gsap.timeline({ 
    scrollTrigger:{
        trigger:'.box',
        start:'top 80%',
        end:'top 40%',
        scrub:1,
        markers: true
    }
 })
tl.to('.box',{x:500,duration: 2})
    .to('.box',{y:200,duration: 3})
    .to('.box',{x:0,duration: 2})
