// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/gtag';
import { captureUTM } from '../lib/utms';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 1) Capturar UTM en el primer render
  useEffect(() => {
    captureUTM();
  }, []);

  // 2) Enviar un page_view inicial
  useEffect(() => {
    if (GA_ID) {
      gtag.pageview(window.location.pathname);
    }
  }, []);

  // 3) Enviar page_view en cada cambio de ruta
  useEffect(() => {
    if (!GA_ID) return;
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* ————————————— gtag.js ————————————— */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      {/* ———————————————————————————————— */}

      {/* Chatbase widget */}
      <Script
        id="chatbase-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){
  if(!window.chatbase||window.chatbase("getState")!=="initialized"){
    window.chatbase=(...args)=>{
      if(!window.chatbase.q) window.chatbase.q=[];
      window.chatbase.q.push(args);
    };
    window.chatbase=new Proxy(window.chatbase,{
      get(t,p){ if(p==="q") return t.q; return(...a)=>t(p,...a); }
    });
  }
  const onLoad=()=>{ 
    const s=document.createElement("script");
    s.src="https://www.chatbase.co/embed.min.js";
    s.id="EDbmwgJtj1wPLDADjfmNi";
    document.body.appendChild(s);
  };
  if(document.readyState==="complete") onLoad();
  else window.addEventListener("load",onLoad);
})();`,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
