//  -------------------------- Animation For Dashboard Page --------------------------



// This is Control The Hide of Elements
function hideElement(){
    var logo = document.querySelector("#logo")
    var navBar = document.querySelector("nav")
    var menu = document.querySelector(".menu-icon")
    var navigation = document.querySelector(".navigation")

    
    var greating_part = document.querySelector(".greating-part")
    var todo = document.querySelector(".todo-header")
    var todo_items = document.querySelector(".todo-tasks")
    var footer = document.querySelector("footer")


    gsap.to(menu,1,{opacity:0})
    gsap.to(logo,1,{opacity:0})
    gsap.to(navBar,1,{opacity:0})
    gsap.to(navigation,1,{backgroundColor:"transparent"})
    gsap.to(greating_part,1,{opacity:0})
    gsap.to(todo,1,{opacity:0})
    gsap.to(todo_items,1,{opacity:0})
    gsap.to(footer,1,{opacity:0})
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
    gsap.to(menu,1,{x:0})
}


// This is Control The process of everything
document.querySelector(".menu-icon").addEventListener("click" , function(){
    menuAnimation();
    setTimeout(hideElement,1000);
    setTimeout(showMenu,1500);
})