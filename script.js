function encriptarTexto() {
    let texto = document.getElementById('inputTexto').value;
    let textoEncriptado = encriptar(texto);
    document.getElementById('mensajeEncriptado').innerText = textoEncriptado;
    document.getElementById('inputTexto').value = ''; // Limpia la caja de texto
    document.getElementById('p').innerText='';// Limpia la caja de texto
}

function desencriptarTexto() {
    let texto = document.getElementById('inputTexto').value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById('mensajeEncriptado').innerText = textoDesencriptado;
    document.getElementById('inputTexto').value = ''; // Limpia la caja de texto
    document.getElementById('p').innerText='';// Limpia la caja de texto
}

function encriptar(texto) {
    const reemplazos = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        if (reemplazos[letra]) {
            textoEncriptado += reemplazos[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    
    return textoEncriptado;
}

function desencriptar(texto) {
    const reemplazos = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = '';
    let i = 0;
    while (i < texto.length) {
        let reemplazoEncontrado = false;
        for (const [clave, valor] of Object.entries(reemplazos)) {
            if (texto.startsWith(clave, i)) {
                textoDesencriptado += valor;
                i += clave.length;
                reemplazoEncontrado = true;
                break;
            }
        }
        if (!reemplazoEncontrado) {
            textoDesencriptado += texto[i];
            i++;
        }
    }
    
    return textoDesencriptado;
}