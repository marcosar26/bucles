const numeroCaballos = 5;
const posicionesMax = 50;

const posiciones = Array(numeroCaballos).fill(0);
const caballos = Array(numeroCaballos).fill("");

const ganadores = Array();

for (let i = 0; i < caballos.length; i++) {
    caballos[i] = prompt("Introduce el nombre del caballo número " + (i + 1));
}

let turno = 1;
let carreraFinalizada = false;

do {
    console.log("Turno " + (++turno));

    for (let i = 0; i < caballos.length; i++) {

        const avance = Math.floor(Math.random() * 5) + 1; // Número entre 1 y 5

        const temp = Array(posicionesMax).fill("-");
        let str = "Caballo " + (i + 1) + " (" + caballos[i] + "): "

        posiciones[i] += avance;

        if (posiciones[i] >= posicionesMax) {
            posiciones[i] = posicionesMax;
            carreraFinalizada = true;
            ganadores.push(i);
        }

        temp[posiciones[i]] = '🐎';

        str += temp.toString();

        str += " Avance: +" + avance;

        console.log(str);
    }

} while (!carreraFinalizada);

if (carreraFinalizada) {
    console.log("¡La carrera ha terminado!");
    console.log("Duración de la carrera: " + turno + " turnos.");
    console.log("Ganador(es): ");
    for (let ganador of ganadores) {
        console.log("- Caballo " + ganador + " (" + caballos[ganador] + ")");
    }
}