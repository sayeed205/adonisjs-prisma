import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async signupPage({ inertia }: HttpContext) {
    return inertia.render('auth/signup')
  }

  async loginPage({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }
}
