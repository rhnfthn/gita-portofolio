import PageShell from '../components/PageShell.jsx'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import meImage1 from '../assets/me/me1.png'
import meImage2 from '../assets/me/me2.png'
import meImage3 from '../assets/me/me3.png'
import meImage4 from '../assets/me/me4.png'
import unpriLogo from '../assets/logo-unpri.png'
import workspaceLogo from '../assets/logo/logo-workspace.png'
import canvaLogo from '../assets/logo/logo-canva.jfif'
import capcutLogo from '../assets/logo/logo-capcut.png'
import wordLogo from '../assets/logo/logo-word.png'
import powerpointLogo from '../assets/logo/logo-powerpoint.png'
import medsosIg from '../assets/medsos/ig.png'
import medsosLinkedin from '../assets/medsos/linkedin.png'
import medsosTiktok from '../assets/medsos/tiktok.png'
import igLogo from '../assets/logo/logo-ig.jfif'
import tiktokLogo from '../assets/logo/logo-tiktok.jpeg'
import linkedinLogo from '../assets/logo/logo-linkedin.png'

export default function About() {
  const socialImages = [
    { key: 'ig', src: medsosIg, alt: 'Instagram' },
    { key: 'linkedin', src: medsosLinkedin, alt: 'LinkedIn' },
    { key: 'tiktok', src: medsosTiktok, alt: 'TikTok' },
  ]

  const MotionDiv = motion.div

  const [socialOrder, setSocialOrder] = useState([0, 1, 2])

  const sectionConfigs = useMemo(
    () => [
      { id: 'about-me', label: 'About Me' },
      { id: 'pendidikan', label: 'Pendidikan' },
      { id: 'skill', label: 'Skill' },
      { id: 'media-sosial', label: 'Media Sosial' },
    ],
    [],
  )

  const [activeSectionLabel, setActiveSectionLabel] = useState(sectionConfigs[0]?.label ?? 'About')
  const visibilityByIdRef = useRef(new Map())

  const cycleForward = () => {
    setSocialOrder(([first, ...rest]) => [...rest, first])
  }

  const cycleBackward = () => {
    setSocialOrder((prev) => {
      if (prev.length === 0) return prev
      const last = prev[prev.length - 1]
      return [last, ...prev.slice(0, -1)]
    })
  }

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
    <PageShell title={null} contentMaxWidthClass="max-w-screen-2xl" searchText={searchText}>
      {/* Section 1: About Me */}
      <div id="about-me" className="flex min-h-[calc(100dvh-11rem)] items-center justify-center py-4">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left: purple panel + overlapping cutout photos (reference-style) */}
          <div className="relative mx-auto md:mx-0 md:flex-none">
            <div className="relative h-[280px] w-[300px] overflow-visible rounded-[2.5rem] bg-[#7f344f] shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:h-[320px] sm:w-[380px] md:h-[420px] md:w-[520px] lg:h-[480px] lg:w-[600px]">
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-black/10" />

              {/* me1 (left) */}
              <div className="absolute -bottom-5 left-[-24px] z-20 h-[112%] w-[50%] transition-transform duration-300 hover:scale-[1.02] sm:left-[-16px]">
                <img
                  src={meImage1}
                  alt="Gita Roito Dian Tumanggor 1"
                  className="h-full w-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* me3 (middle, overlaps me1) */}
              <div className="absolute -bottom-6 left-[-64px] z-30 h-[122%] w-[54%] transition-transform duration-300 hover:scale-[1.02] sm:-bottom-8 sm:left-[26%] md:-bottom-10">
                <img
                  src={meImage3}
                  alt="Gita Roito Dian Tumanggor 3"
                  className="h-full w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* me2 (right, slightly behind) */}
              <div className="absolute -bottom-8 left-[78%] z-10 h-[114%] w-[50%] transition-transform duration-300 hover:scale-[1.02] sm:left-[54%]">
                <img
                  src={meImage2}
                  alt="Gita Roito Dian Tumanggor 2"
                  className="h-full w-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.32)]"
                />
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="relative z-10 w-full md:flex-[1.8]">
            {/* Inner content (no frame) */}
            <div className="relative h-full rounded-[2.5rem] bg-pink-200/90 px-8 py-10 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl md:px-12 md:py-10">
              <h1
                className="text-3xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-4xl md:text-5xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Hi, Saya Gita
              </h1>
              <h2
                className="mt-1 text-xl font-extrabold uppercase tracking-[0.16em] text-zinc-900 sm:text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Roito Dian Tumanggor
              </h2>

              <div className="mt-6 text-sm font-medium leading-relaxed text-zinc-900 text-justify sm:text-base">
                <p className="mb-3">
                  Saya merupakan mahasiswi yang memiliki minat kuat dalam
                  pengembangan kepemimpinan, pemberdayaan komunitas, dan
                  penguatan kapasitas intelektual mahasiswa. Aktif terlibat
                  dalam perancangan serta pelaksanaan forum diskusi akademik,
                  debat hukum, dan studi kasus sebagai bentuk kontribusi nyata
                  dalam membangun budaya berpikir kritis di lingkungan kampus.
                </p>
                <p>
                  Melalui pengalaman organisasi dan partisipasi dalam program
                  kepemimpinan tingkat daerah, saya terbiasa bekerja secara
                  terstruktur, komunikatif dalam forum publik, serta adaptif
                  dalam kolaborasi tim. Saya percaya bahwa teknologi dan
                  kolaborasi digital dapat menjadi sarana strategis untuk
                  memperluas dampak, memperkuat jejaring, dan mendorong inovasi
                  di kalangan mahasiswa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Education */}
      <section id="pendidikan" className="mt-10 pb-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-10">
          {/* Top row: logo + title */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="h-20 w-20 overflow-hidden rounded-sm bg-white shadow-[0_12px_25px_rgba(0,0,0,0.35)] md:h-24 md:w-24">
              <img
                src={unpriLogo}
                alt="Logo Universitas Prima Indonesia"
                className="h-full w-full object-contain p-1"
              />
            </div>

            <h2
              className="text-[clamp(3rem,7vw,4.5rem)] font-semibold text-black"
              style={{
                fontFamily: "Great Vibes, cursive",
                lineHeight: 1.1,
                textShadow:
                  "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
              }}
            >
              Pendidikan
            </h2>
          </div>

          {/* Education card (reference-style): text card + person in front */}
          <div
            className="relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="rounded-[2.5rem] bg-pink-200/95 px-6 py-7 shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:px-10 md:py-10">
              {/* Photo strip */}
              {/* Text content (leave space for the overlapping person on md+) */}
              <div className="md:pr-[220px] lg:pr-[260px]">
                <p className="text-base font-extrabold tracking-wide text-zinc-900 sm:text-lg">
                  Universitas Prima Indonesia
                </p>
                <p className="mt-2 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                  Medan, Sumatera Utara
                </p>
                <p className="mt-1 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                  S-1 Ilmu Hukum
                </p>
                <p className="mt-1 mb-3 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                  IPK: 4.00 / 4.00
                </p>
                <p className="text-justify text-[0.8rem] font-semibold leading-relaxed text-zinc-900 sm:text-sm md:text-base">
                  Memiliki kompetensi akademik yang sangat baik dalam bidang
                  hukum, didukung oleh kemampuan analisis yuridis, penelitian
                  hukum, serta penyusunan argumentasi dan dokumen hukum secara
                  sistematis, objektif, dan berlandaskan peraturan
                  perundang-undangan yang berlaku.
                </p>
              </div>
            </div>

            {/* Overlapping person (front) */}
            <div className="pointer-events-none absolute bottom-0 right-4 z-20 hidden md:block md:w-[210px] lg:right-6 lg:w-[250px]">
              <img
                src={meImage4}
                alt="Gita Roito Dian Tumanggor - Pendidikan"
                className="w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Mobile fallback: person below card */}
            <div className="mt-4 flex justify-end md:hidden">
              <img
                src={meImage4}
                alt="Gita Roito Dian Tumanggor - Pendidikan"
                className="w-[170px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section id="skill" className="mt-20 pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          {/* Title + Cards layout */}
          <div className="mt-2 flex flex-col gap-8 md:mt-4 md:flex-row md:items-start">
            {/* Left column: title + small card */}
            <div className="md:flex-[1.05]">
              <h2
                className="text-[clamp(3rem,7vw,4.5rem)] font-extrabold text-black"
                style={{
                  fontFamily: "Great Vibes, cursive",
                  lineHeight: 1.1,
                  textShadow:
                    "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
                }}
              >
                Skill
              </h2>

              <div className="mt-6 rounded-[2rem] bg-pink-200/95 px-6 py-4 text-sm font-medium text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:text-base">
                <p
                  className="font-extrabold uppercase tracking-[0.18em] text-zinc-800"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Soft Skill
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-[0.8rem] sm:text-sm">
                  <li>Komunikasi efektif & Public speaking </li>
                  <li>Kepemimpinan </li>
                  <li>Kerja tim dan kolaborasi</li>
                  <li>Pemecahan masalah dan berpikir kritis</li>
                  <li>Manajemen waktu dan bertanggung jawab</li>
                </ul>

                <p
                  className="mt-5 font-extrabold uppercase tracking-[0.18em] text-zinc-800"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Hard Skill
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-[0.8rem] sm:text-sm">
                  <li>Analisa kebijakan publik</li>
                  <li>Penulisan & Penyusunan Dokumen Hukum</li>
                  <li>Manajemen Administrasi Kegiatan</li>
                </ul>
              </div>
            </div>

            {/* Right column: big card */}
            <div className="md:flex-[1.25]">
              <div className="rounded-[2.5rem] bg-pink-300/95 px-6 py-6 text-sm font-medium text-zinc-900 shadow-[0_22px_45px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:px-8 sm:py-8 md:min-h-[420px]">
                <p
                  className="font-extrabold uppercase tracking-[0.18em] text-zinc-800"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Aplikasi Yang Dikuasai
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-[0.8rem] sm:text-sm md:text-base">
                  <li>Microsoft Word</li>
                  <li> Microsoft PowerPoint</li>
                  <li>Canva (desain grafis)</li>
                  <li>CapCut (editing video)</li>
                  <li>Google Workspace (Docs, Sheets, Drive)</li>
                </ul>

                {/* Logo bar */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={workspaceLogo}
                      alt="Logo Google Workspace"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={wordLogo}
                      alt="Logo Microsoft Word"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={canvaLogo}
                      alt="Logo Canva"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={capcutLogo}
                      alt="Logo CapCut"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={powerpointLogo}
                      alt="Logo Microsoft PowerPoint"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Social Media */}
      <section id="media-sosial" className="mt-20 pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <h2
            className="text-[clamp(3rem,7vw,4.5rem)] font-extrabold text-black"
            style={{
              fontFamily: 'Great Vibes, cursive',
              lineHeight: 1.1,
              textShadow:
                '6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)',
            }}
          >
            Media Sosial
          </h2>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-stretch">
            {/* Left: images outside card (transparent) */}
            <div className="relative w-full md:flex-1">
              <div className="relative h-[390px] w-full overflow-visible sm:h-[450px] md:h-[490px]">
                {/* Background card behind the stack */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-pink-200/95 shadow-[0_18px_35px_rgba(0,0,0,0.25)]" />

                {socialOrder
                  .map((idx) => socialImages[idx])
                  .map((item, stackIndex) => {
                    const zIndex = 30 - stackIndex
                    const x = stackIndex * 28
                    const y = stackIndex * 16
                    const scale = 1 - stackIndex * 0.06
                    const rotate = 0

                    return (
                      <MotionDiv
                        key={item.key}
                        className="absolute left-6 top-5"
                        style={{ zIndex }}
                        drag={stackIndex === 0 ? 'x' : false}
                        dragConstraints={{ left: -120, right: 120 }}
                        dragElastic={0.12}
                        onDragEnd={(_, info) => {
                          if (stackIndex !== 0) return
                          if (info.offset.x < -55) cycleForward()
                          else if (info.offset.x > 55) cycleBackward()
                        }}
                        animate={{ x, y, scale, rotate, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                        whileHover={stackIndex === 0 ? { scale: scale + 0.02 } : undefined}
                        whileTap={stackIndex === 0 ? { cursor: 'grabbing', rotate: 0, scale: scale + 0.03 } : undefined}
                      >
                        <div className="h-[320px] w-[220px] rounded-[2rem] bg-white p-4 shadow-[0_18px_35px_rgba(0,0,0,0.22)] sm:h-[370px] sm:w-[250px] md:h-[405px] md:w-[270px]">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-contain"
                            draggable={false}
                          />
                        </div>
                      </MotionDiv>
                    )
                  })}

                <p
                  className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800/80"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Geser kiri / kanan
                </p>
              </div>
            </div>

            {/* Right: text card */}
            <div
              className="w-full rounded-[2.5rem] bg-pink-200/95 px-6 py-6 text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:w-[420px] md:px-10 md:py-9"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-800 sm:text-base">
                Terhubung Dengan Saya
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-900 sm:text-base">
                Klik teks di bawah untuk membuka profil.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="https://www.instagram.com/git.___00"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img src={igLogo} alt="Instagram" className="h-10 w-10 rounded-md object-cover" />
                    <span className="truncate text-sm font-semibold sm:text-base">@git.___00</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">Buka</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gita-roito-dian-tumanggor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img src={linkedinLogo} alt="LinkedIn" className="h-10 w-10 rounded-md object-contain" />
                    <span className="truncate text-sm font-semibold sm:text-base">Gita Roito Dian</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">Buka</span>
                </a>

                <a
                  href="https://www.tiktok.com/@git___0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img src={tiktokLogo} alt="TikTok" className="h-10 w-10 rounded-md object-cover" />
                    <span className="truncate text-sm font-semibold sm:text-base">@git___0</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">Buka</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
