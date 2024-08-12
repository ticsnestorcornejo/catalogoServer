/* VARIABLES */
var idproductos = $("#idproductos");

var codigoproductos = $("#codigoproductos").keyup(function () {
    if (idproductos.val() > 0) {
        codigoproductosupdate.show();
        codigoproductoscancel.show();
    }

});
var nombreproductos = $("#nombreproductos").keyup(function () {
    if (idproductos.val() > 0) {
        nombreproductosupdate.show();
        nombreproductoscancel.show();
    }
});

var descripcionproductos = $("#descripcionproductos").keyup(function () {
    if (idproductos.val() > 0) {
        descripcionproductosupdate.show();
        descripcionproductoscancel.show();
    }
});

var estadoproductos = $("#estadoproductos").click(() => {
    console.log(estadoproductos.prop("checked"));
    if (idproductos.val() > 0) {
        productos_server.UPDATE_ESTADO_PRODUCTOS((r) => {
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Estado de categoría actualizado!",
                    icon: "success"
                });
                listarProductos();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Estado de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            estadoproductos: estadoproductos.prop("checked") ? 1 : 0,
            idproductos: idproductos.val(),
        });
    }
});;

var codigoproductosupdate = $("#codigoproductosupdate").click(() => {
    if (idproductos.val() > 0) {
        productos_server.UPDATE_CODIGO_PRODUCTOS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Código de categoría actualizado!",
                    icon: "success"
                });
                codigoproductosupdate.hide();
                codigoproductoscancel.hide();
                listarProductos();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Código de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            codigoproductos: codigoproductos.val(),
            idproductos: idproductos.val(),
        });
    }
});

var nombreproductosupdate = $("#nombreproductosupdate").click(() => {
    if (idproductos.val() > 0) {
        productos_server.UPDATE_NOMBRE_PRODUCTOS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Nombre de categoría actualizado!",
                    icon: "success"
                });
                nombreproductosupdate.hide();
                nombreproductoscancel.hide();
                listarProductos();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Nombre de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            nombreproductos: nombreproductos.val(),
            idproductos: idproductos.val(),
        });
    }
});

var descripcionproductosupdate = $("#descripcionproductosupdate").click(() => {
    if (idproductos.val() > 0) {
        productos_server.UPDATE_DESCRIPCION_PRODUCTOS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Descripcion de categoría actualizado!",
                    icon: "success"
                });
                descripcionproductosupdate.hide();
                descripcionproductoscancel.hide();
                listarProductos();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Descripcion de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            descripcionproductos: descripcionproductos.val(),
            idproductos: idproductos.val(),
        });
    }
});

var codigoproductoscancel = $("#codigoproductoscancel").click(() => {
    codigoproductosupdate.hide();
    codigoproductoscancel.hide();
});
var nombreproductoscancel = $("#nombreproductoscancel").click(() => {
    nombreproductosupdate.hide();
    nombreproductoscancel.hide();
});
var descripcionproductoscancel = $("#descripcionproductoscancel").click(() => {
    descripcionproductosupdate.hide();
    descripcionproductoscancel.hide();
});

var abrirModal = $("#abrirModal").click(() => {
    codigoproductosupdate.hide();
    codigoproductoscancel.hide();
    nombreproductosupdate.hide();
    nombreproductoscancel.hide();
    descripcionproductosupdate.hide();
    descripcionproductoscancel.hide();
    idproductos.val('0');
    codigoproductos.val('');
    nombreproductos.val('');
    descripcionproductos.val('');
    action_form_button_productos.show();
});

var productosTable = $("#productosTable");

var listadas = $("#listadas");
var inputbusqueda = $("#inputbusqueda");
var busqueda = $("#busqueda").click(function () {

});

var productos_server = new CLASS_SERVER_PRODUCTOS();

