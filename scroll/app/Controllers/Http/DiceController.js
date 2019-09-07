'use strict'

class DiceController {
    async getDice ({ request, response, params }) {
        
        const id = params.id
        const dice = await this.rollDice(id)
        
        this.rollDice = request.post()
           
        return response.json(dice)
                
        
        
    }
    
    async rollDice(max){
        
        max = Math.ceil(max);
        
        if (max == 20) {
            return Math.floor(Math.random() * 20) + 1  
        } 
        else if ( max == 12) {
            return Math.floor(Math.random() * 12) + 1
        }
        else if ( max == 10) {
            return Math.floor(Math.random() * 10) + 1
        }
        else if ( max == 8) {
            return Math.floor(Math.random() * 8) + 1
        }
        else if ( max == 6) {
            return Math.floor(Math.random() * 6) + 1
        }
        else if ( max == 4) {
            return Math.floor(Math.random() * 4) + 1
        }
        else if ( max == 100) {
            return Math.floor(Math.random() * 100) + 1
        }
        else {
            return ('Tipo de Dado inválido.')
        }    
    
            
        }

    
}


module.exports = DiceController
