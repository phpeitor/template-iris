
$(function() {
    
    //example 1
    var table = $('#example').DataTable({
        createdRow: function ( row, data, index ) {
           $(row).addClass('selected')
        } 
    });
      
    table.on('click', 'tbody tr', function() {
    var $row = table.row(this).nodes().to$();
    var hasClass = $row.hasClass('selected');
    if (hasClass) {
        $row.removeClass('selected')
    } else {
        $row.addClass('selected')
    }
    })
    
    table.rows().every(function() {
    this.nodes().to$().removeClass('selected')
    });



    //example 2
    var table2 = $('#example2').DataTable( {
        createdRow: function ( row, data, index ) {
            $(row).addClass('selected')
        },

        "scrollY":        "42vh",
        "scrollCollapse": true,
        "paging":         false
    });

    table2.on('click', 'tbody tr', function() {
        var $row = table2.row(this).nodes().to$();
        var hasClass = $row.hasClass('selected');
        if (hasClass) {
            $row.removeClass('selected')
        } else {
            $row.addClass('selected')
        }
    })
        
    table2.rows().every(function() {
        this.nodes().to$().removeClass('selected')
    });
	
	// 
	var table = $('#example4, #example5').DataTable();
	$('.dataTables_filter input[type=search]').attr('placeholder','Escribe');
	
	
	$('#example tbody').on('click', 'tr', function () {
		var data = table.row( this ).data();
	});
	

   
})

function listar_cliente(control){
 $.ajax({
        data: {control:control},
        url: 'ajax/ajax_accion.php',
        dataType: 'json',
    }).done(function(data){
            if (data.codigo==2){
					$(".datatable-user tbody").html("");
					cerrarSesion(2);
     
			}else{
			     
                var table=$('.datatable-user').dataTable({
                    'data': data.arr_datos,
                    "responsive": true,
                    "destroy": true,
                    "order": [[ 0, "desc" ]],
                    "bProcessing": true,
                    "createdRow": function ( row, data, index ) {
                        var texto = $('td', row).find('label').text();
                       
						if(texto=="ACTIVE"){
                            $('td', row).find('label').addClass('badge light badge-success');
                        }else{
                             $('td', row).find('label').addClass('badge light badge-danger');
                             $('td', row).find('.btn_delete').removeClass('btn_delete').addClass('not-active');
                             $('td', row).find('.btn_permiso').removeClass('btn_permiso').addClass('not-active');
                        }
					

                    },
                     "columnDefs":[{   "targets": 7, 
                                        "data": null, 
                                        "render": function ( data, type, row, meta ) {
																						
                                          return  '<input class="txt_id" type="hidden" value="'+data[0]+'"/><div class="d-flex"><a href="#" class="btn_update btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a><a href="#" class="btn_delete btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a> <a href="#" class="btn_permiso btn btn-light shadow btn-xs sharp mr-1"><i class="fa fa-lock"></i></a></div>'
                                        }
								   }]
					});  

				$('.dataTables_filter input[type=search]').attr('placeholder','Escribe');

							
                btn_accion();

                $('input[type=search]').keyup(function(e) {
                    btn_accion();
                }); 

                $(document).on('click', '.paginate_button', function (e) {
                    btn_accion();
                });	

                $(".dataTables_length select").change(function(e) {
                    btn_accion();
                }); 
                
                 $('.datatable-user')
                .on( 'order.dt',  function () { btn_accion(); } )
                .on( 'search.dt', function () { btn_accion(); } )
                .on( 'page.dt',   function () { btn_accion(); } )
                .DataTable();
                
			}
    });
}



