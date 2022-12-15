import { mongoose } from 'mongoose';
const usuario='root';
const pass='73MRZg3ceqRRDBOc';
const db = 'lenguaje'
const uri= `mongodb+srv://${usuario}:${pass}@clusteryael.nve0zmr.mongodb.net/${db}?retryWrites=true&w=majority`;

export const conex = mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology:true}
)
.then(()=> console.log('Se conecto correctamente la Base de Datos'))
.catch(e => console.log('Error al conectar la base de datos', e))
