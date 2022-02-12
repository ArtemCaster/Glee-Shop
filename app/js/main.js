$(function () {

  $('.related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    customPaging: '50px',
  })



  $('.product-one__tabs-item').on('click',function(e){
    e.preventDefault();

    $('.product-one__tabs-item').removeClass('product-one__tabs-item--active');
    $(this).addClass('product-one__tabs-item--active');

    $('.product-one__tabs-content').removeClass('product-one__tabs-content--active');
    $($(this).attr('href')).addClass('product-one__tabs-content--active');
  })

  $('.product-one__input').styler();



  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,

  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    // fade: true,
  });


  $(".ware__star").rateYo({
    readOnly: true,
    starWidth: "15px",
    spacing: "10px",
    normalFill: "#ccccce",
    ratedFill: "#ffcc00",
  });

  $('.price-filter__slider').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price-filter__min-price').text("$" + data.from + ".00");
      $('.price-filter__max-price').text("$" + data.to + ".00");
    },
    onChange: function (data) {

      $('.price-filter__min-price').text("$" + data.from + ".00");
      $('.price-filter__max-price').text("$" + data.to + ".00");
      
      if(data.to > 700){
        $('.price-filter__max-price').text("у вас столько нету :)");
      }
    }

  });

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup('.products-week', config);
  var mixer2 = mixitup('.new-design', config);



});