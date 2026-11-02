'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/dictionary'
import type { Locale } from '@/lib/i18n'

interface ContactFormProps {
  locale: Locale
  t: Dictionary['contact']['form']
}

export default function ContactForm({ locale, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        const error = await response.json()
        setStatus('error')
        setErrorMessage(
          error.message === 'All fields are required' ? t.errors.required
            : error.message === 'Invalid email address' ? t.errors.invalidEmail
              : t.errors.failed
        )
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(t.errors.network)
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
          {t.name.label}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t.name.placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
          {t.email.label}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t.email.placeholder}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-cyan-200 transition"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-brand-dark mb-2">
          {t.subject.label}
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-cyan-200 transition"
        >
          {t.subject.options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
          {t.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder={t.message.placeholder}
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-cyan-200 transition resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
          ✓ {t.success}
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          ✗ {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
          status === 'loading'
            ? 'bg-gray-400 cursor-not-allowed'
            : 'btn-primary'
        }`}
      >
        {status === 'loading' ? t.sending : t.submit}
      </button>
    </form>
  )
}
