window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        display(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function display(layer){

	console.log(Object.keys(layer).length);
    var showdiv = document.getElementById("layer")
    var keys = Object.keys(layer);
    for(var i =0; i< keys.length;i++){
        var box = showdiv.children[i];
        var img = document.createElement("img");
        img.src = "pic/" + layer[keys[i]].pic;
        var temp = document.createElement("p");
        temp.innerHTML = "" + layer[keys[i]].brandname + "<br><br>Price: " + layer[keys[i]].price + " usd";
        var buy = document.createElement("p");
        buy.innerHTML = "<br><a>BUY NOW!!</a>";
        buy.classList.add("buy");
        box.appendChild(img);
        box.appendChild(temp);
        box.appendChild(buy);
    }
}