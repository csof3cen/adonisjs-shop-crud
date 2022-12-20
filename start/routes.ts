/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ProductsController.index').as('home')
Route.get('/show/:id', 'ProductsController.show').as('show')
Route.get('/delete/:id', 'ProductsController.destroy').as('destroy')
Route.get('/create', 'ProductsController.create').as('create')
Route.post('/create', 'ProductsController.save').as('create.save')

Route.get('/update/:id', 'ProductsController.update').as('update.get')
Route.post('/update/:id', 'ProductsController.saveUpdate').as('update.save')
