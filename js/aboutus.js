// if hashtag = #about scrolltoabout
window.addEventListener('load', () => {

  //取得hash轉字串
  var hash = window.location.hash.substring(1)
  // console.log(hash)
  switch (hash) {
    case 'about':

      setTimeout(function() {
        scrolltoabout()
      }, 1000);

      break;

    default:
      break;

  }

})
