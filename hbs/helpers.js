const hbs = require('hbs');

//No necesitamos exportar ninguna variable en especial. Al hacer el require desde otra pagina ejecutaremos todo este codigo



//Helper: Es una funcion que se dispara cuando se requiere
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {

        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    })

    return palabras.join(' ');
})

hbs.registerHelper('retornarAnio', () => {
    return new Date().getFullYear();
})