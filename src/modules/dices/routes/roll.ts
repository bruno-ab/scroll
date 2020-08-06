import {Request, Response} from 'express'

const dices = [
    'd4','d6','d8','d10','d12','d20','d100'
]

const rollDice = async (req: Request, res: Response) => {
    try{
        let quantity = 1
        let dice: any = 'd20'
        
        if (req.query.dice) {
            dice = req.query.dice
            if(!dices.includes(dice)){
                return res.status(400).json('Formato de dado inválido para rolagem')
            }
        }
    
        if (req.query.quantity) quantity = Number(req.query.quantity)
        
        const rolls = []
        let i = 0

        while(i < quantity){
            const roll = await getLucky(dice)
            rolls.push(roll)
            i++
        }
       
        return res.status(200).json(rolls)
    }catch(err){
        console.log(err)
        return res.status(400).json('Erro na rolagem de dados')
    }   
}

const getDice = async (dice: string) => {
    const faces: number = Number(dice.split('d')[1])
    return faces
}
const getLucky = async (dice: string) => {
    const faces: number = await getDice(dice)
    return await getRandomNumberFromDice(1,faces)
}


const getRandomNumberFromDice =  async (min: number = 1, max: number) => {
    const result = Math.floor(Math.random() * (max - min)) + min
  
    return result
}

export { rollDice }