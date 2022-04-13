let player = "papel";
let cpu = "piedra";

switch(true){
    case (player === cpu):
        console.log("Empate");
        break;
    case (player === "papel" && cpu === "piedra" || player === "tijera" && cpu === "papel" || player === "piedra" && cpu === "tijera"):
        console.log("Player Gana");
        break;
    case (cpu === "papel" && player === "piedra" || cpu === "tijera" && player === "papel" || cpu === "piedra" && player === "tijera"):
        console.log("Gana Cpu");
        break;
    default:
        console.log("Opciones invalidas")
}