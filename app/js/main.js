$(function(){
  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup('.products-week', config);
  var mixer2 = mixitup('.new-design', config);
  
});