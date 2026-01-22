import './globals.css'

export const metadata = {
  title: 'UWAYO Ange Kevine - Frontend Engineer & Innovator',
  description: 'Tech for sustainability. Innovation with impact. Young innovator building practical technology solutions for agriculture and climate resilience.',
  keywords: ['frontend engineer', 'UI/UX designer', 'sustainability', 'AgroHaven', 'innovation', 'climate resilience'],
  authors: [{ name: 'UWAYO Ange Kevine' }],
  openGraph: {
    title: 'UWAYO Ange Kevine - Portfolio',
    description: 'Tech for sustainability. Innovation with impact.',
    type: 'website',
    url: 'https://angekevine.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  )
}
