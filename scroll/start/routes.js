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
Route.get('/dice/:minDice/:maxDice', 'DiceController.getDice')
// TESTE ROUTES
Route.get('/test/classes/:id', 'TestController.getClasses').middleware('cache')

Route.post('/sessions', 'SessionController.create')
