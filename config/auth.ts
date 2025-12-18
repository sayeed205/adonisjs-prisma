import { defineConfig } from '@adonisjs/auth'
import { sessionGuard } from '@adonisjs/auth/session'
import type { Authenticators, InferAuthenticators, InferAuthEvents } from '@adonisjs/auth/types'
import { configProvider } from '@adonisjs/core'

const authConfig = defineConfig({
  default: 'web',
  guards: {
    web: sessionGuard({
      useRememberMeTokens: false,
      provider: configProvider.create(async () => {
        const { SessionPrismaUserProvider } =
          await import('../app/auth_providers/session_user_provider.js')
        return new SessionPrismaUserProvider()
      }),
    }),
  },
})

export default authConfig

/**
 * Inferring types from the configured auth
 * guards.
 */
declare module '@adonisjs/auth/types' {
  export interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}
declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}
