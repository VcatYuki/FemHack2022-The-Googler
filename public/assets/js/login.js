document.querySelector(".login").addEventListener("click", visibilityl);
document.querySelector(".register").addEventListener("click", visibilityr);
function visibilityl () {
    document.querySelector("#login").style.opacity = 100;    
    var span = document.createElement("SPAN");
    var close = document.createTextNode("\u00D7");
    span.className = "closeb";    
    span.appendChild(close); 
    document.querySelector("#login").appendChild(span)
}
function visibilityr () {
    document.querySelector("#register").style.opacity = 100;
    var span = document.createElement("SPAN");
    var close = document.createTextNode("\u00D7");
    span.className = "closeb";    
    span.appendChild(close); 
    document.querySelector("#login").appendChild(span)
}
document.getElementsByClassName("closeb").addEventListener("click", close);
function close() {
    document.querySelector("#login").style.opacity = 0;  
    document.querySelector("#register").style.opacity = 0;
  
}



var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");


function register(){
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        alert("Email required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " yor are login Now \n welcome to our website.");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}