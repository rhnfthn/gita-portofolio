import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PageShell from '../components/PageShell.jsx'
import karya1 from '../assets/achievment/karya1.png'
import achievment1 from '../assets/achievment/achievment1.png'
import achievment2 from '../assets/achievment/achievment2.png'
import achievment3 from '../assets/achievment/achievment3.png'
import achievment4 from '../assets/achievment/achievment4.png'

import org1Photo1 from '../assets/organization/org1/org1.jpeg'
import org1Photo2 from '../assets/organization/org1/org2.jpeg'
import org1Photo3 from '../assets/organization/org1/org3.jpeg'
import org1Photo4 from '../assets/organization/org1/org4.jpeg'
import org2Photo1 from '../assets/organization/org2/org1.jpeg'
import org2Photo2 from '../assets/organization/org2/org2.jpeg'
import org2Photo3 from '../assets/organization/org2/org3.jpeg'
import org2Photo4 from '../assets/organization/org2/org4.jpeg'
import org3Photo1 from '../assets/organization/org3/org1.jpeg'
import org3Photo2 from '../assets/organization/org3/org2.jpeg'
import org4Photo1 from '../assets/organization/org4/org1.jpeg'
import org4Photo2 from '../assets/organization/org4/org2.jpeg'

import sertif1 from '../assets/cetification/sertif1.jpeg'
import sertif2 from '../assets/cetification/sertif2.jpeg'
import sertif3 from '../assets/cetification/sertif3.jpeg'
import sertif4 from '../assets/cetification/sertif4.jpeg'
import sertif5 from '../assets/cetification/sertif5.jpeg'
import sertif6 from '../assets/cetification/sertif6.jpeg'
import sertif7 from '../assets/cetification/sertif7.jpeg'

const certificates = [
  { src: sertif1, alt: 'Sertifikat 1' },
  { src: sertif2, alt: 'Sertifikat 2' },
  { src: sertif3, alt: 'Sertifikat 3' },
  { src: sertif4, alt: 'Sertifikat 4' },
  { src: sertif5, alt: 'Sertifikat 5' },
  { src: sertif6, alt: 'Sertifikat 6' },
  { src: sertif7, alt: 'Sertifikat 7' },
]

