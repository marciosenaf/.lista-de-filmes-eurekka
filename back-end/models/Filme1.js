const mongoose = require('mongoose')

const Filmes1 = mongoose.model('Filmes1', {

    //TOP filmes de comedia
    poster1: String,
    titulo1: String,
    genero1: String,
    enredo1: String,
    nota1: String
})

module.exports = Filmes1
