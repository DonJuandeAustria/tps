<?php
class Empleado{
    public $nombre;
    public $horas;
    public $sueldo;
    public $total;
    
    public function __construct($nombre, $horas, $sueldo){
        $this->nombre = $nombre;
        $this->horas = $horas;
        $this->sueldo = $sueldo;
    }
    
    public function calcularSueldo(){
        $this->total = $this->horas * $this->sueldo;
    }
    
    public function mostrarSueldo(){
        echo "Sueldo total empleado $this->nombre = $this->total";
    }
}

$empleado = new Empleado("Billy Gruff", 12, 7.5);
$empleado->calcularSueldo();
$empleado->mostrarSueldo();
?>