var action_form_button_productos = $("#action_form_button_productos")
    .click(function () {

        if (idproductos.val() == 0) {

            //vamos a ingresar un nuevo registro de productos

            productos_server.INSERT((r) => {
                if (r.response) {
                    Swal.fire({
                        title: "Guardado!",
                        text: "Categoria registrada!",
                        icon: "success"
                    });
                    listarProductos();
                    idproductos.val('0');
                    codigoproductos.val('');
                    nombreproductos.val('');
                    descripcionproductos.val('');
                    action_form_button_productos.show();

                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Ocurrio un error al guardar categoria!",
                        icon: "error"
                    });
                }
            },
                {
                    codigoproductos: codigoproductos.val(),
                    nombreproductos: nombreproductos.val(),
                    descripcionproductos: descripcionproductos.val(),
                    estadoproductos: estadoproductos.is(":checked") ? 1 : 0,
                }
            );
        }
    });


var listarProductos = function (r = []) {


    var botonEliminar = function (item) {
        return $("<button></button>")
            .append('<i class="fa fa-trash" aria-hidden="true"></i>')
            .addClass("btn btn-sm btn-danger").click(() => {

                Swal.fire({
                    title: "Eliminar Categoria?",
                    text: "vas a Eliminar categoria '" + item.nombreproductos + "'?...",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si!"
                }).then((result) => {
                    if (result.isConfirmed) {

                        productos_server.DELETE((r) => {
                            console.log(r);
                            if (r) {
                                Swal.fire({
                                    title: "Eliminado!",
                                    text: "Categoría Eliminada!",
                                    icon: "success"
                                });
                            } else {
                                Swal.fire({
                                    title: "Error!",
                                    text: "Ocurrio un error al eliminar categoria!",
                                    icon: "error"
                                });
                            }
                            listarProductos();
                        }, {
                            idproductos: item.idproductos,
                        });

                    }
                });
            })
    }

    var botonVer = (item) => {
        return $("<button></button>")
            .append('<i class="fa fa-eye" aria-hidden="true"></i>')
            .addClass('btn btn-sm btn-primary')
            .attr('data-bs-toggle', 'modal')
            .attr('data-bs-target', '#updateModal')
            .click(function () {
                codigoproductosupdate.hide();
                codigoproductoscancel.hide();
                nombreproductosupdate.hide();
                nombreproductoscancel.hide();
                descripcionproductosupdate.hide();
                descripcionproductoscancel.hide();

                action_form_button_productos.hide();
                idproductos.val(item.idproductos);
                codigoproductos.val(item.codigoproductos);
                nombreproductos.val(item.nombreproductos);
                descripcionproductos.val(item.descripcionproductos);
                estadoproductos.prop("checked", item.estadoproductos == 1);
            });

    }

    var botonVerEstado = function (item) {
        return $("<input></input>")
            .addClass("form-check-input")
            .attr("type", "checkbox")
            .attr("disabled", "disabled")
            .prop("checked", item.estadoproductos == 1);
    };

    productos_server.SELECT((r) => {

        productosTable.html("");
        console.log(r)
        listadas.html(r.length);

        $.each(r, function (i, item) {

            productosTable.append(
                $("<tr></tr>").append(
                    $("<td></td>").append(i + 1),
                    $("<td></td>").append(item.codigoproductos),
                    $("<td></td>").append(item.nombreproductos),
                    $("<td></td>").append(item.descripcionproductos),
                    $("<td></td>").addClass("text-center").append(botonVerEstado(item)),
                    $("<td></td>").addClass("text-center")
                        .append(botonVer(item))
                        .append(" ")
                        .append(botonEliminar(item)),
                )
            );
        });
    }, {});
}


$(document).ready(function () {
    listarProductos();

    codigoproductosupdate.hide();
    codigoproductoscancel.hide();
    nombreproductosupdate.hide();
    nombreproductoscancel.hide();
    descripcionproductosupdate.hide();
    descripcionproductoscancel.hide();

});


