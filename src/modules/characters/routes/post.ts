import {Request, Response} from 'express'
import CharacterSchema  from '../model/schema'
import mongoose from 'mongoose'

const createCharacter = async (req: Request, res: Response)  => {
    try{
        
        const character =  {...req.body }
        
        const characterPlayerId = mongoose.Types.ObjectId(character.player)    
        const countCharacters = await CharacterSchema.find({player: characterPlayerId})
       
        if (countCharacters.length >= 3) return res.status(401).json('Numero máximo de personagens já criados')
     
        // await CharacterSchema.create(character)
        
        return res.status(200).json('Personagem criado com sucesso')
    }catch(err){
        console.log(err)
        return res.status(400).json('Não foi possível criar o personagem')
    }
}

const validationHeader = async (header: Object) => {

}

export { createCharacter }