"user strict";

$('.tab-slider').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      430:{
        items:1,
        nav:false,
        dots: false
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
          nav:false,
          loop:false,
          dots: true
      }
  }
})
$('.client-slider').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
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
          nav: true,
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
two.owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  function openCity(evt, cityName) {
    var i, tabcontenttwo, tablinks;
    tabcontenttwo = document.getElementsByClassName("tabcontenttwo");
    for (i = 0; i < tabcontenttwo.length; i++) {
      tabcontenttwo[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }  