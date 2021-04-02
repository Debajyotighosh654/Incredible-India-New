var lastScrollTop = 0;
var previous = 422;
var heade = document.getElementById("header");//navbar = document.getElementById("mainNav");
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrollTop);
    if(scrollTop > lastScrollTop){
        heade.classList.toggle('main');
        heade.style.display="none";
        heade.style.opacity="0";
    }
    else if(scrollTop < lastScrollTop){
        heade.classList.toggle('main');
        heade.style.display = "grid";
        heade.style.opacity="1";
    }
    lastScrollTop = scrollTop;
})