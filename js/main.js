var wrapper = document.getElementById('wrapper');
var video = document.getElementById('video');
var header = document.getElementById('header');
var contant = document.getElementById('contant');

video.addEventListener('click', changewrapper);
video.addEventListener('click', addvideocss);
video.addEventListener('click', addheadercss);
video.addEventListener('click', addcontantcss);

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
