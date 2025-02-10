import jwt from "jsonwebtoken"

export const generateJWTProfesores = (pid = " ") =>{

    return new Promise((resolve, reject) =>{
        const payload = {pid}
        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: "1h"
            },
            (err, token) =>{
                if(err){
                    reject({
                        success: false,
                        message: err
                    })
                }else{
                    resolve(token)
                }
            }
        )
    })
}

export const generateJWTAlumnos = (aid = " ") =>{

    return new Promise((resolve, reject) =>{
        const payload = {aid}
        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: "1h"
            },
            (err, token) =>{
                if(err){
                    reject({
                        success: false,
                        message: err
                    })
                }else{
                    resolve(token)
                }
            }
        )
    })
}

