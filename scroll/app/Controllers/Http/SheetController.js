'use strict'
const User = use('App/Models/User')
const Sheet = use('App/Models/Sheet')
const request = use('Adonis/Src/Request')
const response = use('Adonis/Src/Response')

class SheetController {
    async getSheets ({ params,request, response })
    {
   
    }

    async saveSheet ({ request, response }) {
        try{
            const user = await User.find(id)
            const sheet = await new Sheet()
            
            sheet.player = user.name
            sheet.campaign = 'Campanha teste'
            sheet.system = 'Dungeons and Dragons'
            sheet.header = { name: 'Boromir', age: 37, description: 'blablabla', race: 'human', height: '1,87', weight: '89kg' }
            sheet.attributes = {  }
            await sheet.save()
            return response.status(200).send(`Ficha adicionada com sucesso`)
          }catch(err){
            console.log(err)
            return response.json('Falha ao salvar a ficha')
          }
    }
}

module.exports = SheetController
