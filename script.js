const navBar = document.querySelector('#navSite');
const about = document.querySelector('#about');


const scrolltopButton = document.querySelector('#scroll-top-button');

window.onscroll=function(){
  if(window.pageYOffset>200){
    scrolltopButton.classList.add("show");
  }else{
    scrolltopButton.classList.remove("show");
  }
}


