
$('.owl-project').owlCarousel({   
    loop:true,
    margin:10,     
    loop:true,
    margin:10,
   // autoplay:true,
    //autoplayTimeout:2000,
    //autoplayHoverPause:true,
    navText:['السابق','التالى'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            center:true
        },
        1140:{
         items:2,
         center:true,
         nav:true,
        }      
    }
});
