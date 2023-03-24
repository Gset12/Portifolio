var posAtual= "X";

function blocoAcionado(value){
    var casa = "casa" + String(value);
    if(document.getElementById(casa).innerHTML === ""){
        document.getElementById(casa).innerHTML = posAtual;
        posAtual = (posAtual === "X") ? "O":"X";
    }
}

