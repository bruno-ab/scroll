import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import UserSchema from '../users/model/schema'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { config } from '../../config/config'


interface User {
    email: number
    password: string
}

const loginUser = async (req: Request, res: Response)  => {
    try {
        const {email, password } = req.body
        const user = await checkLogin(email, password)        
        
        if(!user._id) return res.status(401).json('Falha na autenticação')
        
        
        const token = sign({},
           config.jwt.secret,
            { subject: String(user._id),expiresIn: config.jwt.expiresIn }            
        )

        return res.status(200).json(token)
    } catch(err) {
        console.log(err)
        return res.status(400).json('Não foi possível autenticar')
    }

}



const checkLogin =  async (email: String, password: String) => {
    const user: any = await UserSchema.findOne({email})
    if (!user) false 
    const pass = await compare(password,user.password)
    return user
}

export { loginUser }