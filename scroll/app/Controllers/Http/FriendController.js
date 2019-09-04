'use strict'
const User = use('App/Models/User')
const User = use('App/Models/Friend')
const request = use('Adonis/Src/Request')
const response = use('Adonis/Src/Response')

class FriendController {
    async getUserFriends ({ params,request, response })
    {
      const id = params.id
      try{
        const user = await User.find(id)
        return response.status(200).send(user)
      }catch(err){
        return response.json('Não foi possivel encontrar o usuário')
      }
    }

    async addFriend ({ request, response }) {
        try{
          const user = await User.find(id)
          const friends = await Friend.find(user.id)
          const newFriend = await User.find(idFriend)
          friends.push(newFriend.id)
          await friends.save()
          return response.status(200).send(`Usuário ${newFriend.name} foi adicionado a sua lista de amigos`)
        }catch(err){
          console.log(err)
          return response.json('Falha ao salvar')
        }
      }
}

module.exports = FriendController
