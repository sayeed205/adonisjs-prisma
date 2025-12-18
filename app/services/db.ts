import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

import env from '#start/env'

import type { DB } from '#types/db'

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({ connectionString: env.get('DATABASE_URL') }),
  }),
})
