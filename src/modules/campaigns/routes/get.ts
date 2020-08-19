import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import mongoose from 'mongoose'

const getCampaigns = async (req: Request, res: Response)  => {
    const {id} = req.params
    const playerId = mongoose.Types.ObjectId(id)
    try{
       const aggregate: any = [
        {$match: {
            $expr:{
                $or:[
                    {$in: [playerId, '$players']},
                    {$eq: ['$master',playerId]}
                ]
            }
        }},
        {
            $project: {
                _id: 1,
                name: 1
            }
        }
       ]

       const users =  await CampaignSchema.aggregate(aggregate)
    
        return res.status(200).json(users)
    }catch(err){
        return res.status(400).json('Erro ao obter usuários')
    }

}

export { getCampaigns }