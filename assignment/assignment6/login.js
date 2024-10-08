window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	
	var formID = document.forms["myLogin"]["username"].value;
    var formPass = document.forms["myLogin"]["password"].value;

	const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get('username');
    const userPass = urlParams.get('password');

	if (userID == formID && userPass == formPass){
        alert("Welcome!"); 
        return true;
    } else {
        alert("Incorrect username or password!"); 
        return false;
    }
}