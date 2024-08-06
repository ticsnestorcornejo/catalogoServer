<?php
header('HTTP/1.1 200');
header('Access-Control-Allow-Origin:*');
header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

include_once '../controllers/USUARIOS.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

   if (!isset($_GET['instruction'])) {
      echo "There is not GET petition!";
      return;
   }

   if ($_GET['instruction'] == 'select') {
      echo json_encode(USUARIOS::SELECT());
   }

   if ($_GET['instruction'] == 'search') {
      $usuarios = $_GET;
      unset($usuarios["instruction"]);
      echo json_encode(USUARIOS::SEARCH($usuarios));
   }

   if ($_GET['instruction'] == 'delete') {
      $usuarios = $_GET;
      unset($usuarios["instruction"]);
      echo json_encode(USUARIOS::DELETE($usuarios));
   }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   if (!isset($_POST['instruction'])) {
      echo "There is not POST petition!";
      return;
   }

   if ($_POST['instruction'] == 'insert') {
      $usuarios = $_POST;
      unset($usuarios["instruction"]);
      echo json_encode(USUARIOS::INSERT($usuarios));
   }
   if ($_POST['instruction'] == 'login') {
      $usuarios = $_POST;
      unset($usuarios["instruction"]);
      echo json_encode(USUARIOS::LOGIN($usuarios));
   }

   if ($_POST['instruction'] == 'update') {
      $usuarios = $_POST;
      unset($usuarios["instruction"]);
      echo json_encode(USUARIOS::UPDATE($usuarios));
   }
}
