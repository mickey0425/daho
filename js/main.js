
//wrapper-video
var wrapper = document.getElementById('wrapper');
var video = document.getElementById('video');
var touchbar = document.getElementById('touchbar');

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

//about tag
var tag = document.getElementById('abouttag')


// landing to index event
touchbar.addEventListener('click', changewrapper);
touchbar.addEventListener('click', addvideocss);
touchbar.addEventListener('click', addheadercss);
touchbar.addEventListener('click', addcontantcss);
touchbar.addEventListener('click', ClothOn);
touchbar.addEventListener('click',showfooter)

touchbar.addEventListener('click', movewraplogo);
touchbar.addEventListener('click', movewraptext);
touchbar.addEventListener('click', movewrapbtn);
touchbar.addEventListener('click',removetouchbar);

wrapbtn.addEventListener('click', changewrapper);
wrapbtn.addEventListener('click', addvideocss);
wrapbtn.addEventListener('click', addheadercss);
wrapbtn.addEventListener('click', addcontantcss);
wrapbtn.addEventListener('click', ClothOn);
wrapbtn.addEventListener('click',showfooter)

wrapbtn.addEventListener('click', movewraplogo);
wrapbtn.addEventListener('click', movewraptext);
wrapbtn.addEventListener('click', movewrapbtn);
wrapbtn.addEventListener('click',removetouchbar);


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

//remove all touchbar EventListener
function removetouchbar(){

  touchbar.removeEventListener('click', addheadercss);
  touchbar.removeEventListener('click', addcontantcss);

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


  var Y = tag.getBoundingClientRect().y  //abouttag當下距離頂端的距離(需滑動距離)

    var Y0 = window.scrollY    // 當下畫面Ｙ座標
    var dy = Y/5              //每次變量
    var i = 0
    var frequence = setInterval(frame,25);   //動畫頻率

    function frame(){                 //動畫
      if (i == 5) {
         clearInterval(frequence);   //當到達abouttag 停止動畫
      } else {
          Y0 = Y0 + dy                //一次前進dy
          window.scrollTo(0,Y0)
          i++                         //動畫次數＋1
        }
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
// console.log()

function headerdown() {

   if( document.body.clientWidth > 860 && window.scrollY > 300 ){
     header.className = 'header-down'

     // addheadercss().then(headerdown)
   }else{

     header.className = 'header-top'
     // addheadercss().then(headertop)

   }
}


//youtube api
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('muteYouTubeVideoPlayer', {
        playerVars: {
          enablejsapi: 1,
          rel: 0 ,
          muted: 0 ,          //靜音
          autoplay: 1,        // 在讀取時自動播放影片
          controls: 0,        // 在播放器顯示暫停／播放按鈕
          showinfo: 0,        // 隱藏影片標題
          modestbranding: 1,  // 隱藏YouTube Logo
          loop: 1,            // 讓影片循環播放
          fs: 0,              // 隱藏全螢幕按鈕
          cc_load_policty: 0, // 隱藏字幕
          iv_load_policy: 3 ,  // 隱藏影片註解
          autohide: 1 ,        // 當播放影片時隱藏影片控制列
          playlist : 'ClBtyhARYVc', //循環播放表單
          playsinline: 1           //ios 不要全螢幕
        },
        videoId: 'ClBtyhARYVc',
        events: {
            'onReady': function(e){
      // player.pauseVideo();
      // player.playVideo();

      e.target.mute();
	    }
        }
    });

}

// //
// window.onload=function() {
// };
