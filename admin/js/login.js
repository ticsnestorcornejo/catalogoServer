$(document).ready(function () {

});

var loginbutton = $('#loginbutton').closest("form").submit(function (e) {

    e.preventDefault();
    var correousuarios = $("#correousuarios").val();
    var passwordusuarios = $("#passwordusuarios").val();

    if (correousuarios == '' || passwordusuarios == '') {
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        var login = new CLASS_SERVER_USUARIOS();
        login.LOGIN(function (r) {
            console.log(r.response.status);


            if (r.response.status) {
                window.location.href = HTML_HOME;
            } else {
                alert("Correo o contraseña Incorrectos");
                return false;
            }



        }, {
            correousuarios: correousuarios,
            passwordusuarios: passwordusuarios
        });
    }
});