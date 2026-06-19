window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "#0f172a";
    }else{
        nav.style.background = "rgba(255,255,255,0.08)";
    }

});