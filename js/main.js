/*carousel-b4 */

document.getElementById('btn-next-b4').addEventListener('click',carouselMoveNextBf);
let  customRow = document.getElementsByClassName('custom-row-b4');
function carouselMoveNextBf(){
  customCol = document.getElementsByClassName('custom-col-b4');
 let pxmov = customCol[0].offsetWidth;
  document.getElementById("custom-row-b4").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b4').addEventListener('click',carouselMovePrevBf);
function carouselMovePrevBf(){
  customCol = document.getElementsByClassName('custom-col-b4');
  pxmov = customCol[0].offsetWidth;
  document.getElementById("custom-row-b4").style.transform = "translateX("+0+"px)";
}

/*carousel-b6 */

document.getElementById('btn-next-b6').addEventListener('click',carouselMoveNextBs);
let  customRowBsix = document.getElementsByClassName('custom-row-b6');
function carouselMoveNextBs(){
  customColBsix = document.getElementsByClassName('custom-col-b6');
 let pxmov = customColBsix[0].offsetWidth;
  document.getElementById("custom-row-b6").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b6').addEventListener('click',carouselMovePrevBs);
function carouselMovePrevBs(){
  customColRowBsix = document.getElementsByClassName('custom-col-b6');
  pxmov = customColRowBsix[0].offsetWidth;
  document.getElementById("custom-row-b6").style.transform = "translateX("+0+"px)";
}

/*carousel-b9 */

document.getElementById('btn-next-b9').addEventListener('click',carouselMoveNextBn);
let  customRowBnine = document.getElementsByClassName('custom-row-b9');
function carouselMoveNextBn(){
  customColBnine = document.getElementsByClassName('custom-col-b9');
 let pxmov = customColBnine[0].offsetWidth;
  document.getElementById("custom-row-b9").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b9').addEventListener('click',carouselMovePrevBn);
function carouselMovePrevBn(){
  customColRowBnine = document.getElementsByClassName('custom-col-b9');
  pxmov = customColRowBnine[0].offsetWidth;
  document.getElementById("custom-row-b9").style.transform = "translateX("+0+"px)";
}
