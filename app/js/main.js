$(function () {
  $('.hero-slider__list').slick({
    arrows: true,
    prevArrow: '<button class="hero-slider__arrow hero-slider__arrow--prev" type="button"><svg><use xlink: href = "../images/sprite.svg#icon-slick-prev"></use></svg></button > ',
    nextArrow: '<button class="hero-slider__arrow hero-slider__arrow--next" type="button"><svg><use xlink: href = "../images/sprite.svg#icon-slick-next"></use></svg></button>',
    infinite: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true,
      }
    },]
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active'),
      $('.catalog__btn').toggleClass('catalog__btn--active')
  });

  $('.burger').on('click', function () {
    $('.popup-menu').toggleClass('popup-menu--active'),
      $('.burger').toggleClass('burger--active'),
      $('.catalog__list').removeClass('catalog__list--active'),
      $('body').toggleClass('lock')
  });

  $('.basket--activator').on('click', function () {
    $('.basket').toggleClass('basket--active'),
      $('body').toggleClass('lock')
  });

  $('.basket__close').on('click', function () {
    $('.basket').toggleClass('basket--active')
  });

  $('.user-nav__btn--search').on('click', function () {
    $('.header__form-search').toggleClass('header__form-search--active')
  });

  $('.filter__btn').on('click', function () {
    $('.filter__wrapper').toggleClass('filter__wrapper--active')
  });

  $('.shop-content__sort').styler();

  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  })

  $('.shop-list').on('click', function () {
    $('.shop-content__products').addClass('shop-content__products--list');
    $('.product-card').addClass('shop-content__card-list');
  })

  $('.shop-grid').on('click', function () {
    $('.shop-content__products').removeClass('shop-content__products--list');
    $('.product-card').removeClass('shop-content__card-list');
  })

  $('.shop__filters--mobile-btn').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--mobile');
    $('.shop__filters-icon').toggleClass('shop__filters-icon--active');
    $('.shop__filters-cross').toggleClass('shop__filters-cross--active');
    $('body').toggleClass('lock')
  });

  $('.tabs__title').on('click', function (e) {
    e.preventDefault();
    $('.tabs__title').removeClass('tabs__title--active');
    $(this).addClass('tabs__title--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  })


  $(function () {
    var $overlay = $('.overlay'),
      $overlayTrigger = $('.burger'),
      $overlayClose = $('.burger-close'),
      openClass = 'is-open';

    $overlayTrigger.on('click', function () {
      var num = ('0' + ($(this).index() + 1)).slice(-2);
      $('.overlay').addClass(openClass);
      $overlayClose.addClass(openClass);
    });

    $overlayClose.on('click', function () {
      $overlayClose.removeClass(openClass);
      $overlay.removeClass(openClass);
    });
  });

  var $range = $(".filter-price__range"),
    $inputFrom = $(".filter-price__input--from"),
    $inputTo = $(".filter-price__input--to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $(".product__rating, .tabs__reviews-rating").rateYo({
    "readOnly": true,
    "starSvg": "<svg><use xlink: href='../images/sprite.svg#star'></use></svg>",
    "normalFill": "#c1c1c1",
    "ratedFill": "#ffb800",
    "starWidth": "16px",
    "spacing": "3px"
  });

  $(".form-review-rateyo").rateYo({
    "starSvg": "<svg><use xlink: href='../images/sprite.svg#star'></use></svg>",
    "normalFill": "#c1c1c1",
    "ratedFill": "#ffb800",
    "starWidth": "16px",
    "spacing": "6px"
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

})