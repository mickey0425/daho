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

var footer = document.getElementById('footer')



// landing to index event
video.addEventListener('click', changewrapper);
video.addEventListener('click', addvideocss);
video.addEventListener('click', addheadercss);
video.addEventListener('click', addcontantcss);
video.addEventListener('click', ClothOn);
video.addEventListener('click',showfooter)

video.addEventListener('click', movewraplogo);
video.addEventListener('click', movewraptext);
video.addEventListener('click', movewrapbtn);

wrapbtn.addEventListener('click', changewrapper);
wrapbtn.addEventListener('click', addvideocss);
wrapbtn.addEventListener('click', addheadercss);
wrapbtn.addEventListener('click', addcontantcss);
wrapbtn.addEventListener('click', ClothOn);
wrapbtn.addEventListener('click',showfooter)

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
  header.className = 'header-next'

  setTimeout(function () {
     window.addEventListener('scroll',headerdown)
  }, 500)

  // return new Promise(function(resolve, reject) {
  //     console.log('doSomething1 end')
  //     resolve(1)
  // })
}

function showfooter() {

  setTimeout(function () {
     footer.style.display='block'
  }, 500)

}

function addcontantcss() {
  contant.className = 'contant-next';
  setTimeout(function () {
     contant.className = 'contant-next-index';
  }, 500);
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

function ClothOn() {
  clothright.className = 'cloth-right-on';
  clothleft.className = 'cloth-left-on';
}

// window.addEventListener('scroll',headerdown)


function headerdown() {

   if( document.body.clientWidth > 860 && document.documentElement.scrollTop > 300 ){
     header.className = 'header-down'
     // addheadercss().then(headerdown)
   }else{
     header.className = 'header-top'
     // addheadercss().then(headertop)

   }
}

function controlheader(){

  addheadercss().then(headerdown)

}

// function doSomething1(){
//   console.log('doSomething1 start')
//   return new Promise(function(resolve, reject) {
//       console.log('doSomething1 end')
//       resolve(1)
//   })
// }
//
// function doSomething2(){
//   console.log('doSomething2')
//   return 2
// }
//
// function finalThing(value){
//   console.log('finalThing')
//   console.log(value)
//   return 0
// }
//
// //第1種傳入參數
// doSomething1().then(doSomething2).then(finalThing)
