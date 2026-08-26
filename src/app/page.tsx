import { CATALOG_IMAGES, CATALOG_VIDEOS } from "@/data/catalog"
import { CatalogGallery } from "@/components/CatalogGallery"
import { WhatsAppCTA } from "@/components/WhatsAppCTA"
import { assetSrc } from "@/lib/asset"

export default function HomePage() {
  return (
    <main>
      {/* ── Header ── */}
      <header
        style={{
          background: "var(--color-bg)",
          borderBottom: "3px solid var(--color-green)",
          padding: "40px 16px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: 160, margin: "0 auto 20px" }}
          className="fade-in"
        >
          {/* assetSrc() prepends NEXT_PUBLIC_BASE_PATH — required because
               next/image with unoptimized:true in static export does NOT
               apply basePath to the src attribute */}
          <img
            src={assetSrc("/images/msedge_6Fp9NfhDzU.png")}
            alt="Aurium"
            width={160}
            height={160}
            fetchPriority="high"
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>

        <h1
          className="fade-in"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-charcoal)",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            marginBottom: 4,
          }}
        >
          Aurium
        </h1>

        <p
          className="fade-in-delay"
          style={{
            color: "var(--color-green)",
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 400,
            marginBottom: 0,
          }}
        >
          Trabajos en melamina con diseños personalizados
        </p>
      </header>

      {/* ── Catalog ── */}
      <section aria-label="Catálogo de trabajos">
        <div className="section-header">
          <span className="section-rule" aria-hidden="true" />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "var(--color-charcoal)",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Nuestros Trabajos
          </h2>
          <p
            style={{ color: "var(--color-text-muted)", maxWidth: 520, margin: "0 auto" }}
          >
            Cada pieza es única, diseñada y fabricada a medida para cada cliente.
          </p>
        </div>

        <CatalogGallery images={CATALOG_IMAGES} />
      </section>

      {/* ── Videos ── */}
      {CATALOG_VIDEOS.length > 0 && (
        <section
          aria-label="Videos de trabajos"
          style={{ padding: "0 16px 32px", maxWidth: 680, margin: "0 auto" }}
        >
          <div className="section-header" style={{ paddingBottom: 20 }}>
            <span className="section-rule" aria-hidden="true" />
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              En Proceso
            </h2>
          </div>

          {CATALOG_VIDEOS.map((src) => (
            <div key={src} className="video-card">
              {/* Native HTML5 video works in fully-static deployments */}
              <video
                controls
                preload="metadata"
                aria-label="Video de trabajo en melamina"
              >
                <source src={assetSrc(src)} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          ))}
        </section>
      )}

      {/* ── WhatsApp CTA ── */}
      <WhatsAppCTA />

      {/* ── Footer ── */}
      <footer
        style={{
          background: "var(--color-charcoal)",
          padding: "24px 16px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Aurium · Todos los derechos reservados
        </p>
      </footer>
    </main>
  )
}

