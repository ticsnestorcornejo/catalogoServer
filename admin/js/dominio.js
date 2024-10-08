//const dominio = "https://www.nestorcornejo.com/catalogoServer/main/";
const dominio = "http://localhost/catalogoServer/main/";
const HTML_HOME = "dashboard.html";




class CLASS_SERVER_CATEGORIAS {

    url = dominio + "categorias.php";
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

    UPDATE_CODIGO_CATEGORIAS = (ejecutar = () => { }, datos) => {

        let instruction = "update_codigo_categorias";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }

    UPDATE_NOMBRE_CATEGORIAS = (ejecutar = () => { }, datos) => {

        let instruction = "update_nombre_categorias";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }
    UPDATE_DESCRIPCION_CATEGORIAS = (ejecutar = () => { }, datos) => {

        let instruction = "update_descripcion_categorias";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }
    UPDATE_ESTADO_CATEGORIAS = (ejecutar = () => { }, datos) => {

        let instruction = "update_estado_categorias";
        datos.instruction = instruction;
        this.sendPostRequest(ejecutar, datos);
    }

    DELETE = (ejecutar = () => { }, datos) => {
        let instruction = "delete";
        console.log(datos);
        $.get(this.url + "?instruction=" + instruction + "&idcategorias=" + datos.idcategorias, function (data, status) { ejecutar(data.response); });
    }
} 