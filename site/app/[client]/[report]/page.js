import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getClients, getReports, getReport, parseReportSlug } from '../../../lib/reports'

export async function generateStaticParams() {
  const params = []
  for (const client of getClients()) {
    for (const report of getReports(client)) {
      params.push({ client, report: report.slug })
    }
  }
  return params
}

export default async function ReportPage({ params }) {
  const { client, report: slug } = params
  const data = await getReport(client, slug)
  if (!data) notFound()

  const { label, date } = parseReportSlug(slug)

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">Clientes</Link>
        <span>/</span>
        <Link href={`/${client}`} className="hover:text-gray-900 capitalize transition-colors">{client}</Link>
        <span>/</span>
        <span className="text-gray-900">{label}</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 px-8 py-10">
        <article
          className="prose prose-gray max-w-none prose-table:text-sm prose-th:font-semibold prose-headings:font-bold"
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
      </div>

      <div className="mt-6">
        <Link href={`/${client}`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          &larr; Volver a {client}
        </Link>
      </div>
    </div>
  )
}
