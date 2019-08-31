'use strict'
const User = use('App/Models/User')
const request = use('@adonisjs/framework/src/Request')
const response = use('Adonis/Src/Response')

class UserController {
    async index () {
      const users = User.all()  
      console.log(response)
      return new response(users)
      }

      async save (request,response) {
        try{
          const user = new User()
          user.username = 'John Doe'
          user.password = '123456'
          user.email = 'johndoe@gmail.com'
          
          await user.save()
          return response.send(`Usuário salvo com sucesso`)
        }catch(err){
          console.log(err)
          return response.send('Falha ao salvar')
        }

      }
}

module.exports = UserController
