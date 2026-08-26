import type { Metadata } from "next"
import { Josefin_Sans, Lato } from "next/font/google"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider } from "antd"
import esES from "antd/locale/es_ES"
import { auriumTheme } from "@/theme/theme"
import "./globals.css"

const josefinSans = Josefin_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aurium — Trabajos en Melamina con Diseños Personalizados",
  description:
    "Catálogo de trabajos realizados en melamina con diseños personalizados. Muebles y piezas a medida de alta calidad.",
  robots: { index: true, follow: true },
}

const isDev = process.env.NODE_ENV === "development"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${josefinSans.variable} ${lato.variable}`}>
      <head>
        {/* Security headers — GitHub Pages cannot set HTTP headers so we use meta equivalents */}
        {!isDev && (
          <>
            <meta
              httpEquiv="Content-Security-Policy"
              content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self';"
            />
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
            <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
          </>
        )}
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
           attributes into <body> after SSR, causing a harmless React mismatch. */}
      <body suppressHydrationWarning>
        <AntdRegistry>
          <ConfigProvider theme={auriumTheme} locale={esES}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
