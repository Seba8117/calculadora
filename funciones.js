function sumar() {
    var x = parseInt(document.getElementById('val1').value);
    var y = parseInt(document.getElementById('val2').value);
    document.getElementById('resultado').innerHTML = x+y;


}

function restar() {
    var x = parseInt(document.getElementById('val1').value);
    var y = parseInt(document.getElementById('val2').value);
    document.getElementById('resultado').innerHTML = x-y;


}
function multiplicar() {
    var x = parseInt(document.getElementById('val1').value);
    var y = parseInt(document.getElementById('val2').value);
    document.getElementById('resultado').innerHTML = x*y;


}
function dividir(){
    var x = parseInt(document.getElementById('val1').value);
    var y = parseInt(document.getElementById('val2').value);
    document.getElementById('resultado').innerHTML = x/y;


}
function limpiar(){
    document.getElementById('calculadora').reset();
}