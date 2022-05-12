function valida_enviaev() {
    //valido telefono, tiene que ser entero
    numero = document.fevento.numero.value
    numero = validarEntero(numero)
    document.fevento.numero.value = numero
    if (numero == "") {
        alert("Tiene que introducir un número de teléfono")
        document.fevento.numero.focus()
    return 0;}

    //envio de formulario
    alert("Muchas gracias por escribirnos");
    document.fevento.submit();
}

function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}

function valida_enviaop() {
    //envio de formulario
    alert("Muchas gracias por dejarnos tu opinion");
    document.fopinion.submit();
}