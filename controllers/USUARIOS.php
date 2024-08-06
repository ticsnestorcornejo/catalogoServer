<?php
// HERE INCLUDE REQUIDE DB CONECTION 
include_once '../dominio/dominio.php';

class USUARIOS
{

  static $SELECT = "SELECT * FROM usuarios";
  static $INSERT = "INSERT INTO usuarios(codigousuarios,correousuarios,nombreusuarios,passwordusuarios) VALUES(?,?,?,?)";
  static $UPDATE = "UPDATE usuarios SET codigousuarios = ?, correousuarios = ?, nombreusuarios = ?, passwordusuarios = ? WHERE idusuarios = ? ";
  static $DELETE = "DELETE FROM usuarios where idusuarios = ? ";
  static $SEARCH = "SELECT * FROM usuarios WHERE idusuarios = ? ";
  static $LOGIN = "SELECT * FROM usuarios WHERE correousuarios = ?  AND passwordusuarios = ? ";

  static function INSERT($objeto)
  {
    $r =  DB::insert(USUARIOS::$INSERT, $objeto);
    return ["response" => $r];
  }

  static function UPDATE($objeto)
  {
    $r =  DB::update(USUARIOS::$UPDATE, $objeto);
    return ["response" => $r];
  }

  static function LOGIN($objeto)
  {
    $r =  DB::select(USUARIOS::$LOGIN, $objeto);
    if (count($r) > 0) {
      if ($r[0]["passwordusuarios"] == $objeto["passwordusuarios"]) {
        $r = ["status" => true, "message" => "Bienvenido! " . $r[0]["nombreusuarios"]];
      } else {
        $r = ["status" => false, "message" => "Credenciales Incorrectas!"];
      }
    } else {
      $r = ["status" => false, "message" => "Credenciales Incorrectas!"];
    }
    return ["response" => $r];
  }

  static function DELETE($objeto)
  {
    $r =  DB::delete(USUARIOS::$DELETE, $objeto);
    return ["response" => $r];
  }

  static function SEARCH($objeto)
  {
    $r =  DB::select(USUARIOS::$SEARCH, $objeto);
    return ["response" => $r];
  }

  static function SELECT()
  {
    $r =  DB::select(USUARIOS::$SELECT, []);
    return ["response" => $r];
  }
}
