const mongoose = require('mongoose')


const Filmes = mongoose.model('Filmes', {
    
    //TOP 10 filmes de terror
    poster: String,
    titulo: String,
    genero: String,
    enredo: String,
    nota: String,


})


module.exports = Filmes
