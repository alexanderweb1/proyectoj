$(function () {
    $("#tableEstudiantes").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#tableEstudiantes_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
    });
});


$(".editarEstudianteTabla").click(function () {
    var id_estudiante = $(this).attr("id_estudiante");
    var datos = new FormData();
    datos.append('id_estudiante', id_estudiante)
    datos.append('operacion', 'editar')
    $.ajax({
        url: 'ajax/ajaxEstudiantes.php',
        method: 'POST',
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',

        success: function (respuesta) {

            $("#editarIdEstudiante").val(respuesta.id_estudiante);
            $("#editarCedula").val(respuesta.cedula);
            $("#editarNombres").val(respuesta.nombres);
            $("#editarApellido").val(respuesta.apellido);
            $("#editarCorreo").val(respuesta.correo);
            $("#editarEspecialidad").val(respuesta.especialidad);
            $("#editarPeriodo").val(respuesta.periodo);


            console.log("Datos desde PHP", respuesta)
        },
        error: function (xhr, status, error) {
            console.error("Error crítico en la petición AJAX:", error);
            console.log("Detalles del servidor:", xhr.responseText);
        }
    })
});