<?php
// HERE INCLUDE REQUIDE DB CONECTION 
include_once '../dominio/dominio.php';
 
class EMPRESAS {

  static $SELECT = "SELECT * FROM empresas"; 
  static $INSERT = "INSERT INTO empresas(emailempresas,telempresas,wpempresas,webempresas) VALUES(?,?,?,?)";
  static $UPDATE = "UPDATE empresas SET emailempresas = ?, telempresas = ?, wpempresas = ?, webempresas = ? WHERE idempresas = ? ";
  static $DELETE = "DELETE FROM empresas where idempresas = ? "; 
  static $SEARCH = "SELECT * FROM empresas WHERE idempresas = ? "; 
 
  static function INSERT($objeto){
    $r =  DB::insert(EMPRESAS::$INSERT,$objeto);
    return ["response"=>$r];
  }

  static function UPDATE($objeto){
    $r =  DB::update(EMPRESAS::$UPDATE,$objeto);
    return ["response"=>$r];
  }

  static function DELETE($objeto){
    $r =  DB::delete(EMPRESAS::$DELETE,$objeto);
    return ["response"=>$r];
  }

  static function SEARCH($objeto){
    $r =  DB::select(EMPRESAS::$SEARCH,$objeto);
    return ["response"=>$r];
  }

  static function SELECT(){
    $r =  DB::select(EMPRESAS::$SELECT,[]);
    return ["response"=>$r];
  }


}