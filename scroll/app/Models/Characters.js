'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Characters extends Model {
    user () {
        return this.belongsTo('App/Models/User')
      }

}

module.exports = Characters
