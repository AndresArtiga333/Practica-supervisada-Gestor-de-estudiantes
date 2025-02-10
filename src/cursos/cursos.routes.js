import { Router } from "express";
import { cursosValidator, actualizarCursoValidator } from "../middlewares/validator.js";
import { crearCurso, getCursosImpartidos, editarCursos, eliminarCurso } from "./cursos.controller.js";

const router = Router();

router.post("/crearCurso/:pid", cursosValidator, crearCurso )

router.get("/listarCursos/:pid", getCursosImpartidos)

router.patch("/actualizarCurso", actualizarCursoValidator, editarCursos)

router.delete("/eliminarCurso/:cid", eliminarCurso)

export default router;