
/* side-nav */

document.getElementById('btn-nav-control').addEventListener('click',displaySideNav);

window.addEventListener("resize", function(){
  if(window.innerWidth < 1024){
    document.getElementById('side-nav-page').style.display = "none";
  }
});

function displaySideNav(){
  if(document.getElementById('side-nav-page').style.display == "none"){
  document.getElementById('side-nav-page').style.display = "block";
  }else{
  document.getElementById('side-nav-page').style.display = "none";
}
}

/* carousel-b6 */

document.getElementById('btn-next-b6').addEventListener('click',carouselMoveNextBf);
let  customRow = document.getElementsByClassName('custom-row-b6');
function carouselMoveNextBf(){
customCol = document.getElementsByClassName('custom-col-b6');
let pxmov = customCol[0].offsetWidth;
document.getElementById("custom-row-b6").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b6').addEventListener('click',carouselMovePrevBf);
function carouselMovePrevBf(){
customCol = document.getElementsByClassName('custom-col-b6');
pxmov = customCol[0].offsetWidth;
document.getElementById("custom-row-b6").style.transform = "translateX("+0+"px)";
}

/*carousel-b8 */

document.getElementById('btn-next-b8').addEventListener('click',carouselMoveNextBs);
let  customRowBsix = document.getElementsByClassName('custom-row-b8');
function carouselMoveNextBs(){
customColBsix = document.getElementsByClassName('custom-col-b8');
let pxmov = customColBsix[0].offsetWidth;
document.getElementById("custom-row-b8").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b8').addEventListener('click',carouselMovePrevBs);
function carouselMovePrevBs(){
customColRowBsix = document.getElementsByClassName('custom-col-b8');
pxmov = customColRowBsix[0].offsetWidth;
document.getElementById("custom-row-b8").style.transform = "translateX("+0+"px)";
}

/*carousel-b10 */

document.getElementById('btn-next-b10').addEventListener('click',carouselMoveNextBn);
let  customRowBnine = document.getElementsByClassName('custom-row-b10');
function carouselMoveNextBn(){
customColBnine = document.getElementsByClassName('custom-col-b10');
let pxmov = customColBnine[0].offsetWidth;
document.getElementById("custom-row-b10").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b10').addEventListener('click',carouselMovePrevBn);
function carouselMovePrevBn(){
customColRowBnine = document.getElementsByClassName('custom-col-b10');
pxmov = customColRowBnine[0].offsetWidth;
document.getElementById("custom-row-b10").style.transform = "translateX("+0+"px)";
}

/* carousel - b15*/

document.getElementById('btn-next-b15').addEventListener('click',carouselMoveNextBxv);
let  customRowBxv = document.getElementsByClassName('custom-row-b15');
function carouselMoveNextBxv(){
customColBxv = document.getElementsByClassName('custom-col-b15');
let pxmov = customColBxv[0].offsetWidth;
document.getElementById("custom-row-b15").style.transform = "translateX(-"+pxmov+"px)";
}

document.getElementById('btn-prev-b15').addEventListener('click',carouselMovePrevBxv);
function carouselMovePrevBxv(){
customColRowBxv = document.getElementsByClassName('custom-col-b15');
pxmov = customColRowBxv[0].offsetWidth;
document.getElementById("custom-row-b15").style.transform = "translateX("+0+"px)";
}