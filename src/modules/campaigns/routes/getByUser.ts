import {Request, Response} from 'express'
import CampaignSchema from '../model/schema'
import mongoose from 'mongoose'

const getByUser = async (req: Request, res: Response)  => {
    let playerId: any
    
    const filters: any = {}

    if(req.query.player){
        playerId = mongoose.Types.ObjectId(String(req.query.player))
        filters.player  =  {$in: [playerId, '$players']}
        filters.active =   {$eq:['$isActive', true]}
    }

    if(req.query.master){
        playerId = mongoose.Types.ObjectId(String(req.query.master))
        filters.player = {$eq: ['$master',playerId]}
        filters.active = {}
    }

    try{
        const aggregate: any = [
            {$match: {
                $expr:{
                    $and: [
                        {$or:[
                            {...filters.player}
                        ]},
                        {$and: [
                              {...filters.active}
                        ]}                    
                    ], 
                }
            }},
            {
                $project: {
                    _id: 1,
                    name: 1,
                    isActive: 1
                }
            }
        ]
        const campaigns = await CampaignSchema.aggregate(aggregate)

        return res.status(200).json(campaigns)
    }catch(err){
        console.log(err)
        return res.status(400).json('Erro ao obter usuários')
    }

}

export { getByUser }