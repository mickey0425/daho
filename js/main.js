//wrapper-video
var wrapper = document.getElementById('wrapper');
var video = document.getElementById('video');

//header & hambugerlist
var header = document.getElementById('header');
var menuButton = document.getElementById('menuButton');
var menulist = document.getElementById('menulist');
var menu = document.getElementById('menu');
var contant = document.getElementById('contant');

//gallery-button
// var gfamily = document.getElementsByClassName('gallery-family')
// var gwedding = document.getElementsByClassName('gallery-wedding')
// var gvideo = document.getElementsByClassName('gallery-video')
// var grecording = document.getElementsByClassName('gallery-recording')

//cloth
var clothleft = document.getElementById('clothleft');
var clothright = document.getElementById('clothright');



video.addEventListener('click', changewrapper);
video.addEventListener('click', addvideocss);
video.addEventListener('click', addheadercss);
video.addEventListener('click', addcontantcss);

menuButton.addEventListener('click', openMenu);
menuButton.addEventListener('click', changeIcon);
video.addEventListener('click', ClothOn);

// gfamily.addEventListener('onmouseover', galleryhover)
// gwedding.addEventListener('onmouseover', galleryhover)
// gvideo.addEventListener('onmouseover', galleryhover)
// grecording.addEventListener('onmouseover', galleryhover)



function changewrapper() {
  wrapper.className = 'wrapper-next';
}

function addvideocss() {
  video.className = 'video-wrapper-next';

}

function addheadercss() {
  header.className = 'header-next';
}

function addcontantcss() {
  contant.className = 'contant-next';
}

function openMenu() {
  if (menu.className.indexOf('menu open') >= 0) {
    menu.className = 'menu';
  } else {
    menu.className = 'menu open';
  }
}

function changeIcon() {

  if (menuButton.className.indexOf('menu-button close') >= 0) {
    menuButton.className = 'menu-button';
    menulist.className = 'menu-list';

  } else {
    menuButton.className = 'menu-button close';
    menulist.className = 'menu-list-next';
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

//galleryhover

// function galleryhover (){
//
// }
