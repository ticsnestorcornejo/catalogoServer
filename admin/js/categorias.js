/* VARIABLES */
var idcategorias = $("#idcategorias");

var codigocategorias = $("#codigocategorias").keyup(function () {
    if (idcategorias.val() > 0) {
        codigocategoriasupdate.show();
        codigocategoriascancel.show();
    }

});
var nombrecategorias = $("#nombrecategorias").keyup(function () {
    if (idcategorias.val() > 0) {
        nombrecategoriasupdate.show();
        nombrecategoriascancel.show();
    }
});

var descripcioncategorias = $("#descripcioncategorias").keyup(function () {
    if (idcategorias.val() > 0) {
        descripcioncategoriasupdate.show();
        descripcioncategoriascancel.show();
    }
});

var estadocategorias = $("#estadocategorias").click(() => {
    console.log(estadocategorias.prop("checked"));
    if (idcategorias.val() > 0) {
        categorias_server.UPDATE_ESTADO_CATEGORIAS((r) => {
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Estado de categoría actualizado!",
                    icon: "success"
                });
                listarCategorias();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Estado de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            estadocategorias: estadocategorias.prop("checked") ? 1 : 0,
            idcategorias: idcategorias.val(),
        });
    }
});;

var codigocategoriasupdate = $("#codigocategoriasupdate").click(() => {
    if (idcategorias.val() > 0) {
        categorias_server.UPDATE_CODIGO_CATEGORIAS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Código de categoría actualizado!",
                    icon: "success"
                });
                codigocategoriasupdate.hide();
                codigocategoriascancel.hide();
                listarCategorias();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Código de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            codigocategorias: codigocategorias.val(),
            idcategorias: idcategorias.val(),
        });
    }
});

var nombrecategoriasupdate = $("#nombrecategoriasupdate").click(() => {
    if (idcategorias.val() > 0) {
        categorias_server.UPDATE_NOMBRE_CATEGORIAS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Nombre de categoría actualizado!",
                    icon: "success"
                });
                nombrecategoriasupdate.hide();
                nombrecategoriascancel.hide();
                listarCategorias();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Nombre de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            nombrecategorias: nombrecategorias.val(),
            idcategorias: idcategorias.val(),
        });
    }
});

var descripcioncategoriasupdate = $("#descripcioncategoriasupdate").click(() => {
    if (idcategorias.val() > 0) {
        categorias_server.UPDATE_DESCRIPCION_CATEGORIAS((r) => {
            console.log(r);
            if (r.response) {
                Swal.fire({
                    title: "Guardado!",
                    text: "Descripcion de categoría actualizado!",
                    icon: "success"
                });
                descripcioncategoriasupdate.hide();
                descripcioncategoriascancel.hide();
                listarCategorias();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Descripcion de categoría no pudo ser actualizado!",
                    icon: "error"
                });
            }
        }, {
            descripcioncategorias: descripcioncategorias.val(),
            idcategorias: idcategorias.val(),
        });
    }
});

var codigocategoriascancel = $("#codigocategoriascancel").click(() => {
    codigocategoriasupdate.hide();
    codigocategoriascancel.hide();
});
var nombrecategoriascancel = $("#nombrecategoriascancel").click(() => {
    nombrecategoriasupdate.hide();
    nombrecategoriascancel.hide();
});
var descripcioncategoriascancel = $("#descripcioncategoriascancel").click(() => {
    descripcioncategoriasupdate.hide();
    descripcioncategoriascancel.hide();
});

var abrirModal = $("#abrirModal").click(() => {
    codigocategoriasupdate.hide();
    codigocategoriascancel.hide();
    nombrecategoriasupdate.hide();
    nombrecategoriascancel.hide();
    descripcioncategoriasupdate.hide();
    descripcioncategoriascancel.hide();
    idcategorias.val('0');
    codigocategorias.val('');
    nombrecategorias.val('');
    descripcioncategorias.val('');
    action_form_button_categorias.show();
});

var categoriasTable = $("#categoriasTable");

var listadas = $("#listadas");
var inputbusqueda = $("#inputbusqueda");
var busqueda = $("#busqueda").click(function () {

});

var categorias_server = new CLASS_SERVER_CATEGORIAS();

var action_form_button_categorias = $("#action_form_button_categorias")
    .click(function () {

        if (idcategorias.val() == 0) {

            //vamos a ingresar un nuevo registro de categorias

            categorias_server.INSERT((r) => {
                if (r.response) {
                    Swal.fire({
                        title: "Guardado!",
                        text: "Categoria registrada!",
                        icon: "success"
                    });
                    listarCategorias();
                    idcategorias.val('0');
                    codigocategorias.val('');
                    nombrecategorias.val('');
                    descripcioncategorias.val('');
                    action_form_button_categorias.show();

                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Ocurrio un error al guardar categoria!",
                        icon: "error"
                    });
                }
            },
                {
                    codigocategorias: codigocategorias.val(),
                    nombrecategorias: nombrecategorias.val(),
                    descripcioncategorias: descripcioncategorias.val(),
                    estadocategorias: estadocategorias.is(":checked") ? 1 : 0,
                }
            );
        }
    });


var listarCategorias = function (r = []) {


    var botonEliminar = function (item) {
        return $("<button></button>")
            .append('<i class="fa fa-trash" aria-hidden="true"></i>')
            .addClass("btn btn-sm btn-danger").click(() => {

                Swal.fire({
                    title: "Eliminar Categoria?",
                    text: "vas a Eliminar categoria '" + item.nombrecategorias + "'?...",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si!"
                }).then((result) => {
                    if (result.isConfirmed) {

                        categorias_server.DELETE((r) => {
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
                            listarCategorias();
                        }, {
                            idcategorias: item.idcategorias,
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
                codigocategoriasupdate.hide();
                codigocategoriascancel.hide();
                nombrecategoriasupdate.hide();
                nombrecategoriascancel.hide();
                descripcioncategoriasupdate.hide();
                descripcioncategoriascancel.hide();

                action_form_button_categorias.hide();
                idcategorias.val(item.idcategorias);
                codigocategorias.val(item.codigocategorias);
                nombrecategorias.val(item.nombrecategorias);
                descripcioncategorias.val(item.descripcioncategorias);
                estadocategorias.prop("checked", item.estadocategorias == 1);
            });

    }

    var botonVerEstado = function (item) {
        return $("<input></input>")
            .addClass("form-check-input")
            .attr("type", "checkbox")
            .attr("disabled", "disabled")
            .prop("checked", item.estadocategorias == 1);
    };

    categorias_server.SELECT((r) => {

        categoriasTable.html("");
        listadas.html(r.length);

        $.each(r, function (i, item) {

            categoriasTable.append(
                $("<tr></tr>").append(
                    $("<td></td>").append(i + 1),
                    $("<td></td>").append(item.codigocategorias),
                    $("<td></td>").append(item.nombrecategorias),
                    $("<td></td>").append(item.descripcioncategorias),
                    $("<td></td>").addClass("text-center").append(botonVerEstado(item)),
                    $("<td></td>").addClass("text-center")
                        .append(botonVer(item))
                        .append(" ")
                        .append(botonEliminar(item)),
                )
            );
        });
    },{});
}


$(document).ready(function () {
    listarCategorias();

    codigocategoriasupdate.hide();
    codigocategoriascancel.hide();
    nombrecategoriasupdate.hide();
    nombrecategoriascancel.hide();
    descripcioncategoriasupdate.hide();
    descripcioncategoriascancel.hide();

});


