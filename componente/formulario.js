const Formulario = (form)=> {
    const dados = {
        texto: form.texto.value,
        data: form.data.value
    }

    return dados;
}

export default Formulario;