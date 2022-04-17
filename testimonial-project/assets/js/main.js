"user strict";


$('.client-slider-one').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      500:{
        items:1,
        dots: false,
        nav:false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      991:{
        items:1,
        nav:false,
        dots: false
    },
      1199:{
          items:1,
          nav:true,
          dots: false,
          loop:false
      }
  }
})
$('.sync-1-slider').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      500:{
        items:1,
        dots: false,
        nav:false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      991:{
        items:1,
        nav:false,
        dots: false
    },
      1199:{
          items:1,
          nav:true,
          dots: false,
          loop:false
      }
  }
})

var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");
var six = $("#six");
one.owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}