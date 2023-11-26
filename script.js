var cursr = document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
  cursr.style.left = dets.x+62+"px"
  cursr.style.top = dets.y+67 +"px"
})
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x+"px"
   blur.style.top = dets.y +"px"
  })

gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height: "70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start: "top -10%",
        end: "top -11%",
         scrub: 1,
    }
    
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
 
    }
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    cursr.style.scale = 3;
    cursr.style.border = "1px solid #fff"
    
   })
   elem.addEventListener("mouseleave",function(){
    cursr.style.scale = 1;
    cursr.style.border = "0px solid #95C11E"
    
   })
})

gsap.from("#about-us img, #about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger: "#about-us",
    scroller:"body",

    start:"top 60%",
    end: "top 58%",
    scrub:2
  }
})

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});




