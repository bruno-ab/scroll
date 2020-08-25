import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import UserSchema from '../../users/model/schema'
import {hash} from 'bcrypt'
import mongoose, { Mongoose } from 'mongoose'

const invitePlayer = async (req: Request, res: Response)  => {
    try{
        
        const {id} = req.params
        const { campaign } =  req.body 
        
        await CampaignSchema.updateOne({ _id: id }, { $set: campaign })
        
        return res.status(200).json('Campanha atualizada com sucesso')
    }catch(err){
        console.log(err)
        return res.status(400).json('Não foi possível atualizar a campanha')
    }

}


export { invitePlayer }