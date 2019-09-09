'use strict'

class DiceController {
    async getDice ({ request, response, params }) {
        
        
        const minDice = params.minDice
        const maxDice = params.maxDice
        
        
        const number = params.number
        
        const dice = await this.rollDice(minDice, maxDice, number)
        
        
        
        this.rollDice = await request.post()
        return response.json(dice)
                
        
        
    }
    
    async rollDice(min,max){
        
       
        min = 1;
        max = Math.floor(max);
        var chekDice = [100,20,12,10,8,6,4]
        var n = chekDice.includes(max)

        if (n == true) {

            return Math.floor(Math.random() * (max - min + 1)) + min;
            
        } else {
            return ('Tipo de Dado inválido')
        }
        
   
    }
    
}    
     
       
    
    



module.exports = DiceController
