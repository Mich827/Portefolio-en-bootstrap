
const navbar = document.getElementById("navSite");
const scrollTopButton = document.getElementById("scroll-top-button");

window.onscroll=function(){
    if(window.pageYOffset>200){
        navbar.classList.remove("bg-transparent", "navbar-dark");
        navbar.classList.add("bg-light", "navbar-light");
        scrollTopButton.classList.add("show");
    }
    else{
        navbar.classList.add("bg-transparent", "navbar-dark");
        navbar.classList.remove("bg-light", "navbar-light");
        scrollTopButton.classList.remove("show");
    }
}


