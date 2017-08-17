$(document).ready(function () {
    var swiper = new Swiper('#swiper-container-partners', {
        pagination: '.swiper-pagination.partners',
        slidesPerView: 4,
        breakpoints: {
          1223: {
            slidesPerView: 3
          }
        },
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next.partners',
        prevButton: '.swiper-button-prev.partners',
        paginationType: 'fraction'
    });

    var swiper2 = new Swiper('#swiper-container-team', {
        pagination: '.swiper-pagination.team',
        slidesPerView: 3,
        breakpoints: {
          1223: {
            slidesPerView: 1
          }
        },
        paginationClickable: true,
        spaceBetween: 50,
        nextButton: '.swiper-button-next.team',
        prevButton: '.swiper-button-prev.team',
        paginationType: 'fraction'
    });

    var swiper3 = new Swiper('#swiper-container-advisors', {
        pagination: '.swiper-pagination.advisors',
        slidesPerView: 4,
        breakpoints: {
          1223: {
            slidesPerView: 2
          }
        },
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next.advisors',
        prevButton: '.swiper-button-prev.advisors',
        paginationType: 'fraction'
    });

    var swiperHackenModal = new Swiper('#swiper-container-hacken', {
        pagination: '.swiper-pagination.hacken',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next.hacken',
        prevButton: '.swiper-button-prev.hacken',
        paginationType: 'fraction'
    });

    window.hackenSlider = swiperHackenModal;
   var countDownDate = new Date("Sep 5, 2017 15:37:25").getTime();

// Update the count down every 1 second
      var x = setInterval(function() {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo"
          document.getElementById("timetick-day").innerHTML = days;
          document.getElementById("timetick-hour").innerHTML = hours;
          document.getElementById("timetick-minute").innerHTML = minutes;
          document.getElementById("timetick-second").innerHTML = seconds;


          document.getElementById("timetick-day-main").innerHTML = days;
          document.getElementById("timetick-hour-main").innerHTML = hours;
          document.getElementById("timetick-minute-main").innerHTML = minutes;
          document.getElementById("timetick-second-main").innerHTML = seconds;


          // If the count down is over, write some text
          if (distance < 0) {
              clearInterval(x);
              document.getElementById("demo").innerHTML = "EXPIRED";
          }
      }, 1000);


      let availWidth = window.screen.availWidth;
      console.log('aval', availWidth);
      if (availWidth <= 767) {
        $('.video-container')[0].style.display = 'none'

        $('#fullpage').fullpage({
          menu: '.hk-navigation',
          autoScrolling: false,
          fitToSection: false,
          onLeave: function(index, nextIndex, direction){
            $('.hk-nav-item').removeClass('active')
            if (nextIndex === 12) {
              setTimeout(() => $($('.hk-nav-item')[nextIndex-1]).addClass('active'), 100)
            } else {
              setTimeout(() => $($('.hk-nav-item')[nextIndex-2]).addClass('active'), 100)
            }
          }
        });
      } else if (availWidth <= 1223) {
          $('.video-container')[0].style.display = 'none'

          $('#fullpage').fullpage({
            menu: '.hk-navigation',
            autoScrolling: true,
            onLeave: function(index, nextIndex, direction){
              $('.hk-nav-item').removeClass('active')
              if (nextIndex === 12) {
                setTimeout(() => $($('.hk-nav-item')[nextIndex-1]).addClass('active'), 100)
              } else {
                setTimeout(() => $($('.hk-nav-item')[nextIndex-2]).addClass('active'), 100)
              }
            }
          });

          setTimeout(handleVideoEnd, 6000)
      } else {
        document.getElementById('video-loader').addEventListener('ended', handleVideoEnd, false);

        function handleVideoEnd() {
          $('.video-container')[0].style.display = 'none'

          $('#fullpage').fullpage({
            menu: '.hk-navigation',
            autoScrolling: true,
            onLeave: function(index, nextIndex, direction){
              $('.hk-nav-item').removeClass('active')
              if (nextIndex === 12) {
                setTimeout(() => $($('.hk-nav-item')[nextIndex-1]).addClass('active'), 100)
              } else {
                setTimeout(() => $($('.hk-nav-item')[nextIndex-2]).addClass('active'), 100)
              }
            }
          });
          }

          setTimeout(handleVideoEnd, 6000)
      }
});

function onNavClick(e, i) {
  // var menu = $('.hk-navigation')[0]
  // menu.style.display = 'none'

  $.fn.fullpage.moveTo(i+1);
}

function toggleMainModal(toOpen) {
  var modal = $('.main-modal-container')[0]
  console.log(modal);
  if (toOpen) {
    modal.style.display = 'flex'
  } else {
    modal.style.display = 'none'
  }
}

function toggleHackenModal(toOpen, slideIndex = 0) {
  var modal = $('.hacken-modal-container')[0]

  hackenSlider.slideTo(slideIndex)
  if (toOpen) {
    modal.style.visibility = 'visible'
  } else {
    modal.style.visibility = 'hidden'
  }
}

function toggleAdvisorModal(toOpen) {
  var modal = $('.advisor-modal-container')[0]
  console.log('123123');
  if (toOpen) {
    modal.style.display = 'flex'
  } else {
    modal.style.display = 'none'
  }
}

function toggleTabletMenu(toOpen) {
  console.log('toopen', toOpen);
  var menu = $('.hk-navigation')[0]
  if (toOpen) {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
  return false;
}
