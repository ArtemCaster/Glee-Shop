$(function () {

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