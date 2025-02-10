import { Router } from "express";
import { asignarCursoAlumno } from "./alumnos.controller.js";

const router = Router()

router.post("/asignarAlumno/:cid", asignarCursoAlumno)

export default router;