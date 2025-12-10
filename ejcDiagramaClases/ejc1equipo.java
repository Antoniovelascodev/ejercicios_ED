public class Equipo {

//declaro los atributos que tiene equipo 
    public String nombre;
    public String patrocinador;
    public String colorEquipacion1;
    public String colorEquipacion2;
    public String categoria;
    public Jugador[] jugadores;


    //creo el equipo 
    public Equipo(String nombre, String patrocinador, String colorEquipacion1, String colorEquipacion2, String categoria, int numJugadores) {
        //el maximo de los jugadores tiene que ser entre 11 y 7 jugadires en futbol sala 
        if (numJugadores < 7 || numJugadores > 11) {
           System.out.println("Un equipo debe tener entre 7 y 11 jugadores");
        }

        this.nombre = nombre;
        this.patrocinador = patrocinador;
        this.colorEquipacion1 = colorEquipacion1;
        this.colorEquipacion2 = colorEquipacion2;
        this.categoria = categoria;
        this.jugadores = new Jugador[numJugadores];

    }

    public void agregarJugador(Jugador jugador, int index) {
        jugadores[index] = jugador;
    }

}
