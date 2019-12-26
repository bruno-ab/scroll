'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SheetSchema extends Schema {
  up () {
    this.create('sheets', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sheets')
  }
}

module.exports = SheetSchema
