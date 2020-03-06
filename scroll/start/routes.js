'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('welcome')
// USER ROUTES
Route.get('/user','UserController.index').middleware('auth')
Route.get('/user/:id','UserController.getUser').middleware()
Route.post('/user','UserController.save')
// DICE ROUTES
Route.get('/dice/:minDice/:maxDice/:number', 'DiceController.getDice')
// TESTE ROUTES
Route.get('/test/classes/:id', 'TestController.getClasses').middleware('cache')
// Characters Controller
Route.post('/character/create','CharacterController.create')
Route.get('/character/get/all', 'CharacterController.index')
Route.get('/classes/get/:idClass', 'CharacterController.getCharacters')

// Session
Route.post('/sessions', 'SessionController.create')
