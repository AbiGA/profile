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


// images= [
//   {
//     url:  "../../../assets/Hero-Image.png",
//     caption: "Jolven",
//     detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
//   },
//   {
//     url: "../../../assets/Crack.png",
//     caption: "Jolven",
//     detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
//   },
//   {
//     url:  "../../../assets/Hero-Image.png",
//     caption: "Jolven",
//     detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
//   },
//   {
//     url:  "../../../assets/Hero-Image.png",
//     caption: "Jolven",
//     detail: "It's Classified How To Utilize Free Classified Ad Sites To Boost Business"
//   }
// ]


  ngOnInit() {
    $(document).ready(function(){
      $(function() {
        window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("arrow").style.display = "block";
  } else {
    document.getElementById("arrow").style.display = "none";
  }
}
       var body = $('.menu-text');
        var backgrounds;
        function detect(x) {
          if (x.matches) { // If media query matches
            backgrounds = new Array(
              'url(../../../assets/Hero-Image_mobile.png)',
              'url(../../../assets/MCrack.png)'
              );
          } else {
            backgrounds = new Array(
              'url(../../../assets/Hero-Image.png)',
              'url(../../../assets/Crack.png)'
              );
          }
        }


          var x = window.matchMedia("(max-width: 678px)")
          detect(x) // Call listener function at run time
          x.addListener(detect) // Attach listener function on state changes
        var current = 0;
        
        function nextBackground() {
        body.css(
        'background',
        backgrounds[current = ++current % backgrounds.length]
        );
        document.getElementById("menu-text").style.backgroundRepeat="none";
        document.getElementById("menu-text").style.backgroundSize="cover";
        setTimeout(nextBackground, 5000);
        }
        setTimeout(nextBackground, 5000);
        body.css('background', backgrounds[0]);
        document.getElementById("menu-text").style.backgroundRepeat="none";
        document.getElementById("menu-text").style.backgroundSize="cover";
        });

      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable td").filter(function() {
          if ($(this).text().toLowerCase().indexOf(value) > -1){
            $(this).css("visibility", "visible");
          }
         else{
          $(this).css("visibility", "hidden");
         }
        });
      });
    });
  }

search (c) {
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("txt-search");
    filter = c.toLowerCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
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
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("txt-search");
    filter = c.toLowerCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
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
 filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("images");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    this.w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
  }
}

