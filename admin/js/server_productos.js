
class CLASS_SERVER_PRODUCTOS {

    url = dominio + "productos.php";
    sendPostRequest = (ejecutar = () => { }, datos) => {
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                ejecutar(r);
            }
        });
    }
    sendGetRequest = (ejecutar = () => { }, datos) => {

        let sqlLine = this.url;

        var nombresdevariables = Object.keys(datos)

        nombresdevariables.forEach(k => {
            if (k == "instruction") {
                sqlLine += "?instruction=" + datos.instruction;
            } else {
                sqlLine += "&" + k + "=" + datos[k]
            }
        });

        $.get(sqlLine, function (data, status) { ejecutar(data.response); });
    }

    INSERT = (ejecutar = () => { }, datos) => {
        let instruction = "insert";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }

    SELECT = (ejecutar = () => { }, datos) => {
        datos.instruction = "select";
        this.sendGetRequest(ejecutar, datos);
    }

    BUSQUEDA = (ejecutar = () => { }, datos) => {
        datos.instruction = "busqueda";
        this.sendGetRequest(ejecutar, datos);
    }

    UPDATE_CODIGO_PRODUCTOS = (ejecutar = () => { }, datos) => {

        let instruction = "update_codigo_productos";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }

    UPDATE_NOMBRE_PRODUCTOS = (ejecutar = () => { }, datos) => {

        let instruction = "update_nombre_productos";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }
    UPDATE_DESCRIPCION_PRODUCTOS = (ejecutar = () => { }, datos) => {

        let instruction = "update_descripcion_productos";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }
    UPDATE_ESTADO_PRODUCTOS = (ejecutar = () => { }, datos) => {

        let instruction = "update_estado_productos";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }

    DELETE = (ejecutar = () => { }, datos) => {
        let instruction = "delete";
        console.log(datos);
        $.get(this.url + "?instruction=" + instruction + "&idproductos=" + datos.idproductos, function (data, status) { ejecutar(data.response); });
    }
} 