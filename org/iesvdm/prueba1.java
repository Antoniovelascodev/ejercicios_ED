package org.iesvdm;

class prueba1 {
    
    private static int contadorEstatico=3; 
    private int contadorInterno = 3; 
    public static void main(String[] args) {
        
        
        
        prueba1 prueba = new prueba1(); 
        
        prueba.contadorInterno = 4;

        prueba.contadorEstatico = 7; 
        
        prueba.cambiar();

        prueba1 prueba2 = new prueba1(); 
        prueba2.contadorInterno = 6; 

        IO.println(prueba);
        IO.println(prueba2);

    }

    public int cambiar(){

        contadorEstatico++;
        IO.print(contadorEstatico);

        return contadorEstatico; 

    } 

    public String toString(){
        return "Prueba [contadorinterno= "+ contadorInterno + "]"; 

    }

}