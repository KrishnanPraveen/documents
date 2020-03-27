/*======================
    Scroll to Top
======================= */

$('a.now').click(function() {
     $('html, body').animate({
     scrollTop: $("#form").offset().top
     }, 2000)
 });

 $('.top').click(function() {
     $('html, body').animate({
     scrollTop: 0
     }, 2000)
 });

 /* scroll to top button hide & show */

 $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $(".site-header").addClass("sticky");
      $("#toTop").fadeIn();
    } else {
      $(".site-header").removeClass("sticky");
      $("#toTop").fadeOut();
    }
  });

 /*======================
    Slick initalize & Unslick 
    particular view port
======================= */
 
slick_on_mobile( $('.testi-quotes'));

function slick_on_mobile(slider){
    $(window).on('load resize', function() {
        if ($(window).width() > 1199) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick({
                dots: false,
                arrows: false,
                autoplay:true,
                autoplaySpeed:1000,
                centerMode: true
            });
        }
    });
}

/*======================
    Form Validation
======================= */

function valid_name(value) {
    var valid = /^[a-zA-Z ]*$/;
    return valid.test(value);
}
  
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
  
function ValidatePhoneNumber(telephone) {
    var reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return telephone.length != 10 ? false : reg.test(telephone);
}
  
$(' .form-group input[name="your-email"]').keyup(function() {
    var value = $(this).val();
    var valid = validateEmail(value);

        if (value == "") {
            $(this).parents(".form-group").addClass("error").removeClass("success");
        }

        if (value) {
          $(this).parents(".form-group").removeClass("error");
            if (valid) {
                $(this).parents(".form-group").addClass("success");
            } else {
                $(this).parents(".form-group").addClass("error");
            }
        }
});

$(".form-group input.wpcf7-form-control").on("focus blur", function() {
    if ($(this).val() == "") {
        $(this).parents(".form-group").toggleClass("focused");
    }
});