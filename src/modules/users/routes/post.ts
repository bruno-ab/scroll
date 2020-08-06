import {Request, Response} from 'express'
import UserSchema from '../model/schema'

const createUser = async (req: Request, res: Response)  => {
    try{
        const user =  {...req.body }
        await UserSchema.create(user)
        return res.status(200).json('Usuário criado com sucesso')
    }catch(err){
        return res.status(400).json('Não foi possível criar usuário')
    }

}

export { createUser }