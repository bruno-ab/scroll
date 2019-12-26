'use strict'
const axios = require('axios')
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 5 * 60 })

class TestController {
  async getClasses ({ request, auth, response}) { 
    const {id} = request.params
    const result = await axios.get(`http://dnd5eapi.co/api/classes/${id}`)

    const cacache = await cache.set('123456', result.data, 9999000)
    const cacache2 = await cache.get('123456')
    console.log(cacache2)
    return response.json(result.data)
  }
}

module.exports = TestController