w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

  myFunction() {
    var input, filter, table, tr, td1,td2,td3,td4,td5,td6,td7,td8,td9,td10, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[2];
      td4 = tr[i].getElementsByTagName("td")[3];
      td5 = tr[i].getElementsByTagName("td")[4];
      td6 = tr[i].getElementsByTagName("td")[5];
      td7 = tr[i].getElementsByTagName("td")[6];
      td8 = tr[i].getElementsByTagName("td")[7];
      td9 = tr[i].getElementsByTagName("td")[8];
      td10 = tr[i].getElementsByTagName("td")[9];
      if (td1) {
        txtValue = td1.textContent || td1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
      if (td2) {
        txtValue = td2.textContent || td2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td3) {
        txtValue = td3.textContent || td3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td4) {
        txtValue = td4.textContent || td4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td5) {
        txtValue = td5.textContent || td5.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td6) {
        txtValue = td6.textContent || td6.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }    
      if (td7) {
        txtValue = td7.textContent || td7.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td8) {
        txtValue = td8.textContent || td8.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td9) {
        txtValue = td9.textContent || td9.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
      if (td10) {
        txtValue = td10.textContent || td10.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }

  sh1() {
    document.getElementById("p1").style.display="inline-block";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
  //  document.getElementById("p4").style.display="none";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="1";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="0.5";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="0.5";

    document.getElementById("menu1").style.opacity="1";
    document.getElementById("menu2").style.opacity="0.5";
    document.getElementById("menu3").style.opacity="0.5";
  //  document.getElementById("menu4").style.opacity="0.5";

    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }
  sh2() {
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="inline-block";
    document.getElementById("p3").style.display="none";
  //  document.getElementById("p4").style.display="none";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="0.5";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="1";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="0.5";

    document.getElementById("menu1").style.opacity="0.5";
    document.getElementById("menu2").style.opacity="1";
    document.getElementById("menu3").style.opacity="0.5";
   // document.getElementById("menu4").style.opacity="0.5";
    document.getElementById("readspan").style.display="block";
    document.getElementById("readmore").style.display="none";
  }
  sh3() {
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="inline-block";
   // document.getElementById("p4").style.display="none";
    document.getElementById("01").style.color="white";
    document.getElementById("01").style.opacity="0.5";
    document.getElementById("02").style.color="white";
    document.getElementById("02").style.opacity="0.5";
    document.getElementById("03").style.color="white";
    document.getElementById("03").style.opacity="1";

    document.getElementById("menu1").style.opacity="0.5";
    document.getElementById("menu2").style.opacity="0.5";
    document.getElementById("menu3").style.opacity="1";
    //document.getElementById("menu4").style.opacity="0.5";
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
    
    document.getElementById("intro").style.color="white";
    document.getElementById("agency").style.color="#f1b440";
    document.getElementById("tip").style.color="#f1b440";
  }

  msh2() {
    document.getElementById("mp1").style.display="none";
    document.getElementById("mp2").style.display="block";
    document.getElementById("mp3").style.display="none";

    document.getElementById("intro").style.color="#f1b440";
    document.getElementById("agency").style.color="white";
    document.getElementById("tip").style.color="#f1b440";
  }
  msh3() {
    document.getElementById("mp1").style.display="none";
    document.getElementById("mp2").style.display="none";
    document.getElementById("mp3").style.display="block";

    document.getElementById("intro").style.color="#f1b440";
    document.getElementById("agency").style.color="#f1b440";
    document.getElementById("tip").style.color="white";
  }

  cap1() {
    $("#cap1").toggle();
    document.getElementById('rw1').scrollIntoView({
    behavior: 'smooth'
  });
//    document.getElementById("cap1").style.display="block";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
    //document.getElementById("rw2").style.display="none";
  }
  open1 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap1").style.display="none";
  }
  cap2() {
    $("#cap2").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    // document.getElementById("cap2").style.display="block";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
   // document.getElementById("rw2").style.display="none";
  }
  open2 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap2").style.display="none";
  }
  cap3() {
    $("#cap3").toggle();
    document.getElementById('rw1').scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    // document.getElementById("cap3").style.display="block";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  //  document.getElementById("rw2").style.display="none";
  }
  open3 () {
    document.getElementById("rw1").style.display="flex";
   // document.getElementById("rw2").style.display="flex";
    document.getElementById("cap3").style.display="none";
  }
  cap4() {
    $("#cap4").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    // document.getElementById("cap4").style.display="block";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  //  document.getElementById("rw2").style.display="none";
  }
  open4 () {
    document.getElementById("rw1").style.display="flex";
   // document.getElementById("rw2").style.display="flex";
    document.getElementById("cap4").style.display="none";
  }
  cap5() {
    $("#cap5").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    // document.getElementById("cap5").style.display="block";
    document.getElementById("cap6").style.display="none";
    document.getElementById("rw1").style.display="none";
  //  document.getElementById("rw2").style.display="none";
  }
  open5 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap5").style.display="none";
  }
  cap6() {
    $("#cap6").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    // document.getElementById("cap6").style.display="block";
    document.getElementById("rw1").style.display="none";
   // document.getElementById("rw2").style.display="none";
  }
  open6 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap6").style.display="none";
  }

  cap7() {
    $("#cap7").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    // document.getElementById("cap6").style.display="block";
    document.getElementById("rw1").style.display="none";
   // document.getElementById("rw2").style.display="none";
  }
  open7 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap7").style.display="none";
  }

  cap8() {
    $("#cap8").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("cap7").style.display="none";
    // document.getElementById("cap6").style.display="block";
    document.getElementById("rw1").style.display="none";
   // document.getElementById("rw2").style.display="none";
  }
  open8 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap8").style.display="none";
  }
  cap9() {
    $("#cap9").toggle();
    document.getElementById('rw1').scrollIntoView();
    document.getElementById("cap1").style.display="none";
    document.getElementById("cap2").style.display="none";
    document.getElementById("cap3").style.display="none";
    document.getElementById("cap4").style.display="none";
    document.getElementById("cap5").style.display="none";
    document.getElementById("cap6").style.display="none";
    document.getElementById("cap7").style.display="none";
    document.getElementById("cap8").style.display="none";
    // document.getElementById("cap6").style.display="block";
    document.getElementById("rw1").style.display="none";
   // document.getElementById("rw2").style.display="none";
  }
  open9 () {
    document.getElementById("rw1").style.display="flex";
  //  document.getElementById("rw2").style.display="flex";
    document.getElementById("cap9").style.display="none";
  }
  scroll () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
