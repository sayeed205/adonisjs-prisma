import { Head } from '@inertiajs/react'

import AuthLayout from '~/components/auth/layout'
import LoginForm from '~/components/auth/login-form'

export default function LoginPage() {
  return (
    <>
      <Head title="Login" />
      <AuthLayout>
        <div className="mx-auto space-y-4 sm:w-sm">
          <div className="w-full max-w-md rounded-xl border bg-background shadow-sm">
            <div className="flex flex-col items-center justify-center gap-6 rounded-t-xl border-b bg-card/60 py-12">
              {/*<img*/}
              {/*  alt="Brand Logo"*/}
              {/*  height={100}*/}
              {/*  src="https://cdn.imgchest.com/files/4606c756ad6b.png"*/}
              {/*  width={100}*/}
              {/*/>*/}
              <div className="flex flex-col space-y-1">
                <h1 className="font-bold text-2xl tracking-wide">Login to Your Account!</h1>
                <p className="text-base text-muted-foreground">
                  Enter your username & password to login
                </p>
              </div>
            </div>
            <LoginForm />
          </div>

          <p className="mt-8 text-muted-foreground text-sm">
            By clicking continue, you agree to our{' '}
            <a className="underline underline-offset-4 hover:text-primary" href="/terms">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="underline underline-offset-4 hover:text-primary" href="/privacy">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </AuthLayout>
    </>
  )
}
