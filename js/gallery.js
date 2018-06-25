$(document).ready(function(){
//masonry ....
  $('.grid').masonry({

 itemSelector: '.grid-item',
 columnWidth: '.grid-sizer',
 percentPosition: true

});

  var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {

  $grid.masonry('layout');

});

// gallery button
$('#all').on('click',()=>{

  show('all')

})
$('#dress').on('click',()=>{

  show('dress')

})
$('#family').on('click',()=>{

show('family')

})

$('#wedding').on('click',()=>{

show('wedding')

})

$('#dynamic').on('click',()=>{

show('dynamic')

})

function show(phototype){

  switch (phototype) {

    case 'all':

      $('.grid-item').css('display','block')
      $grid.masonry('layout');
      break;

    case 'dress':
    // console.log('dress')
      $('.dress').css('display','block')
      $('.family').css('display','none')
      $('.wedding').css('display','none')
      $('.dynamic').css('display','none')
      $grid.masonry('layout');
      break;

    case 'family':
    // console.log('family')
      $('.dress').css('display','none')
      $('.family').css('display','block')
      $('.wedding').css('display','none')
      $('.dynamic').css('display','none')
      $grid.masonry('layout');
        break;

    case 'wedding':
    // console.log('weeding')
      $('.dress').css('display','none')
      $('.family').css('display','none')
      $('.wedding').css('display','block')
      $('.dynamic').css('display','none')
      $grid.masonry('layout');
        break;

    case 'dynamic':
    // console.log('dynamic')
      $('.dress').css('display','none')
      $('.family').css('display','none')
      $('.wedding').css('display','none')
      $('.dynamic').css('display','block')
      $grid.masonry('layout');
        break;

    default:
      break;

    }
  }


});
