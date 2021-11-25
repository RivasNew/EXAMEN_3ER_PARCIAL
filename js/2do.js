var nombre = null;
var edad = null;
var telefono = null;
var arreglo = new Array();
var j=0;





function agregar_nombre(parametro){
	
	nombre = parametro.value;

}
function agregar_edad(parametro){
	
	edad = parametro.value;

}
function agregar_telefono(parametro){
	
	telefono = parametro.value;

}

function agregar_datos(){



	 var datos = {
			"nombre": nombre,
			"edad": edad,
			"telefono": telefono
};

	arreglo[j] = datos;
	j++;

		
alert("datos guardados");
mostrar_datos();
var reg = arreglo.length;
	document.getElementById("registro").innerHTML = "registros:" + reg;
}


function mostrar_datos(){

	var i=0;
	var inf =   "<table>"+
    "<tr>"+
		"<th> id </th>"+
      "<th> nombre</th>"+
      "<th>edad</th>"+
      "<th>telefono</th>"+
    "</tr>";
	var men = "";
	for( i; i<arreglo.length; i++){
		
		men += "<tr>"+
					"<td>" + (i)+ "</td>"+
					"<td>" + arreglo[i].nombre + "</td>"+
          			"<td>" + arreglo[i].edad +"</td>"+
					"<td>" + arreglo[i].telefono +"</td>"+
					"</tr>";
					
	}
	
	"<br/></table>"
	
	document.getElementById("tabla_datos").innerHTML = inf+men;
}

function eliminar_datos(){
var seleccion = document.getElementById("datos_eliminar").value;
arreglo.splice(seleccion,1);
alert("datos eliminados");
j--;
mostrar_datos();
}

function buscar_datos(){
var i =0;
var p=0;
	var buscar = document.getElementById("buscar").value;
	
	for(i; i<arreglo.length;i++){
		arreglo[i].nombre
	} p++;
	if(buscar == arreglo[p].nombre){
		alert("datos encontrados");
		var men =" ";
		men ="<table>"+
				"<tr>"+
				"<th> id </th>"+
				"<th> nombre</th>"+
				"<th>edad</th>"+
				"<th>telefono</th>"+
				"</tr>"+		
					"<tr>"+
					"<td>" + (p)+ "</td>"+
					"<td>" + arreglo[p].nombre + "</td>"+
          			"<td>" + arreglo[p].edad +"</td>"+
					"<td>" + arreglo[p].telefono +"</td>"+
					"</tr><br/>" +
					"</table>";
						document.getElementById("tabla_datos").innerHTML = men;
						
	document.getElementById("registro").innerHTML = "registros:" + 1;

	}
	
}

function actualizar_datos(){

	var act = document.getElementById("datos_actualizar").value;
	
	document.getElementById("nombre").value = arreglo[act].nombre;
	document.getElementById("edad").value = arreglo[act].edad;
	document.getElementById("telefono").value = arreglo[act].telefono;

	arreglo.splice(act,1);

}

