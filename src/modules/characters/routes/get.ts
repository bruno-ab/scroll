import {Request, Response} from 'express'
import CharacterSchema from '../model/schema'
import mongoose from 'mongoose'

const getCharacter = async (req: Request, res: Response)  => {
    const {id} = req.params
    const playerId = mongoose.Types.ObjectId(id)

    const filters: any = {}

    if(req.query.campaign){
        const campaignId = mongoose.Types.ObjectId(String(req.query.campaign))
        filters.campaign  =  {$eq: [campaignId, '$campaign']}
        filters.active =  {$eq:['$isActive', true]}
    }
    try{
       const aggregate: any = [
        // {$match: { player: playerId} },
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
       console.log(aggregate)
       const characters =  await CharacterSchema.aggregate(aggregate)
       
        return res.status(200).json(characters)
    }catch(err){
        console.log(err)
        return res.status(400).json('Erro ao obter campanhas')
    }

}

export { getCharacter }