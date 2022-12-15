import { mongoose } from 'mongoose';
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    lenguaje: String,
    codigo: String,
    tipolenguaje: String,
    usoprincipal: String
});
//exportar modelo
export const Infolenguaje = mongoose.model("infolenguaje", infoSchema);
