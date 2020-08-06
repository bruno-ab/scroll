import {Request, Response} from 'express'

const rollDice = async (req: Request, res: Response) => {
    
    const dice: any = req.query.dice
    const rolls = []
    const roll = await getLucky(dice)
    rolls.push(roll)
    return res.status(200).json(rolls)
}

const getDice = async (dice: string) => {
    const faces: number = Number(dice.split('d')[1])
    return faces
}
const getLucky = async (dice: string) => {
    const faces: number = await getDice(dice)
    return await getRandomNumberFromDice(1,faces)
}


const getRandomNumberFromDice =  async (min: number, max: number) => {
    const result = Math.floor(Math.random() * (max - min)) + min
  
    return result
}

export { rollDice }