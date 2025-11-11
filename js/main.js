(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

// Contact ME 
// EMAIL JS
 (function() {
    // Initialize EmailJS with your public key
    emailjs.init("RYe81jezGe12VLgmr"); //  EmailJS Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const btn = event.target.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Sending...";

    // Send form via EmailJS
    emailjs.sendForm("service_tk6lwkj", "template_gaa8agh", this)
      .then(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for contacting me. I’ll get Response to you soon.",
          icon: "Success",
          confirmButtonColor: "#00B87B"
        });
        this.reset();
      
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          icon: "Error",
          confirmButtonColor: "#d33"
        });
        
      })
      
      .finally(() => {
        btn.disabled = false;
        btn.textContent = "Send Message";
      });
  });
