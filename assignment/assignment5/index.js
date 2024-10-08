function welcome(){
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}
window.onload = welcome;
var postNumber = 0;

function postFunction(){
    if (postNumber == 0){
        document.getElementById("topic").innerHTML = document.getElementById("message").value;
    }
    else if (postNumber == 1){
        document.getElementById("reply1").innerHTML = document.getElementById("message").value;
    }
    else if (postNumber == 2){
        document.getElementById("reply2").innerHTML = document.getElementById("message").value;
    }
    document.getElementById("message").value = "";
    postNumber++;
}

function clearFunction(){
    document.getElementById("message").value = "";
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    postNumber = 0;
}