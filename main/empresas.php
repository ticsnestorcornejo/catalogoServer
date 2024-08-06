<?php
header('HTTP/1.1 200');
header('Access-Control-Allow-Origin:*');
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

include_once '../controllers/EMPRESAS.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if(!isset($_GET['instruction'])){echo "There is not GET petition!"; return;}

    if($_GET['instruction']=='select'){
       echo json_encode(EMPRESAS::SELECT());
    }

    if($_GET['instruction']=='search'){
       $empresas = $_GET; 
       unset($empresas["instruction"]); 
       echo json_encode(EMPRESAS::SEARCH($empresas));
    }

    if($_GET['instruction']=='delete'){
       $empresas = $_GET; 
       unset($empresas["instruction"]); 
       echo json_encode(EMPRESAS::DELETE($empresas));
    }

}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if(!isset($_POST['instruction'])){echo "There is not POST petition!"; return;}

    if($_POST['instruction']=='insert'){
       $empresas = $_POST; 
       unset($empresas["instruction"]); 
       echo json_encode(EMPRESAS::INSERT($empresas));
    }

    if($_POST['instruction']=='update'){
       $empresas = $_POST; 
       unset($empresas["instruction"]); 
       echo json_encode(EMPRESAS::UPDATE($empresas));
    }
}


