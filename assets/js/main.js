(function displayNone)(){
	//get elements by id me retorna una coleccion de html elementos, en esta coleccion no se peude hacer foreach por lo q la transformo a un arreglo con array.from

	var cajas=Array.from(document.getElementByClassName("caja"));
	console.log(cajas);
	cajas.forEach(function(e){
	//poner sombrero a e
	e.addEventListener("click", function({
		this.clasList.toggle("no");
	});
});

	document.getElementById("mostrar").addEventListener("click", function(el){
		//previene el comportamiento por defecto, evita el salto de pagina
		el.preventDefaul();
		cajas.forEach(function(e){
			e.clasList.remove("no");
		})
	})
})()