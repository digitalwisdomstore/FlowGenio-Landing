// src/lib/utms.ts

export type UTMParams = Partial<{
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
}>;

/**
 * Captura los parámetros UTM de la URL y los guarda en localStorage,
 * además envía un evento 'utm_captured' a GA si los encuentra.
 */
export const captureUTM = () => {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const utms: UTMParams = {};
  ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach((key) => {
    const value = params.get(key);
    if (value) utms[key as keyof UTMParams] = value;
  });

  // Si hay al menos un UTM, guardamos y disparamos evento
  if (Object.keys(utms).length > 0) {
    localStorage.setItem('flowgenio_utm', JSON.stringify(utms));

    // Importamos dinámicamente para evitar circularidades
    import('./gtag').then(({ event }) => {
      event('utm_captured', {
        event_category: 'acquisition',
        ...utms,
      });
    });
  }
};

/**
 * Devuelve los UTM capturados (o {} si no existen)
 */
export const getUTM = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  const raw = localStorage.getItem('flowgenio_utm');
  return raw ? (JSON.parse(raw) as UTMParams) : {};
};
