export const metadata = {
  title: 'Projects',
  description: ' A showcase of various projects and their details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
