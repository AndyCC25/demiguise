"use client"

import { useState } from "react"
import { Image } from "antd"
import { assetSrc } from "@/lib/asset"

const PAGE_SIZE = 24

interface CatalogGalleryProps {
  images: string[]
}

export function CatalogGallery({ images }: CatalogGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  if (images.length === 0) {
    return (
      <p className="catalog-empty">
        No hay imágenes en el catálogo aún.
      </p>
    )
  }

  const visible = images.slice(0, visibleCount)
  const hasMore = visibleCount < images.length
  const progress = Math.round((visible.length / images.length) * 100)

  const loadMore = () =>
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, images.length))

  return (
    <div className="catalog-wrapper">
      {/* Scope indicator */}
      <p className="catalog-counter" aria-live="polite">
        {visible.length} de {images.length} trabajos
      </p>

      {/* Masonry grid — natural aspect ratios, no cropping */}
      <Image.PreviewGroup>
        <div className="catalog-masonry" role="list" aria-label="Catálogo de trabajos">
          {visible.map((src, i) => (
            <div key={src} className="catalog-masonry-item" role="listitem">
              <Image
                src={assetSrc(src)}
                alt={`Trabajo Aurium ${i + 1}`}
                loading="lazy"
                wrapperStyle={{ width: "100%", display: "block" }}
                style={{ width: "100%", height: "auto", display: "block" }}
                preview={{ mask: false }}
                placeholder={<div className="catalog-placeholder" />}
              />
            </div>
          ))}
        </div>
      </Image.PreviewGroup>

      {/* Progressive disclosure */}
      {hasMore ? (
        <div className="catalog-load-more">
          <div
            className="catalog-progress-track"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${visible.length} de ${images.length} trabajos cargados`}
          >
            <div
            className="catalog-progress-fill"
            style={{ "--pct": progress / 100 } as React.CSSProperties}
          />
          </div>
          <button className="load-more-btn" onClick={loadMore}>
            Ver más — {images.length - visible.length} restantes
          </button>
        </div>
      ) : (
        images.length > PAGE_SIZE && (
          <p className="catalog-all-loaded">
            {images.length} trabajos · catálogo completo
          </p>
        )
      )}
    </div>
  )
}

