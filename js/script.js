document.getElementById("button-ingreso").addEventListener("click",function() {
	var elemento = document.getElementById("mi-elemento");
	elemento.classList.toggle("elemento-a-desvanecer");
	
	setTimeout(function() {
    // Redirecciona a la página siguiente
    window.location.href = 'pagina2.html';
  }, 2500);
	
	// window.location.href = 'pagina2.html';
})