function listar_pbi(control){
 $.ajax({
        data: {control:control},
        url: 'ajax/ajax_powerbi.php',
        dataType: 'json',
    }).done(function(data){
            if (data.codigo==2){
					$(".datatable-pbi tbody").html("");
					cerrarSesion(2);
     
			}else{
			     
                var table=$('.datatable-pbi').dataTable({
                    'data': data.arr_datos,
                    "responsive": true,
                    "destroy": true,
                    "order": [[ 0, "desc" ]],
                    "bProcessing": true,
                    "createdRow": function ( row, data, index ) {
                        var texto = $('td', row).find('label').text();
                       
						if(texto=="ACTIVE"){
                            $('td', row).find('label').addClass('badge light badge-success');
                        }else{
                             $('td', row).find('label').addClass('badge light badge-danger');
                             $('td', row).find('.btn_delete').removeClass('btn_delete').addClass('not-active');
          
                        }
                        
                        if(data[3]!="Sistemas"){
                            $('td', row).eq(1).html("<iframe width='300' height='200' src='"+data[1]+"' frameborder='0' allowfullscreen='true'></iframe</div>");
                        }else{
                            $('td', row).eq(1).html("<i style='font-size: 30px;' class='flaticon-381-lock-3'></i> <i style='font-size: 30px;' class='flaticon-381-lock-1'></i> <i style='font-size: 30px;' class='flaticon-381-database-1'></i> <i style='font-size: 30px;' class='flaticon-381-database-2'></i>");
                        }
					

                    },
                     "columnDefs":[{   "targets": 6, 
                                        "data": null, 
                                        "render": function ( data, type, row, meta ) {
																						
                                          return  '<input class="txt_id" type="hidden" value="'+data[0]+'"/><div class="d-flex"><a href="#" class="btn_update btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a><a href="#" class="btn_delete btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a> </div>'
                                        }
								   }]
					});  

				$('.dataTables_filter input[type=search]').attr('placeholder','Escribe');

							
                btn_pbi();

                $('input[type=search]').keyup(function(e) {
                    btn_pbi();
                }); 

                $(document).on('click', '.paginate_button', function (e) {
                    btn_pbi();
                });	

                $(".dataTables_length select").change(function(e) {
                    btn_pbi();
                }); 
                
                 $('.datatable-user')
                .on( 'order.dt',  function () { btn_pbi(); } )
                .on( 'search.dt', function () { btn_pbi(); } )
                .on( 'page.dt',   function () { btn_pbi(); } )
                .DataTable();
                
			}
    });
}


function btn_pbi(){
    
    var id_G = jQuery('#id').val();
    
    $(".btn_delete").unbind();
    $(".btn_delete").click(function (e) {
        var id = $(this).parent().parent().find(".txt_id").val();        
        console.log(id);
        bootbox.confirm("&#191;Desea suspender reporte?", function(result) {
            if (result){
                baja_pbi(id,4);
            }
        }); 
    });
    
    $(".btn_update").unbind();
    $(".btn_update").click(function (e) {
        var id = $(this).parent().parent().find(".txt_id").val();        
        console.log(id);
        bootbox.confirm("&#191;Desea modificar reporte?", function(result) {
            if (result){
                window.location='form_m_pbi.php?id=' + id_G+"&pbi="+id;
            }
        }); 
    });
  

}

function btn_accion(){
    
    var id_G = jQuery('#id').val();
    
    $(".btn_delete").unbind();
    $(".btn_delete").click(function (e) {
        var id = $(this).parent().parent().find(".txt_id").val();        
        console.log(id);
        bootbox.confirm("&#191;Desea suspender usuario?", function(result) {
            if (result){
                baja_accion(id,4);
            }
        }); 
    });
    
    $(".btn_update").unbind();
    $(".btn_update").click(function (e) {
        var id = $(this).parent().parent().find(".txt_id").val();        
        console.log(id);
        bootbox.confirm("&#191;Desea modificar usuario?", function(result) {
            if (result){
                window.location='form_m_user.php?id=' + id_G+"&user="+id;
            }
        }); 
    });
    
    $(".btn_permiso").unbind();
    $(".btn_permiso").click(function (e) {
        var id = $(this).parent().parent().find(".txt_id").val();        
        console.log(id);
        bootbox.confirm("&#191;Desea agregar permiso?", function(result) {
            if (result){
                window.location='form_p_user.php?id=' + id_G+"&user="+id;
            }
        }); 
    });

}


function baja_pbi(id,control) {
	$.ajax({
		data: {id:id,control:control},
		dataType: 'json',
		url: 'ajax/ajax_powerbi.php',
		success:  function (response) {
			console.log(response);
			if (response.codigo==1){
				listar_pbi(2);
			}
		}
	});
}

function baja_accion(id,control) {
	$.ajax({
		data: {id:id,control:control  },
		dataType: 'json',
		url: 'ajax/ajax_accion.php',
		success:  function (response) {
			console.log(response);
			if (response.codigo==1){
				listar_cliente(2);
			}
		}
	});
}