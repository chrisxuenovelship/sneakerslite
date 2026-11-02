'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/dictionary'
import { langTag, type Locale } from '@/lib/i18n'

interface PricingCalculatorProps {
  locale: Locale
  t: Dictionary['pricing']
}

function calculateEstimate(volume: number) {
  const tierKey: 'standard' | 'plus' | 'pro' = volume <= 1000 ? 'standard' : volume <= 2000 ? 'plus' : 'pro'
  const price = tierKey === 'standard' ? 2 : tierKey === 'plus' ? 1.3 : 0.8
  const monthlyCost = volume * price
  const humanCost = volume * 4
  const saving = humanCost - monthlyCost
  const percent = (saving / humanCost) * 100
  return { tierKey, price, monthlyCost, saving, percent }
}

export default function PricingCalculator({ locale, t }: PricingCalculatorProps) {
  const [volume, setVolume] = useState(3000)
  const { tierKey, price, monthlyCost, saving, percent } = calculateEstimate(volume)
  const tier = t.tiers[tierKey]
  const number = new Intl.NumberFormat(langTag[locale])
  const currency = new Intl.NumberFormat(langTag[locale], { style: 'currency', currency: 'USD' })
  const percentage = new Intl.NumberFormat(langTag[locale], { maximumFractionDigits: 1 })

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
        <label htmlFor="monthly-results" className="font-semibold text-brand-dark">{t.calculator.volumeLabel}</label>
        <output htmlFor="monthly-results" className="text-2xl font-bold text-brand-cyan">{number.format(volume)}</output>
      </div>
      <input
        id="monthly-results"
        type="range"
        min={100}
        max={20000}
        step={100}
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        className="w-full accent-brand-cyan cursor-pointer"
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-50 p-5">
          <p className="text-sm text-gray-600 mb-2">{t.calculator.currentTier}</p>
          <p className="text-xl font-bold text-brand-dark">{tier.name}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-5">
          <p className="text-sm text-gray-600 mb-2">{t.calculator.costPerResult}</p>
          <p className="text-xl font-bold text-brand-dark">{currency.format(price)}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-5">
          <p className="text-sm text-gray-600 mb-2">{t.calculator.monthlyCost}</p>
          <p className="text-xl font-bold text-brand-dark">{currency.format(monthlyCost)}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-5">
          <p className="text-sm text-gray-600 mb-2">{t.calculator.monthlySaving}</p>
          <p className="text-xl font-bold text-brand-cyan">{currency.format(saving)}</p>
          <p className="text-sm text-gray-600 mt-1">{t.calculator.percentSaving.replace('{percent}', percentage.format(percent))}</p>
        </div>
      </div>
      <p className="mt-5 text-sm text-gray-500">{t.calculator.humanComparison}</p>
    </div>
  )
}
