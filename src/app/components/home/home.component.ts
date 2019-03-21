import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
   // this.filterSelection("all");
  }
  mySlideOptions={
    items: 1,
    dots: true,
    nav: false,
    autoplay : true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    margin: 20,
    loop: false,
   navText : ["<i style='display: none;' class='fa fa-chevron-left'></i>","<i style='display: none;' class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  };
//   mySlideImages = [1,2,3].map((i)=> 'https://picsum.photos/640/480?image=${i}');
// myCarouselImages =[1,2,3,4,5,6].map((i)=>'https://picsum.photos/640/480?image=${i}');
// mySlideOptions={
//   items: 3, 
//   dots: false,
//   nav: true,
//   navText: ["<i style='position: absolute;top: 45%;left: 2%;' class='fa fa-long-arrow-left'></i>","<i style='position: absolute;top: 45%;right: 2%;' class='fa fa-long-arrow-right'></i>"],
//   loop: true
// };
// myCarouselOptions={items: 3, dots: true, nav: true};


images= [
  {
    url:  "../../../assets/Hero-Image.png",
    caption: "Jolven",
    detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
  },
  {
    url: "../../../assets/Crack.png",
    caption: "Jolven",
    detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
  },
  {
    url:  "../../../assets/Hero-Image.png",
    caption: "Jolven",
    detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
  },
  {
    url:  "../../../assets/Hero-Image.png",
    caption: "Jolven",
    detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
  }
]


  ngOnInit() {
    $(document).ready(function(){
      $(function() {

        $("#menu1, #menu2, #menu3").mouseover(function() {
          document.getElementById("menu1").style.webkitAnimationPlayState = "paused";
          document.getElementById("menu1").style.animationPlayState = "paused";
          document.getElementById("menu2").style.webkitAnimationPlayState = "paused";
          document.getElementById("menu2").style.animationPlayState = "paused";
          document.getElementById("menu3").style.webkitAnimationPlayState = "paused";
          document.getElementById("menu3").style.animationPlayState = "paused";
          $("#menu1, #menu2, #menu3").removeClass("jump");
        });

        $("#div1").mouseover(function(){
          document.getElementById("div1").style.webkitAnimationPlayState = "paused";
          document.getElementById("div2").style.webkitAnimationPlayState = "paused";
          document.getElementById("div1").style.animationPlayState = "paused";
          document.getElementById("div2").style.animationPlayState = "paused";
        });
        $("#div1").mouseleave(function(){
          document.getElementById("div1").style.webkitAnimationPlayState = "running";
          document.getElementById("div2").style.webkitAnimationPlayState = "running";
          document.getElementById("div1").style.animationPlayState = "running";
          document.getElementById("div2").style.animationPlayState = "running";
        });

        $("#div2").mouseover(function(){
          document.getElementById("div1").style.webkitAnimationPlayState = "paused";
          document.getElementById("div2").style.webkitAnimationPlayState = "paused";
          document.getElementById("div1").style.animationPlayState = "paused";
          document.getElementById("div2").style.animationPlayState = "paused";
        });
        $("#div2").mouseleave(function(){
          document.getElementById("div1").style.webkitAnimationPlayState = "running";
          document.getElementById("div2").style.webkitAnimationPlayState = "running";
          document.getElementById("div1").style.animationPlayState = "running";
          document.getElementById("div2").style.animationPlayState = "running";
        });

        window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
}
      //  var body = $('.menu-text');
      //   var backgrounds;
      //   function detect(x) {
      //     if (x.matches) {
      //       backgrounds = new Array(
      //         'url(../../../assets/Hero-Image_mobile.png)',
      //         'url(../../../assets/MCrack.png)'
      //         );
      //     } else {
      //       backgrounds = new Array(
      //         'url(../../../assets/isometric grid_Final render-low.mp4)',
      //         'url(../../../assets/Crack.png)'
      //         );
      //     }
      //   }


      //     var x = window.matchMedia("(max-width: 678px)")
      //     detect(x) // Call listener function at run time
      //     x.addListener(detect) // Attach listener function on state changes
      //   var current = 0;
        
      //   function nextBackground() {
      //   body.css(
      //   'background',
      //   backgrounds[current = ++current % backgrounds.length]
      //   );
      //   document.getElementById("menu-text").style.backgroundRepeat="none";
      //   document.getElementById("menu-text").style.backgroundSize="cover";
      //   setTimeout(nextBackground, 6000);
      //   }
      //   setTimeout(nextBackground, 6000);
      //   body.css('background', backgrounds[0]);
      //   document.getElementById("menu-text").style.backgroundRepeat="none";
      //   document.getElementById("menu-text").style.backgroundSize="cover";
        });
    });
  }

search (c, dy) {
  var filter, ul, li, a, i, txtValue;
    var ir= document.getElementById("myUL1").getElementsByTagName("li")
    for (i = 0; i < ir.length; i++) {
      ir[i].style.color="black";
    }
    document.getElementById(dy).style.color="#f1b440";
    filter = c.toLowerCase();
    ul = document.getElementById("myrow");
    li = ul.getElementsByClassName("col-6");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("img")[0];
        txtValue = a.className;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
search1 (event: any) {
  var c: string = '';
  c= event.target.value;
  var filter, ul, li, a, i, txtValue;
    filter = c.toLowerCase();
    ul = document.getElementById("myrow");
    li = ul.getElementsByClassName("col-6");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("img")[0];
        txtValue = a.className;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
  sh1() {
    document.getElementById("p1").style.display="inline-block";
    document.getElementById("deskul").style.display="inline-block";

    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="1";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="0.5";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="0.5";

    document.getElementById("menu1").style.opacity="1";
    document.getElementById("menu2").style.opacity="0.5";
    document.getElementById("menu3").style.opacity="0.5";

    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }
  sh2() {
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="inline-block";
    document.getElementById("deskul").style.display="inline-block";
    document.getElementById("p3").style.display="none";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="0.5";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="1";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="0.5";

    document.getElementById("menu1").style.opacity="0.5";
    document.getElementById("menu2").style.opacity="1";
    document.getElementById("menu3").style.opacity="0.5";

    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }
  sh3() {
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="inline-block";
    document.getElementById("deskul").style.display="inline-block";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="0.5";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="0.5";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="1";

    document.getElementById("menu1").style.opacity="0.5";
    document.getElementById("menu2").style.opacity="0.5";
    document.getElementById("menu3").style.opacity="1";

    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }
  sh4() {
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";

    document.getElementById("menu1").style.opacity="0.5";
    document.getElementById("menu2").style.opacity="0.5";
    document.getElementById("menu3").style.opacity="0.5";
    document.getElementById("menu4").style.opacity="1";
    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }

  readmore () {
    document.getElementById("readmore").style.display="block";
    document.getElementById("readspan").style.display="none";
  }

  msh1() {
    document.getElementById("mp1").style.display="block";
    document.getElementById("mp2").style.display="none";
    document.getElementById("mp3").style.display="none";
    
    document.getElementById("intro").style.color="black";
    document.getElementById("agency").style.color="#f1b440";
    document.getElementById("tip").style.color="#f1b440";
  }

  msh2() {
    document.getElementById("mp1").style.display="none";
    document.getElementById("mp2").style.display="block";
    document.getElementById("mp3").style.display="none";

    document.getElementById("intro").style.color="#f1b440";
    document.getElementById("agency").style.color="black";
    document.getElementById("tip").style.color="#f1b440";
  }
  msh3() {
    document.getElementById("mp1").style.display="none";
    document.getElementById("mp2").style.display="none";
    document.getElementById("mp3").style.display="block";

    document.getElementById("intro").style.color="#f1b440";
    document.getElementById("agency").style.color="#f1b440";
    document.getElementById("tip").style.color="black";
  }

  cap1() {
    $("#cap1").toggle();
    document.getElementById('rw1').scrollIntoView({
    behavior: 'smooth'
  });
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open1 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap1").style.display="none";
  }
  cap2() {
    $("#cap2").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open2 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap2").style.display="none";
  }
  cap3() {
    $("#cap3").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open3 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap3").style.display="none";
  }
  cap4() {
    $("#cap4").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open4 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap4").style.display="none";
  }
  cap5() {
    $("#cap5").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open5 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap5").style.display="none";
  }
  cap6() {
    $("#cap6").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open6 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap6").style.display="none";
  }

  cap7() {
    $("#cap7").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open7 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap7").style.display="none";
  }

  cap8() {
    $("#cap8").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("cap7").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open8 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap8").style.display="none";
  }
  cap9() {
    $("#cap9").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("cap7").style.display="none";
    document.getElementById("cap8").style.display="none";
    document.getElementById("rw1").style.display="none";
  }
  open9 () {
    document.getElementById("rw1").style.display="flex";
    document.getElementById("cap9").style.display="none";
  }
  
  scroll () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  show1 () {
    if (document.getElementById('read_more_testimonial_1').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_1').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_1').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
    }
  }

  show2 () {
    if (document.getElementById('read_more_testimonial_2').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_2').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_2').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
    }
  }

  show3 () {
    if (document.getElementById('read_more_testimonial_3').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_3').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_3').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
    }
  }

  show4 () {
    if (document.getElementById('text_to_hide_4').style.display != "block") {
      document.getElementById('text_to_hide_4').style.display = "block";
    }
    else {
      document.getElementById('text_to_hide_4').style.display = "none";
    }
    if (document.getElementById('read_more_testimonial_4').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_4').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_4').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
    }
  }

  show5 () {
    if (document.getElementById('read_more_testimonial_5').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_5').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_5').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
    }
  }

  show6 () {
    if (document.getElementById('read_more_testimonial_6').innerHTML === "Read More..."){
      document.getElementById('read_more_testimonial_6').innerHTML = "Read Less...";
      document.getElementById('text_to_hide_6').style.display="block";
    }
    else {
      document.getElementById('read_more_testimonial_6').innerHTML = "Read More...";
      document.getElementById('text_to_hide_6').style.display="none";
      document.getElementById('read_more_testimonial_1').innerHTML = "Read More...";
      document.getElementById('text_to_hide_1').style.display="none";
      document.getElementById('read_more_testimonial_2').innerHTML = "Read More...";
      document.getElementById('text_to_hide_2').style.display="none";
      document.getElementById('read_more_testimonial_3').innerHTML = "Read More...";
      document.getElementById('text_to_hide_3').style.display="none";
      document.getElementById('read_more_testimonial_4').innerHTML = "Read More...";
      document.getElementById('text_to_hide_4').style.display="none";
      document.getElementById('read_more_testimonial_5').innerHTML = "Read More...";
      document.getElementById('text_to_hide_5').style.display="none";
    }
  }

}
