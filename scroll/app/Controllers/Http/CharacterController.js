'use strict'
const axios = require('axios');
const mongoose = require('mongoose')
const PlayerCharacter = use('App/Models/Characters')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with characters
 */
class CharactersController {
  /**
   * Show a list of all characters.
   * GET characters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try{
      const characters =  await  PlayerCharacter.all()   

      return response.status(200).send(characters)
      }catch(err){
        console.log(err)
        response.status(400).json('Erro ao listar')
      }
  }

  async getCharacters({params, request, response}) {
    
    const { idClass } = params

   
    const baseUrl = 'https://api.open5e.com/'
    const configResquest = {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
      url: `${baseUrl}classes/${idClass}`
    }
    
    const responseApi = await axios.request(configResquest)
    const classe = responseApi.data
    const data = {
      name: classe.name,
      slug: classe.slug,
      hitDice: classe.hit_dice,
      spellCasting: classe.spellcasting_ability
    }
    return response.json(data)
  }

  /**
   * Render a form to be used for creating a new character.
   * GET characters/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    try{
      const character = new PlayerCharacter()
      character.playerId = 1
      character.name = request.body.name
      character.race = request.body.race
      character.className = request.body.className
      await character.save()
      return response.status(200).send(`Personagem salvo com sucesso`)
    }catch(err){
      console.log(err)
      return response.json('Falha ao salvar')
    }
  }

  /**
   * Create/save a new character.
   * POST characters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single character.
   * GET characters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing character.
   * GET characters/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update character details.
   * PUT or PATCH characters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a character with id.
   * DELETE characters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CharacterController
