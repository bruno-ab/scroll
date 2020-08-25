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
                $and: [
                    {$or:[
                        {$in: [playerId, '$players']},
                        {$eq: ['$master',playerId]},
                    ]},
                    {$and: [
                            {$eq:['$isActive', true]}
                    ]}                    
                ], 
            }
        }},
        {
            $project: {
                _id: 1,
                name: 1,
                players: 1
            }
        }
       ]

       const campaigns =  await CampaignSchema.aggregate(aggregate)
    
        return res.status(200).json(campaigns)
    }catch(err){
        console.log(err)
        return res.status(400).json('Erro ao obter campanhas')
    }

}

export { getCampaigns }