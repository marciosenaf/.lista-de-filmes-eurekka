const mongoose = require('mongoose')

const Filmes3 = mongoose.model('Filmes3', {

    //TOP filmes aleatorios
    poster3: String,
    titulo3: String,
    nota3: String
})

module.exports = Filmes3