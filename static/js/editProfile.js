


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
    hide_EditSection()
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
    show_EditSection()
}



document.querySelector(".close-menu").addEventListener("click" , function(){
    closeMenu_animation();
    setTimeout(closeMenu_hide,1000)
    setTimeout(showElemnents,1500)
})


// -------------------------------- Finish The Part Of Navbar --------------------





function hide_EditSection(){
    var editSection = document.querySelector(".edit")
    gsap.to(editSection,1,{opacity:0})
}



function show_EditSection(){
    var editSection = document.querySelector(".edit")
    gsap.to(editSection,1,{opacity:1})
}



// ------------------------------------------------- Fill The Place Holder ----------------------


function fillPlaceHolder(){
    var username_inputs = document.querySelector("input[type='text']");
    var email_inputs = document.querySelector("input[type='email']");
    var search_input = document.querySelector("#id_name");
    var label = document.querySelector(".search-task label");

    label.style.display = "none";
    search_input.placeholder = "Enter your Done Task:";
    username_inputs.placeholder = "Enter Your Name:";
    email_inputs.placeholder = "Enter Your Email";
}

fillPlaceHolder()



//  ------------------------------------------------ Animation Edit Section ---------------------------------

function animationEditSection(){
    var card = document.querySelector(".card");
    var progress_section = document.querySelector(".progress");
    var progressheader = document.querySelector("#bar");

    gsap.to(card,1.5,{x:0,opacity:1,ease:"easeIn"});
    gsap.to(progress_section,1.5,{x:0,opacity:1,ease:"easeIn"});
    gsap.to(progressheader,1,{delay:1.5,width:"120px",opacity:1,ease:"easeIn"});


}
animationEditSection()



function progressAnimation(){
    var x = document.querySelector("#per").innerHTML.split(" ")
    var progress = document.querySelector(".progressInside")
    
    gsap.to(progress,1,{delay:1.9,width:x[0]})
}

progressAnimation()