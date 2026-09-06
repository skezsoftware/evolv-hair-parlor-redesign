import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { salon } from '../data/salon'

function upsertMeta(attr, key, content) {
  if (!content) return

  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return

  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function absoluteUrl(path) {
  const base = salon.siteUrl.replace(/\/$/, '')
  if (!path) return base
  if (path.startsWith('http')) return path
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Sets document title, description, canonical, and Open Graph / Twitter tags.
 * Pass a page title (omit on home) and optional description override.
 */
export function usePageMeta(title, description) {
  const { pathname } = useLocation()
  const pageSeo = salon.seo.pages[pathname] ?? {}
  const pageTitle = title ?? pageSeo.title
  const pageDescription =
    description ?? pageSeo.description ?? salon.seo.defaultDescription
  const fullTitle = pageTitle ? `${pageTitle} | ${salon.name}` : salon.name
  const url = absoluteUrl(pathname === '/' ? '/' : pathname)
  const image = absoluteUrl(salon.seo.ogImage)

  useEffect(() => {
    document.title = fullTitle

    upsertMeta('name', 'description', pageDescription)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', salon.name)
    upsertMeta('property', 'og:locale', 'en_US')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', pageDescription)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', `${salon.name} storefront in Hillcrest`)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', pageDescription)
    upsertMeta('name', 'twitter:image', image)
  }, [fullTitle, pageDescription, url, image])
}

/** @deprecated Prefer usePageMeta — kept as an alias for older imports */
export function usePageTitle(title, description) {
  usePageMeta(title, description)
}
