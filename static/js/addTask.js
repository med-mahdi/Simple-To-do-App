


//  -------------------------- Animation For Dashboard Page --------------------------



// This is Control The Hide of Elements
function hideElement(){
    var navBar = document.querySelector("nav")
    var menu = document.querySelector(".menu-icon")
    var navigation = document.querySelector(".navigation")

    var heroSection = document.querySelector(".hero")




    gsap.to(menu,1,{opacity:0})
    gsap.to(logo,1,{opacity:0})
    gsap.to(navBar,1,{opacity:0})
    gsap.to(navigation,1,{backgroundColor:"transparent"})
    gsap.to(heroSection,1,{opacity:0})
}

// This is Control The Animation of The Menu
function menuAnimation(){
    var bar_1 = document.querySelector(".bar1")
    var bar_2 = document.querySelector(".bar2")
    var bar_3 = document.querySelector(".bar3")

    gsap.to(bar_1,1,{x:15})
    gsap.to(bar_3,1,{x:15})
    gsap.to(bar_1,1,{delay:1,x:0})
    gsap.to(bar_3,1,{delay:1,x:0})
    gsap.to(bar_2,1,{delay:1,x:10})
    gsap.to(bar_2,1,{delay:2,x:0})
}

// This is Contro The Show Of The items
function showMenu(){
    var menu = document.querySelector(".menu-item")
    gsap.to(menu,1,{display:"flex",left:"0%"})
}


// This is Control The process of everything
document.querySelector(".menu-icon").addEventListener("click" , function(){
    menuAnimation();
    setTimeout(hideElement,1000);
    setTimeout(showMenu,1500);
})



// ---------------------- The Process of Closing The Menu -----------------------

function closeMenu_animation(){
    var bar1 = document.querySelector(".bar-cls1");
    var bar2 = document.querySelector(".bar-cls2");

    gsap.to(bar1,1,{rotate:180})
    gsap.to(bar2,1,{rotate:-90})
}

function closeMenu_hide(){
    var menu = document.querySelector(".menu-item")
    gsap.to(menu,1,{display:"none",left:"100%"})
}


function showElemnents(){
    var logo = document.querySelector("#logo")
    var navBar = document.querySelector("nav")
    var menu = document.querySelector(".menu-icon")
    var navigation = document.querySelector(".navigation")
    var heroSection = document.querySelector(".hero")




    gsap.to(menu,1,{opacity:1})
    gsap.to(logo,1,{opacity:1})
    gsap.to(navBar,1,{opacity:1})
    gsap.to(navigation,1,{backgroundColor:"#00305B",ease:"easeIn"})
    gsap.to(heroSection,1,{opacity:1})
}



document.querySelector(".close-menu").addEventListener("click" , function(){
    closeMenu_animation();
    setTimeout(closeMenu_hide,1000)
    setTimeout(showElemnents,1500)
})


// -------------------------------- Finish The Part Of Navbar --------------------








// ------------------------- Add Place Holders -------------------


function addPlaceHolder(){
    var inputTask = document.querySelector("#id_name")

    inputTask.placeholder = "Enter The Name of The Task"
}


addPlaceHolder()


