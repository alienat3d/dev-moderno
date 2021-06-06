$(function () {

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    normalFill: "#f4f6f5",
    ratedFill: "#ffa726"
  });

  $(".product-slider__inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
  });

  var mixer = mixitup(".products__products-wrapper");

})