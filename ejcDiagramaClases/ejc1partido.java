import java.util.ArrayList;

public class Partido {

    public int[] marcador;   // marcador[0] local  marcador[1] el  visitante
    public Equipo[] equipos;   // equipos[0] local el equipos[1] visitante

    public String arbitro;
    public Campo campo;
    public ArrayList<String> incidencias;

    public Partido(Equipo equipoLocal, Equipo equipoVisitante, Campo campo, String arbitro) {
        this.marcador = new int[]{0, 0};
        this.equipos = new Equipo[]{equipoLocal, equipoVisitante};
        this.campo = campo;
        this.arbitro = arbitro;
        this.incidencias = new ArrayList<>();
    }

    public void incrementarMarcador(int indiceEquipo) {
        marcador[indiceEquipo]++;
    }

    public void registrarIncidencia(String incidencia) {
        incidencias[numIncidencias] = incidencia;
        numIncidencias++;
    }

}
