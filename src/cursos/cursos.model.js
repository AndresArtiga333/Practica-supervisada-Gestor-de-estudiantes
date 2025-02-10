import { Schema, model } from "mongoose";

const cursosSchema = Schema({
    nombre:{
        type: String,
        required: [true, "El nombre del curso es necesario"]
    },
    status:{
        type: Boolean,
        default: true
    }
})

cursosSchema.methods.toJSON = function(){
    const {__v, _id, ...cursos} = this.toObject()
    cursos.cid = _id
    return cursos
}
export default model("Cursos", cursosSchema)