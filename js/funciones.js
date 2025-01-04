
$(function() {

    var online=jQuery('#online_user').text();
    
	if(online==0){
	    cerrarSesion(2);
	} 
	
	$("#logout").click(function(e) {
		e.preventDefault();
		var user =	jQuery('#nombre_ls').text();
		console.log(user);
		bootbox.confirm("<b style='color:#0B610B'>" +user+"</b> ::: ¿Desea salir del sistema?", function(result) {
			if (result){
				cerrarSesion(1);
			}
		});
	});
	
	
});


function cerrarSesion(control) {
	$.ajax({
		async:true,
		data: {control:control},
		url:   'ajax/ajax_cerrar_sesion.php',
		type:  'post',
		dataType: 'json',					
		success:  function (response) {	
		    console.log(response);
		        bootbox.alert(response.mensaje);
			    setTimeout(function(){
                    window.location='index.php';
                }, 5000);
		
		},
		error: function(dato){
			bootbox.alert("Ocurrio un error");	
		}
	});
}



