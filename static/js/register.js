



function addPlaceHolder(){
    var inputName = document.querySelector("#id_username");
    var password_1 = document.querySelector("#id_password1");
    var password_2 = document.querySelector("#id_password2");

    inputName.placeholder = "Enter Your Name:";
    password_1.placeholder = "Enter Your Password:";
    password_2.placeholder = "Confirm Your Password:";
}

addPlaceHolder()


