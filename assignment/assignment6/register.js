window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var info = [];

    info[0] = document.forms["myRegister"]["firstname"];
    info[1] = document.forms["myRegister"]["lastname"];
    info[2] = document.forms["myRegister"]["gender"];
    info[3] = document.forms["myRegister"]["bday"];
    info[4] = document.forms["myRegister"]["email"];
    info[5] = document.forms["myRegister"]["username"];

    var passwords = document.forms["myRegister"]["password"];
    var error = "Password and Confirm password aren't the same!";
    var missInfo = "Please fill all of the information!";

    for (j = 1; j < 6; j++){
        if (!info[j].value){
            document.getElementById('errormsg').innerHTML = missInfo;
            return false;
        }
    }

    if (passwords[0].value == passwords[1].value){
        return true;
    } else {
        document.getElementById('errormsg').innerHTML = error;
        return false;
    }
}

