public class Main {
    public static void main(String[] args) {

        Equipo local = new Equipo("Tigres", "Bar Pepe", "Azul", "Blanco", "Senior", 7);
        Equipo visitante = new Equipo("Halcones", "Tienda Paco", "Rojo", "Negro", "Senior", 8);

        Campo campo = new Campo("Pabellón Norte", "Av. Libertad 10", 500);

        Partido partido = new Partido(local, visitante, campo, "Juan Martínez");

        partido.incrementarMarcador(0); // Gol local
        partido.incrementarMarcador(1); // Gol visitante
        partido.incrementarMarcador(0); // Otro gol local

        partido.registrarIncidencia("Tarjeta amarilla");
        partido.registrarIncidencia("Retraso por humedad");

        // Mostrar datos
        System.out.println("Resultado: " + partido.equipos[0].nombre +
                " " + partido.marcador[0] + " - " + partido.marcador[1] +
                " " + partido.equipos[1].nombre);

        System.out.println("Incidencias registradas:");
        for (int i = 0; i < partido.numIncidencias; i++) {
            System.out.println("- " + partido.incidencias[i]);
        }
    }
}
