'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CharactersSchema extends Schema {
  up () {
    this.create('characters', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.text('background','longtext')
      table.string('name', 80).notNullable().unique()
      table.string('class', 80).notNullable()
      table.string('race', 15).notNullable()
      table.string('alignment', 10).notNullable()
      table.float('experience').notNullable()
      table.boolean('multiclass').notNullable()
      table.boolean('spellcaster').notNullable()
      table.integer('level').notNullable()
      table.json('abilities').notNullable()
      table.json('description').notNullable()
      table.integer('hp').notNullable()
      table.json('hp_history')
      table.integer('mp').notNullable()
      table.json('equipment')
      table.json('proficiences').notNullable()
      table.json('spells')
      table.json('skills')
      table.timestamps()
    })
  }

  down () {
    this.drop('characters')
  }
}

module.exports = CharactersSchema
