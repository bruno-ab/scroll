'use strict'
const User = use('App/Models/User')
const request = use('Adonis/Src/Request')
const response = use('Adonis/Src/Response')

class UserController {
    async index ({ request, response }) {
      const users = await User.all()  
      // console.log(response)]
     
      return response.status(200).send(users)
      }

      async save ({ request, response }) {
        try{
          const user = new User()
          user.username = request.body.username
          user.password = request.body.password
          user.email = request.body.email
          // await user.save()
          return response.status(200).send(`Usuário salvo com sucesso`)
        }catch(err){
          console.log(err)
          return response.json('Falha ao salvar')
        }

      }
}

module.exports = UserController
