// Particle Js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      }
    },
    "opacity": {
      "value": 0.1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "top",
      "random": false,
      "straight": true,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$('.navbar .dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(900,"swing");
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300,"swing");
});

(function($) {
  "use strict";
  //Pre loader
  $(window).on('load',function() {
      $('.preloader').delay(400).slideUp('slow'); // set duration in brackets    
  });

  //Scroll Top
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
          $('.scroll-top').removeClass('not-visible');
      } else {
          $('.scroll-top').fadeOut();
      }
  });
  $('.scroll-top').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  });    

  //calling Aos animate
  AOS.init({
    offset: 100,
    duration: 1200,
    delay: 300,
    easing: 'ease',
    once: false,
})

})(window.jQuery);
