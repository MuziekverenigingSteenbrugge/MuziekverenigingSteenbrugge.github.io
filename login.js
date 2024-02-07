var username = "fanf steen"
var password = "fs4l"
function logIn(){
    if(password  === document.getElementById("password").value  &&  username === document.getElementById("username").value.trim().toLowerCase()){
        window.location.href = 'https://www.ceciliasteenbrugge.be/leden';
        document.getElementById("txt").innerHTML = "you'r in";
        //alert("Loggin in")
    } else{
        document.getElementById("txt").innerHTML = "Incorrect password";
        alert("Incorrect password")

    }
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
