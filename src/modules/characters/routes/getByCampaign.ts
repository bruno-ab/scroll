import {Request, Response} from 'express'
import CharacterSchema from '../model/schema'
import mongoose from 'mongoose'

const getCharacterByCampaign = async (req: Request, res: Response)  => {
    const {id} = req.params
    const campaignId = mongoose.Types.ObjectId(id)

    const filters: any = {}

    try{
       const aggregate: any = [
        {$match: { campaign: campaignId} },
        {$lookup:{
            from:'users',
            localField: 'player',
            foreignField:'_id' ,
            as: 'user'

        }},
        {$unwind:'$user' },
        {
            $project: {
                _id: 1,
                name: 1,
                class: '$header.class',
                playerName: '$user.name'
            }
        }
       ]
       const characters =  await CharacterSchema.aggregate(aggregate)
       
        return res.status(200).json(characters)
    }catch(err){
        console.log(err)
        return res.status(400).json('Erro ao obter personagens')
    }

}

export { getCharacterByCampaign }