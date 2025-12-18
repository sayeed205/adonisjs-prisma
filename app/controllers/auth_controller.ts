import hash from '@adonisjs/core/services/hash'

import type { HttpContext } from '@adonisjs/core/http'

import { signupValidator } from '#validators/auth'
import prisma from '#services/db'

export default class AuthController {
  async signupPage({ inertia }: HttpContext) {
    return inertia.render('auth/signup')
  }

  async loginPage({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async signup({ auth, request, response, session }: HttpContext) {
    const { name, email, password } = await request.validateUsing(signupValidator)

    const userExists = await prisma.user.findUnique({ where: { email } })

    if (userExists) {
      session.flash('errors.auth', 'Please login!!')
      return response.redirect().back()
    }

    const userCreated = await prisma.user.create({
      data: {
        email,
        password: await hash.make(password),
        name,
      },
    })

    if (!userCreated) {
      session.flash('errors.auth', 'Some error occurred!! Please try again!')
      return response.redirect().back()
    }

    await auth.use('web').login(userCreated)

    return response.redirect().toRoute('home')
  }
}
