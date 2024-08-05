
var mainslider = document.querySelector('.slider')
var listHT =  document.querySelector('.list')
var prevbtn =  document.querySelector('.left')
 var nextbtn = document.querySelector('.right')
 var buynow = document.querySelectorAll('.buy')
 var backbtn = document.querySelector('.back')
 var menu = document.querySelector('.menubtn')
 var navbar = document.querySelector('.navshow')
 var nvclose = document.querySelector('.navclose')



   menu.onclick = function(){
      navbar.classList.add('show')
      menu.style.opacity='0'
   }
   nvclose.onclick = function(){
      navbar.classList.remove('show')
      menu.style.opacity='1'
   }

 nextbtn.onclick=function(){
    slideimg('next')
 }
 prevbtn.onclick=function(){
    slideimg('prev')
 }

nextbtn.addEventListener('mouseover',()=>{
    nextbtn.style.opacity='1'
})
nextbtn.addEventListener('mouseout',()=>{
    nextbtn.style.opacity='.5'
})

prevbtn.addEventListener('mouseover',()=>{
    prevbtn.style.opacity='1'
})
prevbtn.addEventListener('mouseout',()=>{
    prevbtn.style.opacity='.5'
})

 var slideimg=(type)=>{
    nextbtn.style.pointerEvents = 'auto'
    prevbtn.style.pointerEvents = 'auto'

    mainslider.classList.remove('next','prev')
    var slidercon = document.querySelectorAll('.slide')
    if(type=='next'){
        listHT.appendChild(slidercon[0])
        mainslider.classList.add('next')
    }else{
        listHT.prepend(slidercon[slidercon.length-1])
        mainslider.classList.add('prev')
    }
 }

 buynow.forEach((button)=>{
    button.onclick= function(){
        mainslider.classList.remove('prev','next')
        mainslider.classList.add('showdetails')
    }
 })
 
 backbtn.onclick=function(){
    mainslider.classList.remove('showdetails')
 }
    // deleintervel=setInterval(time,4000)
    // function time(){
    //     slideimage('next')
    // }
    // time()