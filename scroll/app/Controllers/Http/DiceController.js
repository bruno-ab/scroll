'use strict'

class DiceController {
    async getDice ({ request, response, params }) {
        
        // console.log(request)
        const minDice = Number(params.minDice)
        const maxDice = Number(params.maxDice)
        const number = Number(params.number)
        const dices = []

        for (let index = 0; index < number; index++) {
            // function to roll dices! good lucky
            const dice = await this.rollDice(minDice, maxDice, number)
            dices.push(dice)         
        }
        
        const data = {
            dicesRolled: number,
            result: dices
        }
        return response.json(data)
       
    }
    
    async rollDice(min,max,number){

        const checkDice = [100,20,12,10,8,6,4]
        const n = checkDice.includes(max)
        if (n === true) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        } else {
            return 0
        }
    
   
    }
    
}    
     
       
    
    



module.exports = DiceController
