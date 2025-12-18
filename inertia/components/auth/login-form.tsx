import { useForm } from '@inertiajs/react'
import type React from 'react'
import { useEffect } from 'react'

import PasswordInput from '~/components/ui/password-input'
import { Button } from '~/components/ui/button'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import useError from '~/hooks/use-error'
import { route } from '@izzyjs/route/client'

export default function LoginForm({ className, ...props }: React.ComponentProps<'form'>) {
  const form = useForm({
    email: '',
    password: '',
  })

  useEffect(() => {
    const message = sessionStorage.getItem('signupSuccess')
    if (message) {
      sessionStorage.removeItem('signupSuccess')
    }
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post(route('auth.login').toString())
  }

  const errors = form.errors
  const authError = useError()?.auth as string

  return (
    <form className={cn('flex flex-col gap-6', className)} onSubmit={onSubmit} {...props}>
      <FieldGroup className="p-4">
        <Field className="gap-2" data-invalid={errors.email}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            aria-invalid={!!errors.email}
            type="email"
            autoComplete="off"
            id="email"
            placeholder="johndoe"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
          />
          <FieldDescription>Your 7-digit user ID provided during registration.</FieldDescription>
          {errors.email && <FieldError errors={[{ message: errors.email }]} />}
        </Field>
        <Field className="gap-2" data-invalid={errors.password}>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <PasswordInput
            aria-invalid={!!errors.password}
            id="password"
            placeholder="******"
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          <FieldDescription>Password of your account.</FieldDescription>
          {errors.password && <FieldError errors={[{ message: errors.password }]} />}
        </Field>
      </FieldGroup>
      <div className="relative rounded-b-xl border-t bg-card/60 p-4">
        {authError && (
          <div className="absolute left-0 top-0 w-full -translate-y-full pb-2 text-center">
            <p className="text-sm font-medium text-destructive">{authError}</p>
          </div>
        )}
        <Button className="w-full" disabled={form.processing} type="submit">
          {form.processing ? 'Logging in...' : 'Login'}
        </Button>
      </div>
    </form>
  )
}
