'use client'

import { useState } from 'react'

const DEMO_KEY = 'sk_test_demo'

/** Runs the documented sample call against `/api/partner/authenticate` with the shared sandbox key. */
export default function PartnerTryIt() {
  const [reference, setReference] = useState('ORDER-2026-118204')
  const [output, setOutput] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [busy, setBusy] = useState(false)

  async function run() {
    setBusy(true)
    setStatus('')
    try {
      const res = await fetch('/api/partner/authenticate', {
        method: 'POST',
        headers: { Authorization: `Bearer ${DEMO_KEY}`, 'Content-Type': 'application/json' },
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
          <span className="font-medium text-gray-700">Sandbox key</span>
          <input readOnly value={DEMO_KEY} className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-xs text-gray-600" />
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
          disabled={busy}
          className="rounded-lg bg-brand-cyan px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600 disabled:opacity-50"
        >
          {busy ? 'Sending…' : 'POST /authentications (sample)'}
        </button>
        {status && <span className="font-mono text-xs text-gray-500">{status}</span>}
      </div>
      {output && (
        <pre className="max-h-96 overflow-auto rounded-lg bg-[#0F172A] p-4 text-xs text-cyan-100">
          <code>{output}</code>
        </pre>
      )}
      <p className="text-xs text-gray-500">
        The sandbox returns a fixed sample (<code>&quot;sample&quot;: true</code>) so you can wire up parsing before live keys are issued. It does not run authentication.
      </p>
    </div>
  )
}
