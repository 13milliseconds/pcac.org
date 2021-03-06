export default {
  init() {
    // JavaScript to be fired on all pages

    //Open de mega menu
    let timer;
    $('.menu-item.councils').on('mouseenter', function () {
      $('.nav-councils').addClass('active');
    })
    
    $('.menu-item.councils').on('mouseleave', function () {
      timer = setTimeout(function () {
        $('.nav-councils').removeClass('active');
      }, 50);
    })
    
    $('.nav-councils').on('mouseenter', function () {
      clearTimeout(timer);
    })

    $('.nav-councils').on('mouseleave', function () {
        $(this).removeClass('active');
    })

    // Small Menu when scrolled
    let banner = $('.banner');
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        banner.addClass('scrolled');
      } else {
        banner.removeClass('scrolled');
      }
    });

    // Event Lists
    $('.event-list a, .type-tribe_events a').attr('target', '_blank');
    $('.event-list, .type-tribe_events').on('click', function (e) {
      if (e.target.tagName.toLowerCase() === 'a') {
        console.log('this is a link');
      } else { 
        $(e.target).closest('.type-tribe_events').toggleClass('active');
        $(e.target).closest('.event').toggleClass('active');
      }
    });

    //Hamburger
    $('.hamburger').on('click', function () {
      $('.nav-primary').toggleClass('active');
      $(this).toggleClass('is-active');
    });

    let postGroup = $('.home .alm-reveal, #reports .row');

    postGroup.slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      responsive:
        [
          {
            breakpoint: 5000,
            settings: 'unslick',
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          }],
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
