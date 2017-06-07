
	var cargarPagina = function(){
	 var $lyftEntrada =$(".fondo-logo");
	 var $liftInicio =$(".gif-contenedor");
	 setTimeout(function(){
	 	$lyftEntrada.hide();
		$liftInicio.css("display","flex");
		},1000);
	}

	$(document).ready(cargarPagina);
