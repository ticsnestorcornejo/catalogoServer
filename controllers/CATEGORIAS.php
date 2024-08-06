<?php
// HERE INCLUDE REQUIDE DB CONECTION 
include_once '../dominio/dominio.php';
 
class CATEGORIAS {

  static $SELECT = "SELECT * FROM categorias"; 
  static $INSERT = "INSERT INTO categorias(codigocategorias,nombrecategorias,descripcioncategorias,estadocategorias) VALUES(?,?,?,?)";
  static $UPDATE = "UPDATE categorias SET codigocategorias = ?, nombrecategorias = ?, descripcioncategorias = ?, estadocategorias = ? WHERE idcategorias = ? ";
  static $DELETE = "DELETE FROM categorias where idcategorias = ? "; 
  static $SEARCH = "SELECT * FROM categorias WHERE idcategorias = ? "; 
 
  static function INSERT($objeto){
    $r =  DB::insert(CATEGORIAS::$INSERT,$objeto);
    return ["response"=>$r];
  }

  static function UPDATE($objeto){
    $r =  DB::update(CATEGORIAS::$UPDATE,$objeto);
    return ["response"=>$r];
  }

  static function DELETE($objeto){
    $r =  DB::delete(CATEGORIAS::$DELETE,$objeto);
    return ["response"=>$r];
  }

  static function SEARCH($objeto){
    $r =  DB::select(CATEGORIAS::$SEARCH,$objeto);
    return ["response"=>$r];
  }

  static function SELECT(){
    $r =  DB::select(CATEGORIAS::$SELECT,[]);
    return ["response"=>$r];
  }


}