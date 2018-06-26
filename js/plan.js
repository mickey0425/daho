$(document).ready(function(){

    $('#plangbtn1').on('click',()=>{
      jump('plang1')
    })
    $('#plangbtn2').on('click',()=>{
      jump('plang2')
    })
    $('#plangbtn3').on('click',()=>{
      jump('plang3')
    })

    $('#plandbtn1').on('click',()=>{
      jump('pland1')
    })
    $('#plandbtn2').on('click',()=>{
      jump('pland2')
    })
    $('#plandbtn3').on('click',()=>{
      jump('pland3')
    })


function jump(plantype) {

  switch (plantype) {
    case 'plang1':
      $('#bounce').css('display','block')
      $('#plang1').css('display','block')
      $('#plang2').css('display','none')
      $('#plang3').css('display','none')
      $('#pland1').css('display','none')
      $('#pland2').css('display','none')
      $('#pland3').css('display','none')

      break;

    case 'plang2':
      $('#bounce').css('display','block')
      $('#plang1').css('display','none')
      $('#plang2').css('display','block')
      $('#plang3').css('display','none')
      $('#pland1').css('display','none')
      $('#pland2').css('display','none')
      $('#pland3').css('display','none')
      break;


    case 'plang3':
      $('#bounce').css('display','block')
      $('#plang1').css('display','none')
      $('#plang2').css('display','none')
      $('#plang3').css('display','block')
      $('#pland1').css('display','none')
      $('#pland2').css('display','none')
      $('#pland3').css('display','none')
      break;

    case 'pland1':
      $('#bounce').css('display','block')
      $('#plang1').css('display','none')
      $('#plang2').css('display','none')
      $('#plang3').css('display','none')
      $('#pland1').css('display','block')
      $('#pland2').css('display','none')
      $('#pland3').css('display','none')
      break;

    case 'pland2':

      $('#bounce').css('display','block')
      $('#plang1').css('display','none')
      $('#plang2').css('display','none')
      $('#plang3').css('display','none')
      $('#pland1').css('display','none')
      $('#pland2').css('display','block')
      $('#pland3').css('display','none')
      break;

    case 'pland3':
      $('#bounce').css('display','block')
      $('#plang1').css('display','none')
      $('#plang2').css('display','none')
      $('#plang3').css('display','none')
      $('#pland1').css('display','none')
      $('#pland2').css('display','none')
      $('#pland3').css('display','block')
      break;

    default:
    break;
  }



}

$('p.close').on('click',()=>{

$('#bounce').css('display','none')

})



  });
