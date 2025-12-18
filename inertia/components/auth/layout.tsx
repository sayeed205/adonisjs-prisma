import { Link, usePage } from '@inertiajs/react'
import { ChevronLeftIcon } from 'lucide-react'
import { route } from '@izzyjs/route/client'

import type { ReactNode } from 'react'

import { Particles } from '~/components/ui/particles'
import { Button } from '~/components/ui/button'

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { url } = usePage()
  return (
    <div className="relative w-full md:h-screen md:overflow-hidden">
      <Particles className="absolute inset-0" color="#666666" ease={20} quantity={120} />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4">
        <Button asChild className="absolute top-4 left-4" variant="ghost">
          <Link href={url === '/login' ? route('home').toString() : '/login'}>
            <ChevronLeftIcon />
            {url === '/login' ? 'Home' : 'Login'}
          </Link>
        </Button>
        {children}
      </div>
    </div>
  )
}
