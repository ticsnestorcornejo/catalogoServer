<?php
// HERE INCLUDE REQUIDE DB CONECTION 
include_once '../dominio/dominio.php';

class CATEGORIAS
{

  static $SELECT = "SELECT * FROM categorias";
  static $INSERT = "INSERT INTO categorias(codigocategorias,nombrecategorias,descripcioncategorias,estadocategorias) VALUES(?,?,?,?)";
  static $UPDATE = "UPDATE categorias SET codigocategorias = ?, nombrecategorias = ?, descripcioncategorias = ?, estadocategorias = ? WHERE idcategorias = ? ";
  static $UPDATE_CODIGO_CATEGORIAS = "UPDATE categorias SET codigocategorias = ? WHERE idcategorias = ? ";
  static $UPDATE_NOMBRE_CATEGORIAS = "UPDATE categorias SET nombrecategorias = ? WHERE idcategorias = ? ";
  static $UPDATE_DESCRIPCION_CATEGORIAS = "UPDATE categorias SET descripcioncategorias = ? WHERE idcategorias = ? ";
  static $UPDATE_ESTADO_CATEGORIAS = "UPDATE categorias SET estadocategorias = ? WHERE idcategorias = ? ";
  static $DELETE = "DELETE FROM categorias where idcategorias = ? ";
  static $SEARCH = "SELECT * FROM categorias WHERE idcategorias = ? ";
  static $BUSQUEDA = "SELECT * FROM categorias WHERE nombrecategorias LIKE '%?%'";

  static function INSERT($objeto)
  {
    $r =  DB::insert(CATEGORIAS::$INSERT, $objeto);
    return ["response" => $r];
  }

  static function UPDATE($objeto)
  {
    $r =  DB::update(CATEGORIAS::$UPDATE, $objeto);
    return ["response" => $r];
  }
  static function UPDATE_CODIGO_CATEGORIAS($objeto)
  {
    $r =  DB::update(CATEGORIAS::$UPDATE_CODIGO_CATEGORIAS, $objeto);
    return ["response" => $r];
  }
  static function UPDATE_NOMBRE_CATEGORIAS($objeto)
  {
    $r =  DB::update(CATEGORIAS::$UPDATE_NOMBRE_CATEGORIAS, $objeto);
    return ["response" => $r];
  }
  static function UPDATE_DESCRIPCION_CATEGORIAS($objeto)
  {
    $r =  DB::update(CATEGORIAS::$UPDATE_DESCRIPCION_CATEGORIAS, $objeto);
    return ["response" => $r];
  }
  static function UPDATE_ESTADO_CATEGORIAS($objeto)
  {
    $r =  DB::update(CATEGORIAS::$UPDATE_ESTADO_CATEGORIAS, $objeto);
    return ["response" => $r];
  }

  static function DELETE($objeto)
  {
    $r =  DB::delete(CATEGORIAS::$DELETE, $objeto);
    return ["response" => $r];
  }

  static function SEARCH($objeto)
  {
    $r =  DB::select(CATEGORIAS::$SEARCH, $objeto);
    return ["response" => $r];
  }
  static function BUSQUEDA($objeto)
  {
    $r =  DB::select(CATEGORIAS::$BUSQUEDA, $objeto);
    return ["response" => $r];
  }

  static function SELECT()
  {
    $r =  DB::select(CATEGORIAS::$SELECT, []);
    return ["response" => $r];
  }
}
