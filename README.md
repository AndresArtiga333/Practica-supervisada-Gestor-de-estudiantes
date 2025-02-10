# API de Gestión de Estudiantes

Esta API sirve para que alumnos y profesores gestionen sus cursos.

## Variables de entorno

Se creó un archivo `.env` en la raíz del directorio con las siguientes variables:

```
PORT=3000

URI_MONGO=mongodb://localhost:27017/gestorDeEstudiantes

SECRETORPRIVATEKEY=|_0nDre$
```

## Endpoints

### Register

- **URL**: `/gestorAcademico/v1/auth/register`
- **Método**: `POST`
- **Cuerpo** (form-data):

```
nombre=string
apellido=string
correo=string
contra=string
profilePicture=file  # Aquí va un archivo
```

### Register (para agregar un alumno)

- **URL**: `/gestorAcademico/v1/auth/register`
- **Método**: `POST`
- **Cuerpo** (form-data):

```
nombre=string
apellido=string
correo=string
contra=string
profilePicture=file  # Aquí va un archivo
```

### Login

- **URL**: `/gestorAcademico/v1/auth/login`
- **Método**: `POST`
- **Cuerpo** (body):

```
{
    "correo": "correo del usuario",
    "contra": "contraseña del usuario"
}
```

### Agregar cursos

- **URL**: `/gestorAcademico/v1/cursos/crearCurso/"id del profesor"`
- **Método**: `POST`
- **Cuerpo** (body):

```
{
    "nombre": "Nombre del curso"
}
```

### Listar cursos por profesor

- **URL**: `/gestorAcademico/v1/cursos/listarCursos/id del profesor`
- **Método**: `GET`

### Actualizar cursos

- **URL**: `/gestorAcademico/v1/cursos/actualizarCurso`
- **Método**: `PATCH`
- **Cuerpo** (body):

```
{
    "pid": "id del profesor",
    "cid": "id del curso",
    "nuevoNombre": "nuevo nombre"
}
```

### Eliminar cursos

- **URL**: `/gestorAcademico/v1/cursos/eliminarCurso/id del curso`
- **Método**: `DELETE`

### Asignar un alumno

- **URL**: `/gestorAcademico/v1/alumnos/asignarAlumno/id del curso`
- **Método**: `POST`
- **Cuerpo** (body):

```
{
    "aid": "id del alumno"
}
```

