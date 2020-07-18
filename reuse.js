/*======================
    Scroll to Element
======================= */
$('a.now').click(function() {
    $('html, body').animate({
    scrollTop: $("#form").offset().top
    }, 2000)
});

/*======================
    Scroll to Top
======================= */
$('.top').click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 2000)
});

/*==========================
    Scroll Btn Hide & Show
============================ */
$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      $(".site-header").addClass("sticky");
      $("#toTop").fadeIn();
    } else {
      $(".site-header").removeClass("sticky");
      $("#toTop").fadeOut();
    }
});

/*=============================
    Slick initalize & Unslick 
    particular view port
=============================== */
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
  
$('input[name="your-email"]').keyup(function() {
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


/*=========================
    Sticky Section
===========================*/
function sticky_relocate() {
    var sticky_foot = $(".sticky-bottom");
    var win = $(window);
    var a = sticky_foot.offset().top;
    var b = sticky_foot.height();
    var c = win.height();
    var d = win.scrollTop();
    var e = d + win.innerHeight();
    var f = a + sticky_foot.outerHeight();
    if (((e > a) && (d < f)) || ($(window).scrollTop() >= 100) ){
        $('.blog-strip').addClass('scrollUp');
    }
    if (((c+d)>(a+b)) || ($(window).scrollTop() <= 200)) {
        $('.blog-strip').removeClass('scrollUp');
    }
}
sticky_relocate();
  
$(window).scroll(function(){
    sticky_relocate();
});


/*=================================
    Auto Pop-Up Certain Time Delay
===================================*/
$(window).on('load', function(){
    function showwindow(){
      $("#pop-up").show();
      $('#pop-initial').css('overflow','hidden');
      $('.wrapper').addClass('pop-up');
    }
    function hidewindow(){
      $("#pop-up").hide();
      $('#pop-initial').css('overflow','unset');
    }
    setTimeout(showwindow,10000);
    $(".close-pop-up").click(function(){
      hidewindow();
      $('.wrapper').removeClass('pop-up');
    });
});


/*=====================
    Sticky NavBar
=======================*/
function sticky(navbar) {
    var c, currentScrollTop = 0;

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            navbar.addClass('fixed-header');
        }
        else {
            navbar.removeClass('fixed-header');
        }
    });
}
sticky($('.site-header'));


/*=================
    Page Progress
===================*/
<progress id="progressbar" value="0" max="100"></progress>

$(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;
    $("#progressbar").attr('value', position);
});


/*===================================
    Background Image Using data-bg
=====================================*/
function dataBg(imgcontainer) {
    $(imgcontainer).each(function() {
        var img = $(this).data('bg');
        $(this).css({"background-image": "url(" + img + ")"});
    })
}
dataBg('.our-works-banner .item');