import './globals.css'
import type { Metadata, Viewport } from 'next'
import { site } from '@/data/site'

const description = `${site.title}. Building AI-powered applications and full-stack web platforms. Graduate of ${site.graduation.school} (${site.graduation.date}).`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.title}`,
  description,
  keywords: [
    'software engineer',
    'AI engineer',
    'full-stack developer',
    'React',
    'TypeScript',
    'Python',
    'Java',
    'Rwanda',
    'Rwanda Coding Academy',
    'AgroHaven',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description,
    type: 'website',
    url: site.url,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">{children}</body>
    </html>
  )
}
