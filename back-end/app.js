
// importaçoes

const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const Filme = require('./models/Filme')

const Filme1 = require('./models/Filme1')

const Filme2 = require('./models/Filme2')

const Filme3 =require('./models/Filme3')

//------------------> configuração da api <-------------------

const app = express()

app.use(
express.urlencoded({
extended: true,
}),
)

app.use(express.json())

//-----------------> CORS (para resolver o problema ao consumir a API pelo fetch) 

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*"); 
    app.use(cors());
    next();
    });

//------------------> ROTAS <-------------------

//------------------> ROTA TESTE <-------------------

app.get('/', (req, res) => {
    res.json({ message: 'tá funcionando!' })
    })

//------------------> 00  ROTA GET para top filmes de terror (Buscar filmes no geral )<-------------------

app.get('/movies', async (req, res) => {
    try {
        const tfilme = await Filme.find()
    
        res.status(200).json(tfilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })
    
    //----------------->00 ROTA GET para top filmes de terror ( Buscar filmes em especifico )<-------------------
    
    app.get('/movies/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const ufilme = await Filme.findOne({ _id: id })
    
        if (!ufilme) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
        }
    
        res.status(200).json(ufilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })

//------------------>00 ROTA POST para top filmes de terror <-------------------

app.post('/movies', async (req, res) => {
const { poster, titulo, genero, enredo, nota } = req.body

const descricao = {
    poster,
    titulo,
    genero,
    enredo,
    nota,
}

try {
    await Filme.create(descricao)

    res.status(201).json({ message: 'Filme inserido no sistema com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>00 ROTA PATCH para top filmes de terror <-------------------

app.patch('/movies/:id', async (req, res) => {
const id = req.params.id

const { poster, titulo, genero, enredo, nota, } = req.body

const descricao = {
    poster,
    titulo,
    genero,
    enredo,
    nota,
}


try {
    const update = await Filme.updateOne({ _id: id }, descricao)

    if (update.matchedCount === 0) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
    }

    res.status(200).json(descricao)
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>00 ROTA DELETE para top filmes de terror <-------------------

app.delete('/movies/:id', async (req, res) => {
const id = req.params.id

const excluir = await Filme.findOne({ _id: id })

if (!excluir) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
}

try {
    await Filme.deleteOne({ _id: id })

    res.status(200).json({ message: 'Filme removido com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})


//------------------------------------------------------------------------------------------------------------------------------------


//------------------> 01  ROTA GET para top filmes de comedia (Buscar filmes no geral )<-------------------

app.get('/movies1', async (req, res) => {
    try {
        const tfilme = await Filme1.find()
    
        res.status(200).json(tfilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })
    
    //----------------->01 ROTA GET para top filmes de comedia ( Buscar filmes em especifico )<-------------------
    
    app.get('/movies1/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const ufilme = await Filme1.findOne({ _id: id })
    
        if (!ufilme) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
        }
    
        res.status(200).json(ufilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })

//------------------>01 ROTA POST para top filmes de comedia <-------------------

app.post('/movies1', async (req, res) => {
const { poster1, titulo1, genero1, enredo1, nota1 } = req.body

const descricao = {
    poster1,
    titulo1,
    genero1,
    enredo1,
    nota1,
}

try {
    await Filme1.create(descricao)

    res.status(201).json({ message: 'Filme inserido no sistema com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>01 ROTA PATCH para top filmes de comedia <-------------------

app.patch('/movies1/:id', async (req, res) => {
const id = req.params.id

const { poster1, titulo1, genero1, enredo1, nota1,  } = req.body

const descricao = {
    poster1,
    titulo1,
    genero1,
    enredo1,
    nota1,
}


try {
    const update = await Filme1.updateOne({ _id: id }, descricao)

    if (update.matchedCount === 0) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
    }

    res.status(200).json(descricao)
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>01 ROTA DELETE para top filmes de comedia <-------------------

app.delete('/movies1/:id', async (req, res) => {
const id = req.params.id

const excluir = await Filme1.findOne({ _id: id })

if (!excluir) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
}

try {
    await Filme1.deleteOne({ _id: id })

    res.status(200).json({ message: 'Filme removido com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})


//-------------------------------------------------------------------------------------------------------------------------------------

//------------------> 02  ROTA GET para top filmes de Ação (Buscar filmes no geral )<-------------------

app.get('/movies2', async (req, res) => {
    try {
        const tfilme = await Filme2.find()
    
        res.status(200).json(tfilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })
    
    //----------------->02 ROTA GET para top filmes de Ação ( Buscar filmes em especifico )<-------------------
    
    app.get('/movies2/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const ufilme = await Filme2.findOne({ _id: id })
    
        if (!ufilme) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
        }
    
        res.status(200).json(ufilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })

//------------------>02 ROTA POST para top filmes de comedia <-------------------

app.post('/movies2', async (req, res) => {
const { poster2, titulo2, genero2, enredo2, nota2 } = req.body

const descricao = {
    poster2,
    titulo2,
    genero2,
    enredo2,
    nota2,
}

try {
    await Filme2.create(descricao)

    res.status(201).json({ message: 'Filme inserido no sistema com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>02 ROTA PATCH para top filmes de comedia <-------------------

app.patch('/movies2/:id', async (req, res) => {
const id = req.params.id

const { poster2, titulo2, genero2, enredo2, nota2,  } = req.body

const descricao = {
    poster2,
    titulo2,
    genero2,
    enredo2,
    nota2,
}


try {
    const update = await Filme2.updateOne({ _id: id }, descricao)

    if (update.matchedCount === 0) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
    }

    res.status(200).json(descricao)
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>02 ROTA DELETE para top filmes de comedia <-------------------

app.delete('/movies2/:id', async (req, res) => {
const id = req.params.id

const excluir = await Filme2.findOne({ _id: id })

if (!excluir) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
}

try {
    await Filme2.deleteOne({ _id: id })

    res.status(200).json({ message: 'Filme removido com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})


//------------------------------------------------------------------------------------------------------------------------------------

//------------------> 03  ROTA GET para filmes aleatorios (Buscar filmes no geral )<-------------------

app.get('/movies3', async (req, res) => {
    try {
        const tfilme = await Filme3.find()
    
        res.status(200).json(tfilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })
    
    //-----------------> 03 ROTA GET para filmes aleatorios ( Buscar filmes em especifico )<-------------------
    
    app.get('/movies3/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const ufilme = await Filme3.findOne({ _id: id })
    
        if (!ufilme) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
        }
    
        res.status(200).json(ufilme)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
    })

//------------------>03 ROTA POST para filmes aleatorios <-------------------

app.post('/movies3', async (req, res) => {
const { poster3, titulo3, nota3 } = req.body

const descricao = {
    poster3,
    titulo3,    
    nota3,
}

try {
    await Filme3.create(descricao)

    res.status(201).json({ message: 'Filme inserido no sistema com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>03 ROTA PATCH para filmes aleatorios <-------------------

app.patch('/movies3/:id', async (req, res) => {
const id = req.params.id

const { poster3, titulo3, nota3 } = req.body

const descricao = {
    poster3,
    titulo3,    
    nota3,
}


try {
    const update = await Filme3.updateOne({ _id: id }, descricao)

    if (update.matchedCount === 0) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
    }

    res.status(200).json(descricao)
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------>03 ROTA DELETE para filmes aleatorios <-------------------

app.delete('/movies3/:id', async (req, res) => {
const id = req.params.id

const excluir = await Filme3.findOne({ _id: id })

if (!excluir) {
    res.status(422).json({ message: 'Filme não encontrado!' })
    return
}

try {
    await Filme3.deleteOne({ _id: id })

    res.status(200).json({ message: 'Filme removido com sucesso!' })
} catch (error) {
    res.status(500).json({ erro: error })
}
})

//------------------> CONECTANDO AO MONGO DB <-------------------

mongoose
.connect(
    'mongodb+srv://usuario:usuario@cluster0.dxuom5q.mongodb.net/?retryWrites=true&w=majority',
)
.then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
})
.catch((err) => console.log(err))

