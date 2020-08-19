import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import mongoose from 'mongoose'

const getByUser = async (req: Request, res: Response)  => {
    
    try{
       const aggregate: any = [
        {$match: {
            master: mongoose.Types.ObjectId('5f2b423ee7f79f2f6bd74435')
        }},
        {
            $project: {
                _id: 1,
                name: 1,
                description: 1
            }
        }
       ]

       const users =  await CampaignSchema.aggregate(aggregate)
    
        return res.status(200).json(users)
    }catch(err){
        return res.status(400).json('Erro ao obter usuários')
    }

}

export { getByUser }