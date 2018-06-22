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

var body = document.body




// hambuger button event
menuButton.addEventListener('click', openMenu);
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



function openMenu() {
  // if (menu.className.indexOf('menu open') >= 0) {
  //   menu.className = 'menu';
  // } else {
  //   menu.className = 'menu open';
  // }
}

function changeIcon() {

  if (menuButton.className.indexOf('menu-button-close') >= 0) {
    menuButton.className = 'menu-button';
    menulist.className = 'menu-list-out';
    setTimeout(function () {
       menulist.className = 'menu-list';
    }, 300);
   //retirn to menu-list after animation

  } else {
    menuButton.className = 'menu-button-close';
    menulist.className = 'menu-list-in';
  }

}

//go to about
function gotoabout() {
    window.scrollTo({
    top: 500,
    behavior: "smooth"
  });
  menuButton.className = 'menu-button';
  menulist.className = 'menu-list-out';
  setTimeout(function () {
     menulist.className = 'menu-list';
  }, 300);
}

//go to index about
function gotoindexabout() {
  gotoindex()
}

// go to index
function gotoindex() {
  window.location.href = '../about.html'
}


function ClothOn() {
  clothright.className = 'cloth-right-on';
  clothleft.className = 'cloth-left-on';
}


window.addEventListener('scroll',headerdown)

function headerdown() {

   if( document.body.clientWidth > 860 && document.documentElement.scrollTop > 200){

     header.className = 'header-down'
     // menu.style.padding = '0px 65px'

   }else{

     header.className = 'header-top'
     // menu.style.padding = '30px 65px'

   }
}
