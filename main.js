
var flag = false;
function ChangeBackgroundColor(color,color2){
	if (flag ==false){
	    document.body.style.backgroundColor=color;
	    flag=true;
	}
	else if (flag ==true){
		document.body.style.backgroundColor=color2;
		flag=false;
	}
	console.log(flag);

}