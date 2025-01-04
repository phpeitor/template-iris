
$(function() {
 
   
 var validator = $(".form-a-cliente,.form-m-cliente,.form-m-permiso").validate({
        ignore: 'input[type=hidden], .select2-search__field, .ignorar', // ignore hidden fields
        errorClass: 'validation-error-label',
        successClass: 'validation-valid-label',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
			
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
			
        },

        // Different components require proper error label placement
        errorPlacement: function(error, element) {
            // Styled checkboxes, radios, bootstrap switch
            if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
                if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
                    error.appendTo( element.parent().parent().parent().parent() );
                }
                 else {
                    error.appendTo( element.parent().parent().parent().parent().parent() );
                }
            }
            // Input with icons and Select2
            else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
                error.appendTo( element.parent() );
				
            }

            else {
                error.insertAfter(element);
					
            }
        },
        validClass: "validation-valid-label",
        success: function(label) {
            label.addClass("validation-valid-label").text("Correcto")
        },
        rules: {
            dni: {
                minlength: 8
            },
			password: {
                minlength: 8
            },
            minimum_characters: {
                minlength: 10
            },
            maximum_characters: {
                maxlength: 10
            },
            minimum_number: {
                min: 1
            },
            maximum_number: {
                max: 10
            },
            number_range: {
                range: [1, 20]
            },
            phone: {
                required: !0,
                range: [90000000, 999999999]
            }
        },
        messages: {
            custom: {
                required: "This is a custom error message",
            },
            agree: "Please accept our policy"
        }
    })
   
})


function permiso_usuario(user,id,arr,control){
    $.ajax({
        data: {user:user,id:id,arr:arr,control:control},
        dataType: 'json',
        url: 'ajax/ajax_accion.php',
        success:  function (response) {           
        console.log(response);
            if(response.codigo==1){
                window.location='datatable_user.php?id='+id;
                //console.log(1);
            }else if(response.codigo==4){
                swal({ title: "Mensaje del Sistema", html: response.mensaje, type: "error" });
            }else if(response.codigo==2){
               	//cerrarSesion(2);
               	console.log(2);
            }else{
                bootbox.dialog({
                closeButton: false,
                message:"ERROR",
                    buttons: {
                                danger: {
                                    label: "Cerrar",
                                    className: "btn-danger",
                                    callback: function () { 
                                    window.location='datatable_user.php?id='+id;
                                        }
                                    }
                            }
                });
            }
        }
    });
}



function registrar_pbi(nombre,url,font,campana,control,id){
    $.ajax({
        data: {nombre:nombre,url:url,font:font,campana:campana,control:control},
        dataType: 'json',
        url: 'ajax/ajax_powerbi.php',
        success:  function (response) {           
        console.log(response);
            if(response.codigo==1){
                window.location='datatable_pbi.php?id='+id;
            }else if(response.codigo==4){
                swal({ title: "Mensaje del Sistema", html: response.mensaje, type: "error" });
            }else if(response.codigo==2){
               	cerrarSesion(2);
            }else{
                bootbox.dialog({
                closeButton: false,
                message:"ERROR",
                    buttons: {
                                danger: {
                                    label: "Cerrar",
                                    className: "btn-danger",
                                    callback: function () { 
                                    window.location='datatable_pbi.php?id='+id;
                                        }
                                    }
                            }
                });
            }
        }
    });
}

function registrar_cliente(nombres,apellidos,sexo,documento,telefono,email,usuario,password,cargo,campana,control,id){
    $.ajax({
        data: {nombres:nombres,apellidos:apellidos,sexo:sexo,documento:documento,telefono:telefono,email:email,usuario:usuario,password:password,cargo:cargo,campana:campana,control:control},
        dataType: 'json',
        url: 'ajax/ajax_accion.php',
        success:  function (response) {           
        console.log(response);
            if(response.codigo==1){
                window.location='datatable_user.php?id='+id;
            }else if(response.codigo==4){
                swal({ title: "Mensaje del Sistema", html: response.mensaje, type: "error" });
            }else if(response.codigo==2){
               	cerrarSesion(2);
            }else{
                bootbox.dialog({
                closeButton: false,
                message:"ERROR",
                    buttons: {
                                danger: {
                                    label: "Cerrar",
                                    className: "btn-danger",
                                    callback: function () { 
                                    window.location='datatable_user.php?id='+id;
                                        }
                                    }
                            }
                });
            }
        }
    });
}

  
function modificar_cliente(nombres,apellidos,sexo,documento,telefono,email,usuario,password,cargo,campana,control,id,user,estado) {
    $.ajax({
        data: {nombres:nombres,apellidos:apellidos,sexo:sexo,documento:documento,telefono:telefono,email:email,usuario:usuario,password:password,cargo:cargo,campana:campana,control:control,user:user,estado:estado},
        dataType: 'json',
        url: 'ajax/ajax_accion.php',
        success:  function (response) {           
        console.log(response);
            if(response.codigo==1){
                window.location='datatable_user.php?id='+id;
            }else if(response.codigo==4){
                swal({ title: "Mensaje del Sistema", html: response.mensaje, type: "error" });
            }else if(response.codigo==2){
               	cerrarSesion(2);
            }else{
                bootbox.dialog({
                closeButton: false,
                message:"ERROR",
                    buttons: {
                                danger: {
                                    label: "Cerrar",
                                    className: "btn-danger",
                                    callback: function () { 
                                    window.location='datatable_user.php?id='+id;
                                        }
                                    }
                            }
                });
            }
        }
    });
}


function modificar_pbi(nombre,url,font,campana,control,id,pbi,estado) {
    $.ajax({
        data: {nombre:nombre,url:url,font:font,campana:campana,control:control,pbi:pbi,estado:estado},
        dataType: 'json',
        url: 'ajax/ajax_powerbi.php',
        success:  function (response) {           
        console.log(response);
            if(response.codigo==1){
                window.location='datatable_pbi.php?id='+id;
            }else if(response.codigo==4){
                swal({ title: "Mensaje del Sistema", html: response.mensaje, type: "error" });
            }else if(response.codigo==2){
               	cerrarSesion(2);
            }else{
                bootbox.dialog({
                closeButton: false,
                message:"ERROR",
                    buttons: {
                                danger: {
                                    label: "Cerrar",
                                    className: "btn-danger",
                                    callback: function () { 
                                    window.location='datatable_pbi.php?id='+id;
                                        }
                                    }
                            }
                });
            }
        }
    });
}
  