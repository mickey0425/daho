var phbtn1 = document.getElementById('phbtn1')
var phbtn2 = document.getElementById('phbtn2')
var phbtn3 = document.getElementById('phbtn3')
var phbtn4 = document.getElementById('phbtn4')
var phbtn5 = document.getElementById('phbtn5')

var galleryph1 = document.getElementById('galleryph1')
var galleryph2 = document.getElementById('galleryph2')
var galleryph3 = document.getElementById('galleryph3')
var galleryph4 = document.getElementById('galleryph4')
var galleryph5 = document.getElementById('galleryph5')

phbtn1.addEventListener('click',changephoto1)
phbtn2.addEventListener('click',changephoto2)
phbtn3.addEventListener('click',changephoto3)
phbtn4.addEventListener('click',changephoto4)
phbtn5.addEventListener('click',changephoto5)

function changephoto1(){
    galleryph1.style.display='block'
    galleryph2.style.display='none'
    galleryph3.style.display='none'
    galleryph4.style.display='none'
    galleryph5.style.display='none'

}


function changephoto2(){
    galleryph1.style.display='none'
    galleryph2.style.display='block'
    galleryph3.style.display='none'
    galleryph4.style.display='none'
    galleryph5.style.display='none'

}


function changephoto3(){
    galleryph1.style.display='none'
    galleryph2.style.display='none'
    galleryph3.style.display='block'
    galleryph4.style.display='none'
    galleryph5.style.display='none'

}


function changephoto4(){
    galleryph1.style.display='none'
    galleryph2.style.display='none'
    galleryph3.style.display='none'
    galleryph4.style.display='block'
    galleryph5.style.display='none'

}


function changephoto5(){
    galleryph1.style.display='none'
    galleryph2.style.display='none'
    galleryph3.style.display='none'
    galleryph4.style.display='none'
    galleryph5.style.display='block'

}
