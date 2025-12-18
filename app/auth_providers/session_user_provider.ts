import { symbols } from '@adonisjs/auth'
import { SessionGuardUser, SessionUserProviderContract } from '@adonisjs/auth/types/session'

import type { Users } from '#types/db'
import { db } from '#services/db'

export class SessionKyselyUserProvider implements SessionUserProviderContract<Users> {
  declare [symbols.PROVIDER_REAL_USER]: Users

  async createUserForGuard(user: Users): Promise<SessionGuardUser<Users>> {
    return {
      getId() {
        return user.id
      },
      getOriginal() {
        return user
      },
    }
  }

  async findById(identifier: number): Promise<SessionGuardUser<Users> | null> {
    const user = await db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', identifier)
      .executeTakeFirst()
    if (!user) {
      return null
    }

    // @ts-ignore
    return this.createUserForGuard(user)
  }
}
