const mensaje = document.querySelector(".Contenedor_resultado");
const boton_copiar = document.querySelector(".botoncopiar");
boton_copiar.style.display = "none"

function encriptar() {
    var texto = document.getElementById("textarea").value;
    let textoCifrado = texto.replace(/e/igm, "enter");
    textoCifrado = textoCifrado.replace(/o/igm, "ober");
    textoCifrado = textoCifrado.replace(/i/igm, "imes");
    textoCifrado = textoCifrado.replace(/a/igm, "ai");
    textoCifrado = textoCifrado.replace(/u/igm, "ufat");
    document.getElementById("textareaderecha").value = textoCifrado;
    mensaje.style.backgroundImage="none";
    boton_copiar.style.display = "block";
}
function desencriptar() {
    var texto = document.getElementById("textarea").value;
    let textoCifrado = texto.replace(/enter/igm, "e");
    textoCifrado = textoCifrado.replace(/ober/igm, "o");
    textoCifrado = textoCifrado.replace(/imes/igm, "i");
    textoCifrado = textoCifrado.replace(/ai/igm, "a");
    textoCifrado = textoCifrado.replace(/ufat/igm, "u");
    document.getElementById("textareaderecha").value = textoCifrado;
    mensaje.style.backgroundImage="none";
    boton_copiar.style.display = "block";
}
function copyToClipBoard() {

    var content = document.getElementById('textareaderecha');
    content.select();
    document.execCommand('copy');
}