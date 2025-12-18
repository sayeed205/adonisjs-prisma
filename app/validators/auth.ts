import vine from '@vinejs/vine'

export const signupValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string().trim().confirmed({ confirmationField: 'confirmPassword' }),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)
