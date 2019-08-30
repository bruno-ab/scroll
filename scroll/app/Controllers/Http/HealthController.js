'use strict'

class HealthController {
    index({request,response}){
        response = 'health checked'
        return response
    }
}

module.exports = HealthController
