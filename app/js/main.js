$(function () {
  $('.rate-star').rateYo({
    rating: 5,
    starWidth: '12px',
    normalFill: '#f4f6f5',
    ratedFill: '#ffa726',
  });

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
  });

  // пишем всегда последним, потому что он написан чистом JavaScript и если на какой-то странице он не находит свой элемент, то всё, что ниже него ломается. Поэтому ставим его последним.
  var mixer = mixitup('.products__products-wrapper');
});
