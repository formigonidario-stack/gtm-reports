import Link from 'next/link'
import { getClients, getReports } from '../lib/reports'

export default function Home() {
  const clients = getClients()

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Clientes</h1>
      <p className="text-gray-500 mb-8">Selecciona un cliente para ver sus reportes.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map(client => {
          const reports = getReports(client)
          return (
            <Link
              key={client}
              href={`/${client}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <div className="text-lg font-semibold text-gray-900 capitalize mb-1">{client}</div>
              <div className="text-sm text-gray-400">
                {reports.length} reporte{reports.length !== 1 ? 's' : ''}
              </div>
            </Link>
          )
        })}
        {clients.length === 0 && (
          <p className="text-gray-400 col-span-3">No hay reportes disponibles.</p>
        )}
      </div>
    </div>
  )
}