export default function Achievment() {
  const pencapaianPhotos = [
    {
      src: achievment1,
      alt: 'Pencapaian 1',
    },
    {
      src: achievment2,
      alt: 'Pencapaian 2',
    },
    {
      src: achievment3,
      alt: 'Pencapaian 3',
    },
    {
      src: achievment4,
      alt: 'Pencapaian 4',
    },
  ]

  const [activePhoto, setActivePhoto] = useState(null)

  const sectionConfigs = useMemo(
    () => [
      { id: 'karya-pribadi', label: 'Karya Pribadi' },
      { id: 'pencapaian', label: 'Pencapaian' },
      { id: 'organisasi', label: 'Organisasi' },
      { id: 'sertifikasi', label: 'Sertifikasi' },
    ],
    [],
  )

  const [activeSectionLabel, setActiveSectionLabel] = useState(sectionConfigs[0]?.label ?? 'Achievment')
  const visibilityByIdRef = useRef(new Map())

  const organizations = [
    {
      id: 1,
      title: 'Sekolah Legislatif Sumatera Utara 2026',
      meta: null,
      description:
        'Berpartisipasi dalam program pendidikan legislatif yang mendorong penguatan kapasitas pemuda dalam memahami kebijakan publik. Aktif berdiskusi dan menganalisis isu-isu strategis daerah, serta mengasah kemampuan komunikasi dan argumentasi secara konstruktif. Pengalaman ini membentuk pola pikir kritis, solutif, dan kolaboratif dalam melihat peran generasi muda di era digital. Pengalaman ini membentuk komitmen saya untuk terus mengembangkan literasi kebijakan dan berkontribusi melalui inovasi berbasis teknologi dan kolaborasi.',
      photos: [
        { src: org1Photo1, alt: 'Sekolah Legislatif Sumatera Utara 2026 - Foto 1' },
        { src: org1Photo2, alt: 'Sekolah Legislatif Sumatera Utara 2026 - Foto 2' },
        { src: org1Photo3, alt: 'Sekolah Legislatif Sumatera Utara 2026 - Foto 3' },
        { src: org1Photo4, alt: 'Sekolah Legislatif Sumatera Utara 2026 - Foto 4' },
      ],
    },
    {
      id: 2,
      title: 'Parliament Tour – DPRD Sumatera Utara',
      meta: 'Peserta | 2026',
      description:
        'Berpartisipasi dalam program kunjungan institusional untuk mempelajari mekanisme legislasi dan pengambilan keputusan publik. Aktif berdiskusi mengenai isu kebijakan daerah dan peran generasi muda dalam pembangunan. Pengalaman ini membentuk pola pikir analitis dan mendorong saya untuk berkontribusi melalui pendekatan kolaboratif dan berbasis teknologi.',
      photos: [
        { src: org2Photo1, alt: 'Parliament Tour – DPRD Sumatera Utara - Foto 1' },
        { src: org2Photo2, alt: 'Parliament Tour – DPRD Sumatera Utara - Foto 2' },
        { src: org2Photo3, alt: 'Parliament Tour – DPRD Sumatera Utara - Foto 3' },
        { src: org2Photo4, alt: 'Parliament Tour – DPRD Sumatera Utara - Foto 4' },
      ],
    },
    {
      id: 3,
      title: 'UC Law Fest 2025',
      meta: 'Anggota Bidang Akademik & Keilmuan | 2025',
      description:
        'Terlibat dalam pengembangan konsep dan pelaksanaan program akademik yang melibatkan mahasiswa lintas angkatan. Berkolaborasi dalam tim untuk koordinasi teknis dan komunikasi kegiatan. Pengalaman ini memperkuat kemampuan kolaborasi, manajemen waktu, serta pengelolaan program berbasis kerja tim.',
      photos: [
        { src: org3Photo1, alt: 'UC Law Fest 2025 - Foto 1' },
        { src: org3Photo2, alt: 'UC Law Fest 2025 - Foto 2' },
      ],
    },
    {
      id: 4,
      title: 'Choir Gereja | 2025',
      meta: 'Anggota',
      description:
        'Terlibat dalam kegiatan komunitas berbasis kolaborasi dan pelayanan. Melatih koordinasi tim, konsistensi, serta kemampuan komunikasi untuk mencapai performa yang selaras. Pengalaman ini membentuk karakter kolaboratif dan komitmen terhadap kontribusi berkelanjutan dalam komunitas.',
      photos: [
        { src: org4Photo1, alt: 'Choir Gereja 2025 - Foto 1' },
        { src: org4Photo2, alt: 'Choir Gereja 2025 - Foto 2' },
      ],
    },
  ]

  useEffect(() => {
    if (!activePhoto) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activePhoto])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = sectionConfigs
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibilityByIdRef.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let best = null
        for (const s of sectionConfigs) {
          const ratio = visibilityByIdRef.current.get(s.id) ?? 0
          if (!best || ratio > best.ratio) best = { id: s.id, label: s.label, ratio }
        }

        if (best?.ratio > 0 && best.label !== activeSectionLabel) {
          setActiveSectionLabel(best.label)
        }
      },
      {
        root: null,
        rootMargin: '-90px 0px -65% 0px',
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionConfigs, activeSectionLabel])

  const searchText = `${activeSectionLabel} - Gita Roito Dian Tumanggor`

  return (
    <PageShell title={null} searchText={searchText}>
      <section className="mx-auto flex min-h-[calc(100dvh-11rem)] w-full max-w-5xl flex-col items-center py-8 sm:py-10">
        {/* Section: Karya Pribadi */}
        <section id="karya-pribadi" className="mt-6 w-full max-w-5xl">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Karya Pribadi
          </h2>

          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
            {/* Left: image card */}
            <div className="w-full md:w-fit md:max-w-[520px] md:flex-none">
              <div className="overflow-hidden rounded-[2.5rem] bg-[#7f344f] shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <img
                  src={karya1}
                  alt="Karya Pribadi"
                  className="h-[320px] w-full object-contain p-6 sm:h-[390px] md:h-[470px]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Right: text card */}
            <div
              className="w-full rounded-2xl bg-pink-200/95 px-6 py-7 text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl md:w-[440px] md:flex-none md:px-8 md:py-9 lg:w-[480px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
                Poster Edukatif
              </p>
              <p className="mt-2 text-base font-extrabold tracking-[0.02em] text-zinc-900 sm:text-lg">
                “Mengapa Kita Ingin Hidup Tertib, tetapi Enggan Diatur?”
              </p>

              <p className="mt-4 text-[0.9rem] leading-relaxed text-zinc-900 sm:text-base">
                Proyek desain pribadi yang mengangkat refleksi sosial mengenai kontradiksi sikap masyarakat terhadap aturan dan
                ketertiban. Poster ini dibuat untuk melatih kemampuan komunikasi visual dalam menyampaikan pesan kritis secara
                persuasif dan mudah dipahami.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Pencapaian */}
        <section id="pencapaian" className="mt-16 w-full max-w-5xl">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Pencapaian
          </h2>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
            {/* Left: framed 4 photos */}
            <div className="w-full md:w-[520px] md:flex-none">
              <div className="rounded-[2.5rem] bg-[#7f344f] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-2 gap-4">
                  {pencapaianPhotos.map((photo) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setActivePhoto(photo)}
                      className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                      aria-label={`Buka foto ${photo.alt}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-[150px] w-full object-cover sm:h-[170px]"
                        draggable={false}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: text card */}
            <div
              className="w-full rounded-2xl bg-pink-200/95 px-6 py-7 text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:flex-1 md:px-8 md:py-9"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <p className="text-base font-extrabold text-zinc-900 sm:text-lg">
                Finalis Duta Pelopor Sumatera Utara 2026
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-800 sm:text-base">
                (Tahap Karantina &amp; Grand Final)
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-[0.9rem] leading-relaxed text-zinc-900 sm:text-base">
                <li>Lolos seleksi administrasi dan wawancara tingkat provinsi</li>
                <li>Mengikuti tahap karantina dan pembinaan kepemimpinan</li>
                <li>Mengembangkan dan mempresentasikan gagasan kepeloporan untuk pemberdayaan pemuda</li>
                <li>Berpartisipasi dalam pelatihan pengembangan kapasitas dan karakter kepemimpinan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Photo modal */}
        {activePhoto && typeof document !== 'undefined'
          ? createPortal(
              <div
                className="fixed inset-0 z-50 flex h-[100dvh] w-[100vw] items-center justify-center bg-black/60 p-4"
                onClick={() => setActivePhoto(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Preview foto"
              >
                <div
                  className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-[0_22px_45px_rgba(0,0,0,0.5)] sm:max-w-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between bg-pink-200/95 px-4 py-3">
                    <p
                      className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-900"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      Foto
                    </p>
                    <button
                      type="button"
                      onClick={() => setActivePhoto(null)}
                      className="rounded-xl bg-white px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-zinc-900 shadow-[0_10px_22px_rgba(0,0,0,0.25)]"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      Tutup
                    </button>
                  </div>

                  <div className="bg-white p-3">
                    <img
                      key={activePhoto.src}
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      className="max-h-[40dvh] w-full rounded-2xl bg-white object-contain"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>,
              document.body,
            )
          : null}

        {/* Section: Organisasi */}
        <section id="organisasi" className="mt-16 w-full max-w-5xl">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Organisasi
          </h2>

          <div className="mt-10 flex flex-col gap-14">
            {organizations.map((org, index) => {
              const isReverse = index % 2 === 1
              const gridCols = org.photos.length <= 2 ? 'grid-cols-2' : 'grid-cols-2'
              const imgHeight = org.photos.length <= 2 ? 'h-[170px] sm:h-[200px]' : 'h-[150px] sm:h-[170px]'

              return (
                <div
                  key={org.id}
                  className={`flex flex-col gap-8 md:items-center md:gap-10 ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Photos */}
                  <div className="w-full md:w-[520px] md:flex-none">
                    <div className="rounded-[2.5rem] bg-[#7f344f] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
                      <div className={`grid ${gridCols} gap-4`}>
                        {org.photos.map((photo) => (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => setActivePhoto(photo)}
                            className="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                            aria-label={`Buka foto ${photo.alt}`}
                          >
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              className={`${imgHeight} w-full object-cover`}
                              draggable={false}
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className="w-full rounded-2xl bg-pink-200/95 px-6 py-7 text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:flex-1 md:px-8 md:py-9"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    <p className="mt-2 text-base font-extrabold text-zinc-900 sm:text-lg">
                      {org.title}
                    </p>
                    {org.meta ? (
                      <p className="mt-1 text-sm font-semibold text-zinc-800 sm:text-base">{org.meta}</p>
                    ) : null}
                    <p className="mt-4 text-[0.9rem] leading-relaxed text-zinc-900 sm:text-base">
                      {org.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section: Sertifikasi */}
        <section id="sertifikasi" className="mt-16 w-full max-w-5xl">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Sertifikasi
          </h2>

          <p
            className="mt-3 text-center text-sm text-zinc-800 sm:text-base"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Beberapa sertifikat dan penghargaan yang pernah saya raih.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {certificates.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActivePhoto(item)}
                className="flex w-full max-w-[340px] flex-col overflow-hidden rounded-3xl bg-pink-200/95 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:w-[290px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
                aria-label={`Buka ${item.alt}`}
              >
                <div className="bg-white p-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-44 w-full rounded-2xl object-contain"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <div className="px-5 pb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
                    Sertifikat {index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  )
}
