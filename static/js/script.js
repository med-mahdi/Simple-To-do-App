


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

    
    var greating_part = document.querySelector(".greating-part")
    var todo = document.querySelector(".todo-header")
    var todo_items = document.querySelector(".todo-tasks")
    var footer = document.querySelector("footer")


    gsap.to(menu,1,{opacity:1})
    gsap.to(logo,1,{opacity:1})
    gsap.to(navBar,1,{opacity:1})
    gsap.to(navigation,1,{backgroundColor:"#00305B",ease:"easeIn"})
    gsap.to(greating_part,1,{delay:0.8,opacity:1,ease:"easeIn"})
    gsap.to(todo,1,{delay:1,opacity:1,ease:"easeIn"})
    gsap.to(todo_items,1,{delay:1.2,opacity:1,ease:"easeIn"})
    gsap.to(footer,1,{delay:1.4,opacity:1,ease:"easeIn"})
}



document.querySelector(".close-menu").addEventListener("click" , function(){
    closeMenu_animation();
    setTimeout(closeMenu_hide,1000)
    setTimeout(showElemnents,1500)
})


// -------------------------------- Finish The Part Of Navbar --------------------







// ------------------- Animation of Hero-Dashboard ---------------------





function dashboardAnimation(){
    var userName = document.querySelector(".user-name h3");
    var handIcon = document.querySelector(".user-name img");
    var header = document.querySelector(".welcome-back h1");
    var quote = document.querySelector(".welcome-back p");
    var button = document.querySelector(".primary-cta");
    var paint = document.querySelector(".paint");



    gsap.to(userName,1,{x:0,ease:"ease",opacity:1});
    gsap.to(header,1,{delay:0.3,x:0,ease:"ease",opacity:1});
    gsap.to(quote,1,{delay:0.6,x:0,ease:"ease",opacity:1});
    gsap.to(button,1,{delay:0.8,x:0,ease:"ease",opacity:1});
    gsap.to(paint,1,{delay:0.8,ease:"ease",scale:1.2});


    gsap.to(handIcon,1,{delay:1.6,rotate:"45deg",ease:"ease"});
    gsap.to(handIcon,1,{delay:2.6,rotate:"0deg",ease:"ease"});
}
dashboardAnimation()






function todoTasks(){
    var todoHeader = document.querySelector(".header-todo h3");
    var bar = document.querySelector(".bar")
    var progressContainer = document.querySelector(".progressbar-container")
    var tasks_odd = document.querySelectorAll(".task:nth-child(odd)")
    var tasks_even = document.querySelectorAll(".task:nth-child(even)")

    gsap.to(todoHeader,1.2,{x:0,opacity:1})
    gsap.to(progressContainer,1.2,{delay:.3,y:0,opacity:1})
    gsap.to(bar,1.2,{delay:.3,width:"115px",opacity:1})
    gsap.to(tasks_odd,1.2,{delay:.3,x:0,opacity:1})
    gsap.to(tasks_even,1.2,{delay:.3,x:0,opacity:1})
}
todoTasks()






// -----------------------------

function progressAnimation(){
    var x = document.querySelector("#per").innerHTML.split(" ")
    var progress = document.querySelector(".progress")
    
    gsap.to(progress,1,{delay:1.9,width:x[0]})
}

progressAnimation()