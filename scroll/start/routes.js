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
Route.get('/user','UserController.index').middleware('auth')
Route.get('/dice/:minDice/:maxDice', 'DiceController.getDice')
Route.get('/user/:id','UserController.getUser').middleware('auth')
Route.post('/user','UserController.save')

Route.post('/sessions', 'SessionController.create')
