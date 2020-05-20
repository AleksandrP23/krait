$(document).ready(function () {

  //Добавление видео
  var overlay = document.getElementById('overlay');
  var vid = document.getElementById('video');

  if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false)
  } else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play)
  }

  function play() {
    if (vid.paused) {
      vid.play();
      overlay.className = "o";
    } else {
      vid.pause();
      overlay.className = "";
    }
  }

  // карусель section "screenshots"
  var carousel = $("#carousel").waterwheelCarousel({
    separation: 180,
    edgeFadeEnabled: true
  });

  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });


  // карусель section "testimonials"
  $('.testimonials-carusel').slick({
    slidesToShow: 3,
    centerMode: true,

    responsive: [{
        breakpoint: 1501,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true

        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false
        }
      },
    ]

  });

  // определение переменных
  var navToggleButton = $('#navigation__button');
  var navToggleIcon = $('.navigation__toggle .fa');
  var navBlock = $('.menu__list');
  var navBlockOpen = 'menu__list--open';
  var navLink = $('.menu__list a');

  // функция для анимации иконки
  function navButtonToggle() {
    if (navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active")
    } else {
      navToggleButton.addClass("active")
    }
  }

  // События по клику на иконку навигации
  navToggleButton.on('click', function (e) {
    e.preventDefault();
    navBlock.toggleClass(navBlockOpen);

    navButtonToggle();
  })

  // События по клику на ссылки в навигационном меню
  navLink.on('click', function () {
    if (navBlock.hasClass(navBlockOpen)) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  })
});