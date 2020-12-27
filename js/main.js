    





//=======================
//    typed
//========================

var typed = new Typed('.type', {
        strings: [
            "Web Designer", 
            "Web Developer", 
            "Freelancer", 
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true 
    });





//=======================
//    Circle Chart
//========================

$(function(){
 
  $('.circle-chart').circlechart();

});



//=======================
//   Mixitup
//========================

var container = document.querySelector('.protfolio')
        var mixer = mixitup(container, {
            selectors: {
                control: '[our-mixitup]'
            }
        });



//============Fixed Menu====================== 

   $(document).ready(function(){
       $(window).scroll(function(){
           var menuFixed = $(this).scrollTop();
           if(menuFixed>40){
               $('body').addClass('fixed');
           }
           else{
               $('body').removeClass('fixed');
           }
       })
   })

//============Active======================
//$(document).ready(function(){
//    $('.nav li a').click(function(){
//        $(this).addClass('active');
//        $(this).siblings().removeClass('active');
//    });  
//    
//});


//==============Scroll Smuth======================
$('.nav li a').click(function(e){
    e.preventDefault();
    
     var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});



//============Scroll Top======================
   $(document).ready(function(){
       
     $('.top').click(function(){
            $('html, body').animate({
                scrollTop:0
            },2000)
        });
       
       
       $('.top').hide();
       
       $(window).scroll(function(){
           var topButton = $(this).scrollTop();
           
           if(topButton<400){
               $('.top').fadeOut();
           }
           else{
               $('.top').fadeIn();
           }
       });
       
});












