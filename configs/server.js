'use strict'

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import {dbConnection} from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import cursosRoutes from "../src/cursos/cursos.routes.js"
import apiLimiter from "../src/middlewares/validar-cantidad-peticiones.js"
import alumnoRoutes from "../src/alumnos/alumnos.routes.js"

const middlewares = (app) =>{
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors()) 
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) =>{
    app.use("/gestorAcademico/v1/auth", authRoutes)
    app.use("/gestorAcademico/v1/cursos", cursosRoutes)
    app.use("/gestorAcademico/v1/alumnos", alumnoRoutes)
}
const conectarDB = async () =>{
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connection failed ${err}`)
        process.exit(1)
    }
}

export const initServer = () =>{
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    }catch(err){
        console.log(`Server init failed ${err}`)
    }
}
