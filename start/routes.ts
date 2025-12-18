/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import { middleware } from '#start/kernel'

router.on('/').renderInertia('home').as('home')

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/
const AuthController = () => import('#controllers/auth_controller')
router
  .group(() => {
    router.get('signup', [AuthController, 'signupPage']).as('signup.page')
    router.get('login', [AuthController, 'loginPage']).as('login.page')
  })
  .as('auth')
  .use(middleware.guest())
