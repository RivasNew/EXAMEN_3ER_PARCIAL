var myindex = 0;

function carusel(){
	var i;
	var x = document.getElementsByClassName("imagenes_index");
	for( i = 0; i<x.length; i++){
		x[i].style.display = "none";
	}
	myindex++
	if(myindex>x.length){
		myindex = 1;
	}
	x[myindex-1].style.display = "block";
	setTimeout(carusel, 1500);
}
carusel();