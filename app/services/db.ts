import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '#prisma/client'
import env from '#start/env'

const adapter = new PrismaPg({ connectionString: env.get('DATABASE_URL') })
const prisma = new PrismaClient({ adapter })

export default prisma
