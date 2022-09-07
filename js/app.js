function calculoTiempoRestante(plazo)
{
    const fechaActual = new Date();
    const tiempoRestante = (new Date(plazo) - fechaActual + 1000) / 1000;
    const segundoRestante = ('0' + Math.floor(tiempoRestante % 60)).slice(-2);
    const minutoRestante = ('0' + Math.floor((tiempoRestante / 60) % 60)).slice(-2);
    const horaRestante = ('0' + Math.floor(tiempoRestante / 3600 % 24)).slice(-2);
    const diaRestante = Math.floor(tiempoRestante / (3600 * 24));

    return {
        tiempoRestante,
        segundoRestante,
        minutoRestante,
        horaRestante,
        diaRestante
    }
}

function cuentaRegresiva(plazo, elementoHTML, mensajeFinal)
{
    const elemento = document.getElementById(elementoHTML);

    const tiempoActualizado = setInterval(function() {
        const t = calculoTiempoRestante(plazo);
        
        elemento.innerHTML = `${t.diaRestante} Dias, ${t.horaRestante} Horas,
            ${t.minutoRestante} Minutos y ${t.segundoRestante} Segundos`;

        if (t.tiempoRestante <= 1) {
            clearInterval(tiempoActualizado);
            elemento.innerHTML = mensajeFinal;
        }
    }, 1000);
}

// Cuidado con la fecha ingresada, Si se ingresa mal la fecha no va a funcionar
cuentaRegresiva('Thu Nov 31 2028 16:44:00 GMT-0300', 'reloj', 'Bienvenido');