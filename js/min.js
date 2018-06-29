//wrapper-video
var wrapper = document.getElementById('wrapper');

//header & hambugerlist
var header = document.getElementById('header');
var menuButton = document.getElementById('menuButton');
var menulist = document.getElementById('menulist');
var menu = document.getElementById('menu');
var contant = document.getElementById('contant');


//cloth
var clothleft = document.getElementById('clothleft');
var clothright = document.getElementById('clothright');


// hambuger button event
// menuButton.addEventListener('click', openMenu);
menuButton.addEventListener('click', changeIcon);

function changewrapper() {
  wrapper.className = 'wrapper-next';
}


function addvideocss() {
  video.className = 'video-wrapper-next'
}

function movewraplogo() {
  wraplogo.className = 'wrapper-logo-next';
}

function movewraptext() {
  wraptext.className = 'wrapper-context-next ';
  setTimeout(function () {

     wraptext.style.display= 'none'
  }, 300);
  //delete wrapper-context after animation
}



// function openMenu() {
//   if (menu.className.indexOf('menu open') >= 0) {
//     menu.className = 'menu';
//   } else {
//     menu.className = 'menu open';
//   }
// }

function changeIcon() {

  if (menuButton.className.indexOf('menu-button-close') >= 0) {
    menuButton.className = 'menu-button';
    menulist.className = 'menu-list-out';
    setTimeout(function () {
       menulist.className = 'menu-list';
    }, 300);
   //return to menu-list after animation

  } else {
    menuButton.className = 'menu-button-close';
    menulist.className = 'menu-list-in';
  }

}

//go to about & close hanbuger
function gotoabout() {

  if(document.body.clientWidth > 600){
    window.scrollTo({
    top: 600,
    behavior: "smooth"
  })
}else{
    window.scrollTo({
    top: 450,
    behavior: "smooth"
  })
}
  menuButton.className = 'menu-button';
  menulist.className = 'menu-list-out';
  setTimeout(function () {
     menulist.className = 'menu-list';
  }, 300);
}

// just scroll to about (paging to index-nolanding)

function scrolltoabout() {

  if(document.body.clientWidth > 600){
    window.scrollTo({
    top: 600,
    behavior: "smooth"
  })
}else{
    window.scrollTo({
    top: 450,
    behavior: "smooth"
  })
}

}

// if hashtag = #about scrolltoabout

window.addEventListener('load',() => {

   //取得hash轉字串
   var hash = window.location.hash.substring(1)
   // console.log(hash)
   switch (hash) {
     case 'about':

       scrolltoabout()
       break;

     default:
       break;

   }

})


function ClothOn() {
  clothright.className = 'cloth-right-on';
  clothleft.className = 'cloth-left-on';
}


window.addEventListener('scroll',headerdown)

function headerdown() {

   if( document.body.clientWidth > 860 && document.documentElement.scrollTop > 300){

     header.className = 'header-down'
     // menu.style.padding = '0px 65px'

   }else{

     header.className = 'header-top'
     // menu.style.padding = '30px 65px'

   }
}

//loading 1sec to page （animation 有循環播放）

var loading = document.getElementById('loading')

  setTimeout(function () {
     loading.style.display = 'none';
  }, 1000);
