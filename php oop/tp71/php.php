<?php
class CRectangulo{
    public $largo;
    public $ancho;
    public $perimetro;
    public $area;
    
    public function __construct($largo, $ancho){
        $this->largo = $largo;
        $this->ancho = $ancho;
    }
    
    public function CalcularPerimetro(){
        $this->perimetro = ($this->largo + $this->ancho) * 2;
    }
    
    public function CalcularArea(){
        $this->area = $this->largo * $this->ancho;
    }
    
    public function MostrarDatos(){
        echo "Largo: $this->largo, Ancho: $this->ancho, Perimetro: $this->perimetro, Area: $this->area";
    }
}

$rectangulo = new CRectangulo(10, 5);
$rectangulo->CalcularPerimetro();
$rectangulo->CalcularArea();
$rectangulo->MostrarDatos();
?>