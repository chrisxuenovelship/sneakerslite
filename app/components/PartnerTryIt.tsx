'use client'

import { useState } from 'react'

interface Props {
  demoKey: string | null
}

/** Runs the documented sample call against `/api/partner/authenticate` with the partner's demo key. */
export default function PartnerTryIt({ demoKey }: Props) {
  const [reference, setReference] = useState('ORDER-2026-118204')
  const [output, setOutput] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [busy, setBusy] = useState(false)

  const masked = demoKey ? `${demoKey.slice(0, 8)}${'•'.repeat(Math.max(0, demoKey.length - 12))}${demoKey.slice(-4)}` : null

  async function run() {
    if (!demoKey) return
    setBusy(true)
    setStatus('')
    try {
      const res = await fetch('/api/partner/authenticate', {
        method: 'POST',
        headers: { Authorization: `Bearer ${demoKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, brand: 'Nike', sku: '153265-006', size_us: '10' }),
      })
      setStatus(`HTTP ${res.status}`)
      setOutput(JSON.stringify(await res.json(), null, 2))
    } catch (e) {
      setStatus('Request failed')
      setOutput(String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-gray-700">Your demo key</span>
          <input readOnly value={masked ?? 'No demo key issued for this login'} className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-xs text-gray-600" />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-gray-700">reference</span>
          <input
            value={reference}
            maxLength={64}
            onChange={(e) => setReference(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 font-mono text-xs focus:border-brand-cyan focus:ring-brand-cyan"
          />
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={run}
          disabled={!demoKey || busy}
          className="rounded-lg bg-brand-cyan px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600 disabled:opacity-50"
        >
          {busy ? 'Sending…' : 'POST /v1/authentications (sample)'}
        </button>
        {status && <span className="font-mono text-xs text-gray-500">{status}</span>}
      </div>
      {output && (
        <pre className="max-h-96 overflow-auto rounded-lg bg-[#0F172A] p-4 text-xs text-cyan-100">
          <code>{output}</code>
        </pre>
      )}
      <p className="text-xs text-gray-500">
        The demo endpoint returns a fixed sample (<code>&quot;sample&quot;: true</code>) so you can wire up parsing before live keys are issued. It does not run authentication.
      </p>
    </div>
  )
}
