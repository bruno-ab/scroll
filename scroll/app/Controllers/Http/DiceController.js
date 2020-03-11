'use strict'

class DiceController {
    async getDice ({ request, response, params }) {
        
        const query = request.get()
        const minDice = Number(params.minDice)
        const maxDice = Number(params.maxDice)
        const number = Number(params.number)
        const dices = []
        let success = 0
        let failures = 0
        for (let index = 0; index < number; index++) {
            // function to roll dices! good lucky
            const dice = await this.rollDice(minDice, maxDice, number)
            dices.push(dice)         
        }

        // check success if exist in query
        if(query.cd) {
            for(let dice of dices) {
                if(dice >= query.cd) success++ 
            }
        }
        // check failures if true in query
        if (query.failures) {
            for(let dice of dices) {
                if(dice ===  1 ) failures++ 
            }
        }
        
        const data = {
            dicesRolled: number,
            result: dices,
            success: success,
            failures: failures
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
