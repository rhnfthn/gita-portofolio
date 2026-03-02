import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ImageModal({ open, image, title = 'Foto', onClose }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!open || !image?.src || typeof document === 'undefined') return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex h-[100dvh] w-[100vw] items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image?.alt ? `Preview: ${image.alt}` : 'Preview gambar'}
    >
      <div
        className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-[0_22px_45px_rgba(0,0,0,0.5)] sm:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-pink-200/95 px-4 py-3">
          <p
            className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-900"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {title}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-zinc-900 shadow-[0_10px_22px_rgba(0,0,0,0.25)]"
            aria-label="Tutup"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            X
          </button>
        </div>

        <div className="bg-white p-3">
          <img
            src={image.src}
            alt={image.alt ?? ''}
            className="max-h-[78dvh] w-full rounded-2xl bg-white object-contain"
            draggable={false}
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
