const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const mensajeTextos = document.querySelector('.mensaje-textos');
const botonCopiar = document.querySelector('.boton-copiar');

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 

function botonEncriptar() {
    if (!validarTexto(textArea.value)) {
        return;
    }
    
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    mensajeTextos.style.display = 'none';
    botonCopiar.style.display = 'block';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar() {
    if (!validarTexto(textArea.value)) {
        return;
    }
    
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    mensajeTextos.style.display = 'none';
    botonCopiar.style.display = 'block';
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function botonCopiarTexto() {
    copiar();
    botonCopiar.style.display = 'none';
    mensaje.value = '';
    mensaje.style.backgroundImage = 'url(images/muñeco.png)';
    mensajeTextos.style.display = 'block';
} 

function copiar() {
    const textoACopiar = mensaje.value;
    navigator.clipboard.writeText(textoACopiar)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
 
function validarTexto(string) {
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (regex.test(string)) {
        return true; 
    } else {
        textArea.value = '';
        alert("El texto contiene caracteres no permitidos. Por favor, utiliza solo letras minúsculas, sin acentos y sin caracteres especiales.");
        return false;
    }
}
