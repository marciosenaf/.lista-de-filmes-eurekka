const mongoose = require('mongoose')

const Filmes2 = mongoose.model('Filmes2', {

    //TOP filmes de Ação
    poster2: String,
    titulo2: String,
    genero2: String,
    enredo2: String,
    nota2: String
})

module.exports = Filmes2
