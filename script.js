$(function() {
    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
});

//Logo animáció
var buttonHome = $('#buttonForHome');
var homePic = $('#homPic');

buttonHome.mouseenter(function() {
    homePic.animate({
        width: '+=2%',
        height: '+=5%'
    }, 200);
});
buttonHome.mouseleave(function() {
    homePic.animate({
        width: '-=2%',
        height: '-=5%'
    }, 200);
});
buttonHome.on('click', function() {
    window.location.href = "index.html";
});

//Navbar al-lista
var martialArts = $('li:eq(2)');
var firstSubList = $('#navBarSubList1');

martialArts.mouseenter(function(){
    firstSubList.slideDown('fast');
});
martialArts.mouseleave(function(){
     firstSubList.slideUp('fast');
});

var aboutUs = $('li:eq(8)');
var secondSubList = $('#navBarSubList2');

aboutUs.mouseenter(function(){
    secondSubList.slideDown('fast');
});
aboutUs.mouseleave(function(){
    secondSubList.slideUp('fast');
});

//Diaképek a Rólunk-hoz
$(document).ready(function(){
    $('.your-class').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000
    });
  });
  

//Promo anyag animáció
$(function() {
    var firstPromo = $('#firstPromoDiv');
    var secondPromo = $('#secondPromoDiv');
    var thirdPromo = $('#thirdPromoDiv');

    firstPromo.delay(650).animate({left: '+=45%'}, 'fast');
    secondPromo.delay(1050).animate({left: '+=65%'}, 'fast');
    thirdPromo.delay(1450).animate({left: '+=80%'}, 'fast');

    firstPromo.mouseenter(function() {
        firstPromo.animate({left: '+=50%'}, 'fast');
    });
    firstPromo.mouseleave(function() {
        firstPromo.animate({left: '-=50%'}, 'slow');
    });
    firstPromo.on('click', function() {
        firstPromo.animate({left: '-=100%'}, 'fast');
        setTimeout(function() {
            window.location.href = "martialarts.html";
          }, 350);
    });

    secondPromo.mouseenter(function() {
        secondPromo.animate({left: '+=35%'}, 'fast');
    });
    secondPromo.mouseleave(function() {
        secondPromo.animate({left: '-=35%'}, 'slow');
    });
    secondPromo.on('click', function() {
        secondPromo.animate({left: '-=100%'}, 'fast');
        setTimeout(function() {
            window.location.href = "ourphilosophy.html";
          }, 350);
    });

    thirdPromo.mouseenter(function() {
        thirdPromo.animate({left: '+=20%'}, 'fast');
    });
    thirdPromo.mouseleave(function() {
        thirdPromo.animate({left: '-=20%'}, 'slow');
    });
    thirdPromo.on('click', function() {
        thirdPromo.animate({left: '-=100%'}, 'fast');
        setTimeout(function() {
            window.location.href = "trainings.html";
          }, 350);
    });
});

//Jelentkezési lap
var form = $('#formDiv');
$('#parForApplyBtn').on('click', function() {
    form.slideDown(300);
    $([document.documentElement, document.body]).animate({
        scrollTop: form.offset().top
    }, 400);
});

$('#slideUpApplicationForm').on('click', function() {
    form.slideUp(300);
    form.hide(300);
    $([document.documentElement, document.body]).animate({
        scrollTop: form.offset().top
    }, 400);
});