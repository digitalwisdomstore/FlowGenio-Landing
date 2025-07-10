// src/lib/gtag.ts

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Parámetros de evento genéricos
export type GTagEventParams = {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: any
}

/**
 * Dispara un evento en Google Analytics
 * @param action Nombre de la acción (e.g. 'start_chat')
 * @param params Objetos adicionales, p.ej. { event_category, event_label, product_id, source, utm_source, ... }
 */
export const event = (action: string, params: GTagEventParams): void => {
  if (!GA_TRACKING_ID) return
  window.gtag('event', action, {
    ...params,
  })
}
