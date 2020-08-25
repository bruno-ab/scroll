import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import UserSchema from '../../users/model/schema'
import {hash} from 'bcrypt'
import mongoose, { Mongoose } from 'mongoose'

const invitePlayer = async (req: Request, res: Response)  => {
    try{
        
        const {id} = req.params
        const { player } =  req.body 
        
        const user: any = await checkPlayer(player)
        
        if(!user._id) return res.status(400).json('Jogador não encontrado')
        
        const campaign: any = await CampaignSchema.findOne({_id: id}).lean()
        
        const update = await addPlayers(campaign.players, id)
        console.log(update)  
        await CampaignSchema.updateOne({ _id: id }, { $set: update })
        
        return res.status(200).json('Campanha atualizada com sucesso')
    }catch(err){
        console.log(err)
        return res.status(400).json('Não foi possível atualizar a campanha')
    }

}

const checkPlayer = async(playerId: string) => {
    const user = await UserSchema.findById(mongoose.Types.ObjectId(playerId)).lean()
    return user
}

const addPlayers = async(players: any, playerId: any) => {
    const AllplayersIds = players.map((id: any) => {
        return id.toString()
    })
    
    if(!AllplayersIds.includes(playerId.toString())) players.push(playerId)
    
    const update = {
        players: players
    }
    
    return update
}

export { invitePlayer }