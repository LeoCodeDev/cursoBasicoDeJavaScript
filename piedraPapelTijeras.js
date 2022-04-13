let player = "piedra";
let cpu = "piedra";

if (player === cpu){
    console.log('Empate')
}else if(player === "papel" && cpu === "tijera"|| player === "tijera" && cpu === "piedra" || player === "piedra" && cpu === "papel"){
    console.log("Player Pierde")
}else if(cpu === "papel" && player === "tijera"|| cpu === "tijera" && player === "piedra" || cpu === "piedra" && player === "papel"){
    console.log("player Gana")
}else{
    console.log("insete valores correctos")
}