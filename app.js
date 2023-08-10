gsap.registerPlugin(ScrollTrigger)


/* gsap.to('.squire',{
    x:700, 
    duration:1,
    scrollTrigger:'.squire'
}) */

// 
/* gsap.to('.squire',{
    x:700, 
    duration:3,
    scrollTrigger:{
        trigger:'.square',
        start:"30%",
        markers:true
    }
}) */

// add custom class on scrollTriger
/* gsap.to('.squire',{
    duration:3,
    scrollTrigger:{
        trigger:'.squire',
        start:'top 30%',
        end:'center 20%',
        markers:true,
        toggleClass:'red'
    }
}) */

// start and end properties values as function
/* gsap.to('.squire',{
    duration:3,
    scrollTrigger:{
        trigger:'.squire',
        start:'top 30%',
        end:()=> `+=${document.querySelector(".squire").offsetHeight}`,
        markers:true,
        toggleClass:'red'
    }
}) */

// toggle action
/* gsap.to('.squire',{
    x:700,
    duration:3,
    scrollTrigger:{
        trigger:'.squire',
        start:'top 70%',
        end:'top 40%',
        // toggleActions: "restart none none none",
        // toggleAction:"play    none      none            none",
        // toggleActions:"restart none      none            none",
        //            onEnter  onLeave   onEnterBack     onLeaveBack
        // toggleActions: "restart reverse none none",
        // toggleActions: "restart pause none none",
        // toggleActions: "restart pause resume none",
        // toggleActions: "restart pause resume reset",
        toggleActions: "restart pause resume complete",
        // toggle actions are: 
        // play pause resume reverse restart complete none
        markers:{
            startColor:'purple',
            endColor:'fuchsia',
            fontSize:"3rem",
        }
    }
}) */

// scrub
/* gsap.to('.squire',{
    x:700,
    duration:8,
    scrollTrigger:{
        trigger:'.squire',
        scrub:2,
        start:'top 70%',
        end:'top 30%',
        toggleActions:"restart none none none",
        markers: {
            startColor:'purple',
            endColor:'fuchsia',
            fontSize:'2rem'
        }
    }
}) */


// pin
gsap.to('.squire',{
    // x:700,
    duration:8,
    scrollTrigger:{
        trigger:'.squire',
        start:'top 70%',
        end:'top 30%',
        toggleActions:"restart none none none",
        scrub:4,
        pin:true,
        markers: {
            startColor:'purple',
            endColor:'fuchsia',
            fontSize:'2rem'
        }
    }
})
/* gsap.to('.squire',{
    // x:200,
    duration:8,
    scrollTrigger:{
        trigger:'.squire2',
        start:'top 50%',
        end:'top 30%',
        toggleActions:"restart none none none",
        scrub:4,
        pin:".squire",
        pinSpacing:true,
        markers: {
            startColor:'purple',
            endColor:'fuchsia',
            fontSize:'2rem'
        }
    }
}) */








