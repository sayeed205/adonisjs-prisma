import { symbols } from '@adonisjs/auth'
import { SessionGuardUser, SessionUserProviderContract } from '@adonisjs/auth/types/session'

import prisma from '#services/db'
import { User } from '#prisma/client'

export class SessionPrismaUserProvider implements SessionUserProviderContract<User> {
  declare [symbols.PROVIDER_REAL_USER]: User

  async createUserForGuard(user: User): Promise<SessionGuardUser<User>> {
    return {
      getId() {
        return user.id
      },
      getOriginal() {
        return user
      },
    }
  }

  async findById(identifier: number): Promise<SessionGuardUser<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: identifier,
      },
    })
    if (!user) {
      return null
    }

    return this.createUserForGuard(user)
  }
}
