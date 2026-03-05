import './globals.css'

export const metadata = {
  title: 'Reportes · Gropera',
  description: 'Portal de reportes para clientes de Gropera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-gray-900 text-white px-8 py-5 flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight hover:text-gray-300 transition-colors">
            Gropera · Reportes
          </a>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  )
}
