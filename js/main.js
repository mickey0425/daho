//wrapper-video
var wrapper = document.getElementById('wrapper');
var video = document.getElementById('video');

var wraplogo = document.getElementById('wraplogo')
var wraptext = document.getElementById('wraptext')
var wrapbtn  = document.getElementById('wrapbtn')

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

// landing to index event
video.addEventListener('click', changewrapper);
video.addEventListener('click', addvideocss);
video.addEventListener('click', addheadercss);
video.addEventListener('click', addcontantcss);
video.addEventListener('click', ClothOn);

video.addEventListener('click', movewraplogo);
video.addEventListener('click', movewraptext);
video.addEventListener('click', movewrapbtn);

wrapbtn.addEventListener('click', changewrapper);
wrapbtn.addEventListener('click', addvideocss);
wrapbtn.addEventListener('click', addheadercss);
wrapbtn.addEventListener('click', addcontantcss);
wrapbtn.addEventListener('click', ClothOn);

wrapbtn.addEventListener('click', movewraplogo);
wrapbtn.addEventListener('click', movewraptext);
wrapbtn.addEventListener('click', movewrapbtn);


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

function movewrapbtn() {
  wrapbtn.style.display = 'none';
}


function addheadercss() {
  header.className = 'header-next';
}

function addcontantcss() {
  contant.className = 'contant-next';
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
}

function ClothOn() {
  clothright.className = 'cloth-right-on';
  clothleft.className = 'cloth-left-on';
}


window.addEventListener('scroll',headerdown)

function headerdown() {

   if(document.documentElement.scrollTop > 200){

     header.className = 'header-next'

   }else{

     header.className = 'header'

   }

}
