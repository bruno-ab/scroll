'use strict'
const User = use('App/Models/User')
const request = use('Adonis/Src/Request')
const response = use('Adonis/Src/Response')

class UserController {
    async index ({ request, response }) {
        try{
        const users = await User.all()  
        // console.log(response)]
      
        return response.status(200).send(users)
        }catch(err){
          console.log(err)
          response.status(400).json('Erro ao listar')
        }
      }

      async save ({ request, response }) {
        try{
          const user = new User()
          user.username = request.body.username
          user.password = request.body.password
          user.email = request.body.email
          await user.save()
          return response.status(200).send(`Usuário salvo com sucesso`)
        }catch(err){
          console.log(err)
          return response.json('Falha ao salvar')
        }
    }

    async getUser ({ params,request, response })
    {
      const id = params.id
      try{
        const user = await User.find(id)
        return response.status(200).send(user)
      }catch(err){
        return response.json('Não foi possivel encontrar o usuário')
      }
    }
}

module.exports = UserController
