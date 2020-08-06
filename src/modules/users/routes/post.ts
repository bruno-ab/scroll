import {Request, Response} from 'express'
import UserSchema from '../model/schema'
import {hash} from 'bcrypt'

const createUser = async (req: Request, res: Response)  => {
    try{
        
        const user =  {...req.body }
        
        user.password = await hash(user.password, 8)
        
        const existUser = await UserSchema.findOne({email: user.email}).lean()
        if (existUser) return res.status(400).json({message: 'Email já cadastrado'})
        
        await UserSchema.create(user)
        
        return res.status(200).json('Usuário criado com sucesso')
    }catch(err){
        console.log(err)
        return res.status(400).json('Não foi possível criar usuário')
    }

}

export { createUser }