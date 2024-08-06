<?php
header('HTTP/1.1 200');
header('Access-Control-Allow-Origin:*');
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

include_once '../controllers/CATEGORIAS.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(!isset($_GET['instruction'])){echo "There is not GET petition!"; return;}

    if($_GET['instruction']=='select'){
       echo json_encode(CATEGORIAS::SELECT());
    }

    if($_GET['instruction']=='search'){
       $categorias = $_GET; 
       unset($categorias["instruction"]); 
       echo json_encode(CATEGORIAS::SEARCH($categorias));
    }

    if($_GET['instruction']=='delete'){
       $categorias = $_GET; 
       unset($categorias["instruction"]); 
       echo json_encode(CATEGORIAS::DELETE($categorias));
    }

}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if(!isset($_POST['instruction'])){echo "There is not POST petition!"; return;}

    if($_POST['instruction']=='insert'){
       $categorias = $_POST; 
       unset($categorias["instruction"]); 
       echo json_encode(CATEGORIAS::INSERT($categorias));
    }

    if($_POST['instruction']=='update'){
       $categorias = $_POST; 
       unset($categorias["instruction"]); 
       echo json_encode(CATEGORIAS::UPDATE($categorias));
    }
}


