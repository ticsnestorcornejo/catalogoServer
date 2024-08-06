<?php
// HERE INCLUDE REQUIDE DB CONECTION 
include_once '../dominio/dominio.php';
 
class PRODUCTOS {

  static $SELECT = "SELECT * FROM productos"; 
  static $INSERT = "INSERT INTO productos(codigoproductos,nombreproductos,descripcionproductos,estadoproductos,precioproductos,imagenproductos,idcategorias) VALUES(?,?,?,?,?,?,?)";
  static $UPDATE = "UPDATE productos SET codigoproductos = ?, nombreproductos = ?, descripcionproductos = ?, estadoproductos = ?, precioproductos = ?, imagenproductos = ?, idcategorias = ? WHERE idproductos = ? ";
  static $DELETE = "DELETE FROM productos where idproductos = ? "; 
  static $SEARCH = "SELECT * FROM productos WHERE idproductos = ? "; 
 
  static function INSERT($objeto){
    $r =  DB::insert(PRODUCTOS::$INSERT,$objeto);
    return ["response"=>$r];
  }

  static function UPDATE($objeto){
    $r =  DB::update(PRODUCTOS::$UPDATE,$objeto);
    return ["response"=>$r];
  }

  static function DELETE($objeto){
    $r =  DB::delete(PRODUCTOS::$DELETE,$objeto);
    return ["response"=>$r];
  }

  static function SEARCH($objeto){
    $r =  DB::select(PRODUCTOS::$SEARCH,$objeto);
    return ["response"=>$r];
  }

  static function SELECT(){
    $r =  DB::select(PRODUCTOS::$SELECT,[]);
    return ["response"=>$r];
  }


}