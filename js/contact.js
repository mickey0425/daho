$(document).ready(function() {

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

  $('#push').on('click',()=>{
     $('#bounce').css('display','block')
  })

  $('#back').on('click',()=>{



  })

});
