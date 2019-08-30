'use strict'
const User = use('App/Models/User')

class UserController {
    async index (request, response) {
        return await User.all()
      }

      async save (request,response) {
        const user = new User()
        user.username = 'John Doe'
        user.password = '123456'
        user.email = 'johndoe@gmail.com'
        
        await user.save()
      }
}

module.exports = UserController
