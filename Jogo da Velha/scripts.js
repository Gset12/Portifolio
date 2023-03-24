var posicaoGanhar = [
    [1, 2, 3],
    [1, 5, 7],
    [3, 6, 9],
    [7, 8, 9],
    [4, 5, 6],
    [1, 5, 9],
    [3, 5, 7]
] 
 
var posAtual= "X";

function blocoAcionado(value){
    var casa = "casa" + String(value);
    if(document.getElementById(casa).innerHTML === ""){
        document.getElementById(casa).innerHTML = posAtual;
        posAtual = (posAtual === "X") ? "O":"X";
    }

}
