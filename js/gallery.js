$(document).ready(function() {
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
  $grid.imagesLoaded().progress(function() {

    $grid.masonry('layout');

  });

  // gallery button
  $('#all').on('click', () => {

    show('all')

  })
  $('#dress').on('click', () => {

    show('dress')

  })
  $('#family').on('click', () => {

    show('family')

  })

  $('#wedding').on('click', () => {

    show('wedding')

  })

  $('#dynamic').on('click', () => {

    show('dynamic')

  })

  function show(phototype) {

    switch (phototype) {

      case 'all':
        $('#all').css('color', '#fff')
        $('#all').css('background', '#4a4a4a')

        $('.grid-item').css('display', 'block')
        $grid.masonry('layout');
        break;

      case 'dress':
        // console.log('dress')
        $('#dress').css('color', '#fff')
        $('#dress').css('background', '#4a4a4a')
        $('.dress').css('display', 'block')
        $('.family').css('display', 'none')
        $('.wedding').css('display', 'none')
        $('.dynamic').css('display', 'none')
        $grid.masonry('layout');
        break;

      case 'family':
        // console.log('family')
        $('#family').css('color', '#fff')
        $('#family').css('background', '#4a4a4a')
        $('.dress').css('display', 'none')
        $('.family').css('display', 'block')
        $('.wedding').css('display', 'none')
        $('.dynamic').css('display', 'none')
        $grid.masonry('layout');
        break;

      case 'wedding':
        // console.log('weeding')
        $('#wedding').css('color', '#fff')
        $('#wedding').css('background', '#4a4a4a')
        $('.dress').css('display', 'none')
        $('.family').css('display', 'none')
        $('.wedding').css('display', 'block')
        $('.dynamic').css('display', 'none')
        $grid.masonry('layout');
        break;

      case 'dynamic':
        // console.log('dynamic')
        $('#dynamic').css('color', '#fff')
        $('#dynamic').css('background', '#4a4a4a')
        $('.dress').css('display', 'none')
        $('.family').css('display', 'none')
        $('.wedding').css('display', 'none')
        $('.dynamic').css('display', 'block')
        $grid.masonry('layout');
        break;

      default:
        break;

    }
  }

  $('#all').on('click', () => {

    backcolor('all')

  })
  $('#dress').on('click', () => {

    backcolor('dress')

  })
  $('#family').on('click', () => {

    backcolor('family')

  })

  $('#wedding').on('click', () => {

    backcolor('wedding')

  })

  $('#dynamic').on('click', () => {

    backcolor('dynamic')

  })

  function backcolor(colortype) {
    switch (colortype) {
      case 'all':

      $('#dress').css('color', '#4a4a4a')
      $('#dress').css('background', '#fff')
      $('#family').css('color', '#4a4a4a')
      $('#family').css('background', '#fff')
      $('#wedding').css('color', '#4a4a4a')
      $('#wedding').css('background', '#fff')
      $('#dynamic').css('color', '#4a4a4a')
      $('#dynamic').css('background', '#fff')
        break;

      case 'dress':
      $('#all').css('color', '#4a4a4a')
      $('#all').css('background', '#fff')
      $('#family').css('color', '#4a4a4a')
      $('#family').css('background', '#fff')
      $('#wedding').css('color', '#4a4a4a')
      $('#wedding').css('background', '#fff')
      $('#dynamic').css('color', '#4a4a4a')
      $('#dynamic').css('background', '#fff')
        break;

      case 'family':
      $('#all').css('color', '#4a4a4a')
      $('#all').css('background', '#fff')
      $('#dress').css('color', '#4a4a4a')
      $('#dress').css('background', '#fff')
      $('#wedding').css('color', '#4a4a4a')
      $('#wedding').css('background', '#fff')
      $('#dynamic').css('color', '#4a4a4a')
      $('#dynamic').css('background', '#fff')
        break;

      case 'wedding':
      $('#all').css('color', '#4a4a4a')
      $('#all').css('background', '#fff')
      $('#dress').css('color', '#4a4a4a')
      $('#dress').css('background', '#fff')
      $('#family').css('color', '#4a4a4a')
      $('#family').css('background', '#fff')
      $('#dynamic').css('color', '#4a4a4a')
      $('#dynamic').css('background', '#fff')
        break;

      case 'dynamic':
      $('#all').css('color', '#4a4a4a')
      $('#all').css('background', '#fff')
      $('#dress').css('color', '#4a4a4a')
      $('#dress').css('background', '#fff')
      $('#family').css('color', '#4a4a4a')
      $('#family').css('background', '#fff')
      $('#wedding').css('color', '#4a4a4a')
      $('#wedding').css('background', '#fff')
        break;

      default:
      break;
    }

  }

});
