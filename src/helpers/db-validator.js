import Profesor from "../profesores/profesores.model.js"
import Alumno from "../alumnos/alumnos.model.js"

export const correoProfesorExists = async (correo = "") =>{
    const existe = await Profesor.findOne({correo})
    if(existe){
        throw new Error(`El correo ${correo} ya esta registrado`)
    }
}

export const correoAlumnoExists = async (correo = "") =>{
    const existe = await Alumno.findOne({correo})
    if(existe){
        throw new Error(`El correo ${correo} ya esta registrado`)
    }
}