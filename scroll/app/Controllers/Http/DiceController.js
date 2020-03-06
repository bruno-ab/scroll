'use strict'

class DiceController {
    async getDice ({ request, response, params }) {
        
        
        const minDice = params.minDice
        const maxDice = params.maxDice
        const number = params.number
        const dices = []

        for (let index = 0; index < number; index++) {
            const dice = await this.rollDice(minDice, maxDice, number)
            dices.push(dice)    //         
        }
        
        return response.json(dices);
       
    }
    
    async rollDice(min,max,number){
        
        repeat = number 
        min = 1;
        max = Math.floor(max);
        var chekDice = [100,20,12,10,8,6,4]
        var n = chekDice.includes(max)

        for (i in range(repeat)) {
        if (n == true) {

            return Math.floor(Math.random() * (max - min + 1)) + min;
            
        } else {
            return ('Tipo de Dado inválido')
        }
    }
   
    }
    
}    
     
       
    
    



module.exports = DiceController
