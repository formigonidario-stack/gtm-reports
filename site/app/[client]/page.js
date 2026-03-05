import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getClients, getReports, parseReportSlug } from '../../lib/reports'

export async function generateStaticParams() {
  return getClients().map(client => ({ client }))
}

export default function ClientPage({ params }) {
  const { client } = params
  if (!getClients().includes(client)) notFound()

  const reports = getReports(client)

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-900 transition-colors">Clientes</Link>
        <span>/</span>
        <span className="text-gray-900 capitalize font-medium">{client}</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 capitalize mb-8">{client}</h1>

      <div className="space-y-3">
        {reports.map(report => {
          const { label, date } = parseReportSlug(report.slug)
          return (
            <Link
              key={report.slug}
              href={`/${client}/${report.slug}`}
              className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-6 py-4 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <div>
                <div className="font-semibold text-gray-900">{label}</div>
                {date && <div className="text-sm text-gray-400 mt-0.5">{date}</div>}
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        })}
        {reports.length === 0 && (
          <p className="text-gray-400">No hay reportes para este cliente.</p>
        )}
      </div>
    </div>
  )
}
