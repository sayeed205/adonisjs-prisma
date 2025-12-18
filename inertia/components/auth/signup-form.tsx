import { useForm } from '@inertiajs/react'
import type React from 'react'

import PasswordInput from '~/components/ui/password-input'
import { Button } from '~/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import useError from '~/hooks/use-error'

export default function SignupForm({ className, ...props }: React.ComponentProps<'form'>) {
  const form = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // form.post(route('auth.login').toString())
  }

  const errors = form.errors
  const authError = useError()?.auth as string

  return (
    <form className={cn('flex flex-col gap-4', className)} onSubmit={onSubmit} {...props}>
      <FieldGroup className="p-4">
        {/* Name */}
        <Field className="gap-2" data-invalid={errors.name}>
          <FieldLabel>Your Name</FieldLabel>
          <Input
            value={form.data.name}
            onChange={(e) => form.setData('name', e.target.value)}
            placeholder="John Doe"
          />
          {errors.name && <FieldError errors={[{ message: errors.name }]} />}
        </Field>

        {/* Email */}
        <Field className="gap-2" data-invalid={errors.email}>
          <FieldLabel>Your Email</FieldLabel>
          <Input
            type="email"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
            placeholder="example@gmail.com"
          />
          {errors.email && <FieldError errors={[{ message: errors.email }]} />}
        </Field>

        {/* Password */}
        <Field className="gap-2" data-invalid={errors.password}>
          <FieldLabel>Password</FieldLabel>
          <PasswordInput
            placeholder="******"
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          {errors.password && <FieldError errors={[{ message: errors.password }]} />}
        </Field>

        {/* Confirm Password */}
        <Field className="gap-2" data-invalid={errors.confirmPassword}>
          <FieldLabel>Confirm Password</FieldLabel>
          <PasswordInput
            placeholder="******"
            value={form.data.confirmPassword}
            onChange={(e) => form.setData('confirmPassword', e.target.value)}
          />
          {errors.confirmPassword && <FieldError errors={[{ message: errors.confirmPassword }]} />}
        </Field>
      </FieldGroup>

      <div className="relative rounded-b-xl border-t bg-card/60 p-4">
        {authError && (
          <div className="absolute left-0 top-0 w-full -translate-y-full pb-2 text-center">
            <p className="text-sm font-medium text-destructive">{authError}</p>
          </div>
        )}
        <Button className="w-full" disabled={form.processing} type="submit">
          {form.processing ? 'Creating Account...' : 'Create Account'}
        </Button>
      </div>
    </form>
  )
}
