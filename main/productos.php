<?php
header('HTTP/1.1 200');
header('Access-Control-Allow-Origin:*');
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

include_once '../controllers/PRODUCTOS.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(!isset($_GET['instruction'])){echo "There is not GET petition!"; return;}

    if($_GET['instruction']=='select'){
       echo json_encode(PRODUCTOS::SELECT());
    }

    if($_GET['instruction']=='search'){
       $productos = $_GET; 
       unset($productos["instruction"]); 
       echo json_encode(PRODUCTOS::SEARCH($productos));
    }

    if($_GET['instruction']=='delete'){
       $productos = $_GET; 
       unset($productos["instruction"]); 
       echo json_encode(PRODUCTOS::DELETE($productos));
    }

}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if(!isset($_POST['instruction'])){echo "There is not POST petition!"; return;}

    if($_POST['instruction']=='insert'){
       $productos = $_POST; 
       unset($productos["instruction"]); 
       echo json_encode(PRODUCTOS::INSERT($productos));
    }

    if($_POST['instruction']=='update'){
       $productos = $_POST; 
       unset($productos["instruction"]); 
       echo json_encode(PRODUCTOS::UPDATE($productos));
    }
}


