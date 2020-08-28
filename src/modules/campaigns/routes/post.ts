import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import {hash} from 'bcrypt'
import mongoose from 'mongoose'

const createCampaign = async (req: Request, res: Response)  => {
    try{
        
        const campaign =  {...req.body }
        
        campaign.master = mongoose.Types.ObjectId(campaign.master)    
        const countCampaigns = await CampaignSchema.find({master: campaign.master})
       
        if (countCampaigns.length >= 2) return res.status(401).json('Numero máximo de campanhas já criadas')
       
        await CampaignSchema.create(campaign)
        
        return res.status(200).json('Campanha criada com sucesso')
    }catch(err){
        console.log(err)
        return res.status(400).json('Não foi possível criar a campanha')
    }

}

export { createCampaign }