

class CLASS_SERVER_USUARIOS {

    url = dominio + "usuarios.php";

    LOGIN = (ejecutar = () => { }, datos) => {

        let instruction = "login";
        datos.instruction = instruction;
        console.log(this.url);
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

    ///////////////////////////////////////////////////////////

    SELECT_ADDED = (ejecutar = () => { }) => {
        let instruction = "select_added";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
    SELECT_ADDED_OK = (ejecutar = () => { }, maestriasOk) => {
        let instruction = "select_added_ok"; this.url + "?instruction=" + instruction + "&maestriasOk=" + maestriasOk
        console.log(this.url + "?instruction=" + instruction + "&maestriasOk=" + maestriasOk);
        $.get(this.url + "?instruction=" + instruction + "&maestriasOk=" + maestriasOk, function (data, status) { ejecutar(data.response); });
    }
    SELECT = (ejecutar = () => { }) => {
        let instruction = "select";
        $.get(this.url + "?instruction=" + instruction, function (data, status) { ejecutar(data.response); });
    }
    SEARCH_BY_MAESTRIAS_NOMBRE = (ejecutar = () => { }, maestriasNombre = "") => {
        let instruction = "search_by_maestrxias_nombre";
        $.get(this.url + "?instruction=" + instruction + "&maestriasNombre=" + maestriasNombre, function (data, status) { ejecutar(data.response); });
    }
    SEARCH_BY_MAESTRIAS_ID = (ejecutar = () => { }, maestriasId) => {
        let instruction = "search_by_maestrias_id";
        $.get(this.url + "?instruction=" + instruction + "&maestriasId=" + maestriasId, function (data, status) { ejecutar(data.response); });
    }
    UPDATE_MAESTRIAS_OK = (ejecutar = () => { }, datos) => {

        let instruction = "update_maestriasOk";
        datos.instruction = instruction;
        console.log(this.url);
        $.ajax({
            data: datos,
            url: this.url,
            type: 'post',
            responseType: "json",
            success: function (r) {
                console.log(r)
                ejecutar(r);
            }
        });
    }
} 