import type { Locale } from './i18n'

import enCommon from '@/messages/en/common.json'
import enHome from '@/messages/en/home.json'
import enAbout from '@/messages/en/about.json'
import enSecurity from '@/messages/en/security.json'
import enContact from '@/messages/en/contact.json'
import enBlog from '@/messages/en/blog.json'
import enPricing from '@/messages/en/pricing.json'

import zhCommon from '@/messages/zh/common.json'
import zhHome from '@/messages/zh/home.json'
import zhAbout from '@/messages/zh/about.json'
import zhSecurity from '@/messages/zh/security.json'
import zhContact from '@/messages/zh/contact.json'
import zhBlog from '@/messages/zh/blog.json'
import zhPricing from '@/messages/zh/pricing.json'

import jaCommon from '@/messages/ja/common.json'
import jaHome from '@/messages/ja/home.json'
import jaAbout from '@/messages/ja/about.json'
import jaSecurity from '@/messages/ja/security.json'
import jaContact from '@/messages/ja/contact.json'
import jaBlog from '@/messages/ja/blog.json'
import jaPricing from '@/messages/ja/pricing.json'

import koCommon from '@/messages/ko/common.json'
import koHome from '@/messages/ko/home.json'
import koAbout from '@/messages/ko/about.json'
import koSecurity from '@/messages/ko/security.json'
import koContact from '@/messages/ko/contact.json'
import koBlog from '@/messages/ko/blog.json'
import koPricing from '@/messages/ko/pricing.json'

/**
 * UI copy lives in `messages/<locale>/<namespace>.json`. English is the source of truth;
 * every other locale must mirror its key structure exactly — the types below are derived
 * from English, so a missing or misnamed key in another locale fails type-checking.
 */
export interface Dictionary {
  common: typeof enCommon
  home: typeof enHome
  about: typeof enAbout
  security: typeof enSecurity
  contact: typeof enContact
  blog: typeof enBlog
  pricing: typeof enPricing
}

const dictionaries: Record<Locale, Dictionary> = {
  en: { common: enCommon, home: enHome, about: enAbout, security: enSecurity, contact: enContact, blog: enBlog, pricing: enPricing },
  zh: { common: zhCommon, home: zhHome, about: zhAbout, security: zhSecurity, contact: zhContact, blog: zhBlog, pricing: zhPricing },
  ja: { common: jaCommon, home: jaHome, about: jaAbout, security: jaSecurity, contact: jaContact, blog: jaBlog, pricing: jaPricing },
  ko: { common: koCommon, home: koHome, about: koAbout, security: koSecurity, contact: koContact, blog: koBlog, pricing: koPricing },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
