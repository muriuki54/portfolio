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


    // matrix effect

    const canvas = document.getElementById("matrix_canvas");
        const ctx = canvas.getContext("2d");

        let w = canvas.width = document.getElementById("hero-section").clientWidth;
        let h = canvas.height = document.getElementById("hero-section").clientHeight;

        window.addEventListener("resize", function() {
            w = canvas.width = document.getElementById("hero-section").clientWidth;
            h = canvas.height = document.getElementById("hero-section").clientHeight;
        })

        ctx.fillStyle ="#000";
        ctx.fillRect(0, 0, w, h);

        const cols = Math.floor(w / 20) + 1;
        const yPos = Array(cols).fill(0);
        
        function matrix() {
            // draw a semitransparent black rectangle on top of the previous one
            ctx.fillStyle = "#0001";
            ctx.fillRect(0, 0, w, h);

            // set color to green and font to 15pt monospace in the drawing context
            ctx.fillStyle = "#0f0";
            ctx.font = "15pt monospace";

            // foreach column put a random character at the end
            yPos.forEach((y, index) => {
                // generate random character
                const char = String.fromCharCode(Math.random() * 128);

                // calculate x coordinate, we already have y coordinate (0 to begin with)
                const xPos = index * 20;

                // render the char at x, y
                ctx.fillText(char, xPos, y);

                if(y > h || y > 100 + Math.random() * 10000) yPos[index] = 0
                yPos[index] += 20;
            })
        }

        setInterval(matrix, 50);

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

    // scroll up
    $(".scroll-top").on("click", function() {
        if($(window).scrollTop() > 20) {
            $(".scroll-top").addClass("active");
        }
    })

    $(document).on("scroll", function() {
        if($(window).scrollTop() < 15) {

            $(".scroll-top").removeClass("active");
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