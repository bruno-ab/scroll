/* GET users listing. */


const log = (request, response , next ) => {
const {method, url } = request

    console.log(`the method is: ${method.toUpperCase()}`)
    console.log(`the url is: ${url}`)
    console.time('request time: ')
    next()
    console.timeEnd('request time: ')
}

module.exports = log;
