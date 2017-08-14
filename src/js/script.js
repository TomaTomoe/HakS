$(document).ready(function () {
    var swiper = new Swiper('#swiper-container-partners', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });

    var swiper2 = new Swiper('#swiper-container-team', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 50,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });

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


      //comment this all to have chance to make changes
      document.getElementById('video-loader').addEventListener('ended', handleVideoEnd, false);
      function handleVideoEnd(e) {
        $('.video-container')[0].style.display = 'none'

        $('#fullpage').fullpage({
          menu: '.hk-navigation',
          onLeave: function(index, nextIndex, direction){
            console.log('nextIndex', nextIndex)
            $('.hk-nav-item').removeClass('active')
            setTimeout(() => $($('.hk-nav-item')[nextIndex-2]).addClass('active'), 100)
          }
        });
        }
        // $('#fullpage').fullpage({menu: '.hk-navigation',});
});

function onNavClick(e, i) {
  $.fn.fullpage.moveTo(i+1);
}
