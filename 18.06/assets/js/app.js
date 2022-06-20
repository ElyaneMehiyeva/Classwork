var backToTop = document.getElementById("backToTop");

window.onscroll = function(){
    if(window.scrollY>120){
        backToTop.style.display = "flex"
    } else{
        backToTop.style.display = "none"
    }
}