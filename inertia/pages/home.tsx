import { Head, router } from '@inertiajs/react'
import {
  Box,
  Code2,
  Database,
  Github,
  Layers,
  Lock,
  LogOutIcon,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import { Particles } from '~/components/ui/particles'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import useUser from '~/hooks/use-user'
import { route } from '@izzyjs/route/client'
import { ThemeToggle } from '~/components/theme-toggle'

export default function Home() {
  const user = useUser()!
  return (
    <>
      <Head title="AdonisJS - Starter Kit" />

      <div>
        {/* Particles Background */}
        <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
          <Particles className="absolute inset-0" color="#666666" ease={20} quantity={120} />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
          <div className="container flex h-16 max-w-7xl items-center justify-between mx-auto px-4 md:px-8">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <div className="bg-primary text-primary-foreground p-1 rounded-md">
                <Box className="w-6 h-6" />
              </div>
              <span>AdonisJS Starter</span>
            </div>
            <div className="flex gap-2">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="" alt={user.name} />
                    <AvatarFallback className="rounded-lg">
                      {user.name
                        .split(' ')
                        .slice(0, 2)
                        .map((name) => name.charAt(0))
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src="" alt={user.name} />
                        <AvatarFallback className="rounded-lg">
                          {user.name
                            .split(' ')
                            .slice(0, 2)
                            .map((name) => name.charAt(0))
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{user.name}</span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      router.post(route('auth.logout').toString())
                    }}
                  >
                    <LogOutIcon className="size-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                The{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                  Ultimate
                </span>{' '}
                Starter Kit <br className="hidden md:block" />
                for Modern Web Apps
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                A project demonstration showcasing AdonisJS 6, Inertia, React, and Prisma. Explore
                the codebase to see how it all fits together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <a
                  href="https://github.com/sayeed205/adonisjs-prisma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Tech Stack / Features Grid */}
          <section className="py-24 bg-muted/30 relative">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Powered by the Best</h2>
                <p className="text-muted-foreground text-lg">
                  A carefully curated stack to give you the best developer experience and
                  performance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'AdonisJS 6',
    description:
      'A fully featured TypeScript web framework. It comes with everything you need to create a stable and scalable web application.',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Inertia.js',
    description:
      'Build single-page apps, without building an API. Use your favorite server-side framework with your favorite client-side framework.',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Prisma ORM',
    description: 'Next-generation Node.js and TypeScript ORM. Type-safe database access made easy.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Vite',
    description:
      'Next Generation Frontend Tooling. Get ready for a development environment that can finally keep up with you.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Session Auth',
    description:
      'Secure session-based authentication out of the box. Keep your users safe with industry standards.',
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: 'Type Safety',
    description:
      'End-to-end type safety with TypeScript. Catch errors before they happen and ship with confidence.',
  },
]
