const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.overlay-icon-hide', {y:0, duration: 1.8})
tl.to('.overlay-slider', {top: '-110%',duration: 1})
tl.to('.overlay', {top: '-110%', duration: 1}, "-=1")
tl.fromTo('nav', {y:'-100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.75})
tl.to('.hide-text', {y:'0%', duration: 1, stagger: 1})
tl.fromTo('.hero-section-title .animated-button', {x: '100px', opacity: 0},{x:'0',opacity:1})
tl.fromTo('.project', {y: '100px', opacity: 0}, {y: 0, opacity: 1, duration: 0.75, stagger: 0.4})


////////////////////////////////////////////////////////
$(document).ready(function(){
    // toggle menu
    $('.menu-toggle-button').on('click',function() {
        $('.menu-toggle-button').toggleClass('toggle-button-active')
        $('nav').toggleClass('reveal-menu')
    })

    // if we are on mobile screens ( smaller than 768px, hide menu on click)
    document.querySelectorAll('.navigation-link').forEach((link) => {
       link.addEventListener('click', hideMenu)
    })
    
    $(document).on('resize', hideMenu)

    function hideMenu() {
        if($(document).innerWidth() < 768 && document.querySelector('nav').classList.contains('reveal-menu')) {
            document.querySelector('nav').classList.remove('reveal-menu')
            document.querySelector('.menu-toggle-button').classList.remove('toggle-button-active')
        } 
    }

    // smooth scroll behaviour
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


/////////////////////////////////////////////
$("#my-form").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        $('.success-message').css('display','block')
        $('.success-message').text('Message sent, I\'ll be in touch ASAP')
        $('#my-form')[0].reset()
    });
});

setTimeout(() => {
    document.querySelector('.success-message').style.display = 'none'
}, 2000);