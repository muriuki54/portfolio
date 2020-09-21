const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.overlay-icon-hide', {y:0, duration: 1.8})
tl.to('.overlay-slider', {top: '-100%',duration: 1})
tl.to('.overlay', {top: '-100%', duration: 1}, "-=1")
tl.fromTo('nav', {y:'-100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.75})
tl.to('.hide-text', {y:'0%', duration: 1, stagger: 1})
tl.fromTo('.hero-section-title .animated-button', {x: '100px', opacity: 0},{x:'0',opacity:1})
tl.fromTo('.project', {y: '100px', opacity: 0}, {y: 0, opacity: 1, duration: 0.75, stagger: 0.4})

////////////////////////////////////////////////////////
$(document).ready(function(){
    $('a.section-link').on('click', function(event) {
        if(this.hash !== '') {
            event.preventDefault()

            // store hash
            let hash = this.hash

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash
            }) 
        }
    })
}) 