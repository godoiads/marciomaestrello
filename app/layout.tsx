import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script" // Importe o componente Script

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gestão e Governança de TI - Márcio Maestrello",
  description: "O Guia Definitivo para Transformar sua Carreira e Liderar a Inovação Tecnológica",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID // Use uma variável de ambiente

  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Base Code */}
        {metaPixelId && (
          <>
            <Script id="facebook-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt="Facebook Pixel"
              />
            </noscript>
          </>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
