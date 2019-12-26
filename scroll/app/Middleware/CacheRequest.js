'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 5 * 60 })
class CacheRequest {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    await this.getCache(request)
    await next()
  }


  async getUrlFromRequest (req) {
    const url = req.url()
    return url
  }

  async setCache (request, data) {
    console.log(this.getUrlFromRequest(request))
    await cache.set('123456' , data)
  } 

  async getCache (request, res) {
   
    const content = await cache.get('123456')
    console.log(content)
    if (content) {
      console.log('getted from cache')
      return res.status(200).send(content)
    }
  }
}

module.exports = CacheRequest
