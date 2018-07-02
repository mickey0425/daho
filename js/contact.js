$(document).ready(function() {

//check checkobx (打勾)
  $('.check').on('click', check)
  function check() {

    var name = $(this).attr('class')
    // console.log(name)
    switch (name) {
      case 'check':
        $(this).addClass('checkback')
        break;
      case 'check checkback':
        $(this).removeClass('checkback')
      default:
        break;
    }
  }

//送出選單

  $('#push').on('click',()=>{
     // $('#thanks').css('display','block')
     $('#bounce').css('display','block')
     $('#thanks').css('display','block')

  })

  $('#bounce').on('click',()=>{
    // console.log(event.target.className)
    var targetname = event.target.className

    switch (targetname) {
      case 'bounce':
        // console.log('test')
        $('#bounce').css('display','none')
        $('#thanks').css('display','none')
        break;

      default:
      $('#bounce').css('display','block')
      $('#thanks').css('display','block')

    }


  })










});
