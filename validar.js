function valida_enviaev() {
    //validación de nombre
    if (document.fevento.nombre.value.length == 0) {
        alert("Completar nombre")
        document.fevento.nombre.focus()
        return 0;
    }
    //validación de email
    if (document.fevento.mail.value.length == 0) {
        alert("Completar email")
        document.fevento.mail.focus()
        return 0;
    }
    //validación de telefono, tiene que ser entero
    numero = document.fevento.numero.value
    numero = validarEntero(numero)
    document.fevento.numero.value = numero
    if (numero == "") {
        alert("Introducir un número de teléfono")
        document.fevento.numero.focus()
    return 0;
    }
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
    //valido el nombre
    if (document.fopinion.nombre.value.length == 0) {
        alert("Completar nombre")
        document.fopinion.nombre.focus()
        return 0;
    }
    //valido el email
    if (document.fopinion.mail.value.length == 0) {
        alert("Completar email")
        document.fopinion.mail.focus()
        return 0;
    }
    //envio de formulario
    alert("Muchas gracias por dejarnos tu opinion");
    document.fopinion.submit();
}