import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { ThemeProvider } from '~/components/theme-provider'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

export default function render(page: any) {
  return createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${name}.tsx`]
    },
    setup: ({ App, props }) => (
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <App {...props} />
      </ThemeProvider>
    ),
  })
}
