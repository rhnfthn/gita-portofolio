import PageShell from '../components/PageShell.jsx'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageModal from '../components/ImageModal.jsx'
import me123 from '../assets/me/me123.png'
import me4 from '../assets/me/me4.png'
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
  const [activeImage, setActiveImage] = useState(null)

  const openImage = (image, e) => {
    if (e?.preventDefault) e.preventDefault()
    if (e?.stopPropagation) e.stopPropagation()
    setActiveImage(image)
  }

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

  return (
    <PageShell title={null} contentMaxWidthClass="max-w-screen-2xl">
      {/* Section 1: About Me */}
      <div
        id="about-me"
        className="flex justify-center pt-4 pb-10 sm:pt-6 sm:pb-12"
      >
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Left: purple panel + overlapping cutout photos (reference-style) */}
          <div className="relative mx-auto md:mx-0 md:flex-none">
            <div className="relative h-[280px] w-[300px] overflow-visible rounded-[2.5rem] bg-[#7f344f] shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:h-[320px] sm:w-[380px] md:h-[420px] md:w-[520px] lg:h-[480px] lg:w-[600px]">
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-black/10" />

              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src={me123}
                  alt="Gita Roito Dian Tumanggor"
                  className="h-[112%] w-auto cursor-zoom-in select-none object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.4)]"
                  draggable={false}
                  onClick={(e) =>
                    openImage(
                      { src: me123, alt: "Gita Roito Dian Tumanggor" },
                      e,
                    )
                  }
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
                Halo, Saya Gita
              </h1>
              <h2
                className="mt-1 text-xl font-extrabold uppercase tracking-[0.16em] text-zinc-900 sm:text-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Roito Dian Tumanggor
              </h2>

              <div className="mt-6 text-sm font-medium leading-relaxed text-zinc-900 text-left sm:text-base">
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
      <section id="pendidikan" className="mt-8 pb-12 sm:mt-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-10">
          {/* Title */}
          <div className="flex items-center">
            <div className="inline-flex rounded-[2rem] bg-[#7a324c] px-6 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
              <h2
                className="select-none text-[clamp(3rem,7vw,4.5rem)] text-pink-50 animate-fade-in-up"
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  lineHeight: 1.15,
                  textShadow:
                    "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
                }}
              >
                Pendidikan
              </h2>
            </div>
          </div>

          {/* Education card (reference-style): text card + person in front */}
          <div
            className="relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="relative overflow-visible rounded-[2.5rem] bg-pink-200/95 px-6 pt-7 pb-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)] sm:pt-8 sm:pb-4 md:px-10 md:py-10 md:pr-64 lg:pr-72">
              <div className="flex flex-col gap-6 md:block">
                {/* Left: text */}
                <div className="min-w-0">
                  <p className="text-base font-extrabold tracking-wide text-zinc-900 sm:text-lg">
                    Universitas Prima Indonesia
                  </p>
                  <p className="mt-2 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                    Medan, Sumatera Utara
                  </p>
                  <p className="mt-1 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                    S-1 Ilmu Hukum
                  </p>
                  <p className="mb-3 mt-1 text-[0.8rem] font-semibold text-zinc-900 sm:text-sm">
                    IPK: 4.00 / 4.00
                  </p>

                  <p className="text-left text-[0.8rem] font-semibold leading-relaxed text-zinc-900 sm:text-sm md:text-base">
                    Memiliki kompetensi akademik yang sangat baik dalam bidang
                    hukum, didukung oleh kemampuan analisis yuridis, penelitian
                    hukum, serta penyusunan argumentasi dan dokumen hukum secara
                    sistematis, objektif, dan berlandaskan peraturan
                    perundang-undangan yang berlaku.
                  </p>
                </div>

                {/* Photo (mobile: below text, desktop: overlap keluar card) */}
                <div className="mt-3 -mb-3 flex justify-center sm:mt-4 sm:-mb-4 md:mt-0 md:mb-0 md:absolute md:bottom-0 md:-right-6 lg:-right-8">
                  <img
                    src={me4}
                    alt="Gita Roito Dian Tumanggor"
                    className="h-64 w-auto cursor-zoom-in select-none object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)] sm:h-72 md:h-[22rem] lg:h-[24rem]"
                    draggable={false}
                    onClick={(e) =>
                      openImage(
                        { src: me4, alt: "Gita Roito Dian Tumanggor" },
                        e,
                      )
                    }
                  />
                </div>
              </div>
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
              <div className="inline-flex rounded-[2rem] bg-[#7a324c] px-6 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
                <h2
                  className="select-none text-[clamp(3rem,7vw,4.5rem)] text-pink-50 animate-fade-in-up"
                  style={{
                    fontFamily: '"Great Vibes", cursive',
                    lineHeight: 1.15,
                    textShadow:
                      "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
                  }}
                >
                  Skill
                </h2>
              </div>

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
                      className="h-full w-full cursor-zoom-in object-contain p-2"
                      draggable={false}
                      onClick={(e) =>
                        openImage(
                          { src: workspaceLogo, alt: "Logo Google Workspace" },
                          e,
                        )
                      }
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={wordLogo}
                      alt="Logo Microsoft Word"
                      className="h-full w-full cursor-zoom-in object-contain p-2"
                      draggable={false}
                      onClick={(e) =>
                        openImage(
                          { src: wordLogo, alt: "Logo Microsoft Word" },
                          e,
                        )
                      }
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={canvaLogo}
                      alt="Logo Canva"
                      className="h-full w-full cursor-zoom-in object-contain p-2"
                      draggable={false}
                      onClick={(e) =>
                        openImage({ src: canvaLogo, alt: "Logo Canva" }, e)
                      }
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={capcutLogo}
                      alt="Logo CapCut"
                      className="h-full w-full cursor-zoom-in object-contain p-2"
                      draggable={false}
                      onClick={(e) =>
                        openImage({ src: capcutLogo, alt: "Logo CapCut" }, e)
                      }
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={powerpointLogo}
                      alt="Logo Microsoft PowerPoint"
                      className="h-full w-full cursor-zoom-in object-contain p-2"
                      draggable={false}
                      onClick={(e) =>
                        openImage(
                          {
                            src: powerpointLogo,
                            alt: "Logo Microsoft PowerPoint",
                          },
                          e,
                        )
                      }
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
          <div className="inline-flex rounded-[2rem] bg-[#7a324c] px-6 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
            <h2
              className="select-none text-[clamp(3rem,7vw,4.5rem)] text-pink-50 animate-fade-in-up"
              style={{
                fontFamily: '"Great Vibes", cursive',
                lineHeight: 1.15,
                textShadow:
                  "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
              }}
            >
              Media Sosial
            </h2>
          </div>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
            {/* Left: images outside card (transparent) */}
            <div className="relative w-full md:flex-1">
              <div className="relative h-[390px] w-full overflow-visible sm:h-[450px] md:h-[490px]">
                {/* Background card behind the stack */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-pink-200/95 shadow-[0_18px_35px_rgba(0,0,0,0.25)]" />

                {socialOrder
                  .map((idx) => socialImages[idx])
                  .map((item, stackIndex) => {
                    const zIndex = 30 - stackIndex;
                    const x = stackIndex * 28;
                    const y = stackIndex * 16;
                    const scale = 1 - stackIndex * 0.06;
                    const rotate = 0;

                    return (
                      <div
                        key={item.key}
                        className="absolute left-1/2 top-1/2"
                        style={{ zIndex, transform: "translate(-50%, -52%)" }}
                      >
                        <MotionDiv
                          drag={stackIndex === 0 ? "x" : false}
                          dragConstraints={{ left: -120, right: 120 }}
                          dragElastic={0.12}
                          onDragEnd={(_, info) => {
                            if (stackIndex !== 0) return;
                            if (info.offset.x < -55) cycleForward();
                            else if (info.offset.x > 55) cycleBackward();
                          }}
                          animate={{ x, y, scale, rotate, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 26,
                          }}
                          whileHover={
                            stackIndex === 0
                              ? { scale: scale + 0.02 }
                              : undefined
                          }
                          whileTap={
                            stackIndex === 0
                              ? {
                                  cursor: "grabbing",
                                  rotate: 0,
                                  scale: scale + 0.03,
                                }
                              : undefined
                          }
                        >
                          <div
                            className="h-[320px] w-[220px] rounded-[2rem] bg-white p-4 shadow-[0_18px_35px_rgba(0,0,0,0.22)] sm:h-[370px] sm:w-[250px] md:h-[405px] md:w-[270px]"
                            onClick={(e) =>
                              openImage({ src: item.src, alt: item.alt }, e)
                            }
                            role="button"
                            tabIndex={0}
                          >
                            <img
                              src={item.src}
                              alt={item.alt}
                              className="h-full w-full cursor-zoom-in object-contain"
                              draggable={false}
                            />
                          </div>
                        </MotionDiv>
                      </div>
                    );
                  })}

                <p
                  className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800/80"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Geser kiri / kanan
                </p>
              </div>
            </div>

            {/* Right: text card */}
            <div
              className="w-full rounded-[2.5rem] bg-pink-200/95 px-6 py-6 text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] md:w-fit md:self-start md:px-8 md:py-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-zinc-800 sm:text-base">
                Terhubung Dengan Saya
              </p>
              <p className="mt-3 text-justify text-sm font-medium leading-relaxed text-zinc-900 sm:text-base">
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
                    <img
                      src={igLogo}
                      alt="Instagram"
                      className="h-10 w-10 cursor-zoom-in rounded-md object-cover"
                      draggable={false}
                      onClick={(e) =>
                        openImage({ src: igLogo, alt: "Instagram" }, e)
                      }
                    />
                    <span className="truncate text-sm font-semibold sm:text-base">
                      @git.___00
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
                    Buka
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gita-roito-dian-tumanggor-8043833b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={linkedinLogo}
                      alt="LinkedIn"
                      className="h-10 w-10 cursor-zoom-in rounded-md object-contain"
                      draggable={false}
                      onClick={(e) =>
                        openImage({ src: linkedinLogo, alt: "LinkedIn" }, e)
                      }
                    />
                    <span className="truncate text-sm font-semibold sm:text-base">
                      Gita Roito Dian
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
                    Buka
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@git___0"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-4 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={tiktokLogo}
                      alt="TikTok"
                      className="h-10 w-10 cursor-zoom-in rounded-md object-cover"
                      draggable={false}
                      onClick={(e) =>
                        openImage({ src: tiktokLogo, alt: "TikTok" }, e)
                      }
                    />
                    <span className="truncate text-sm font-semibold sm:text-base">
                      @git___0
                    </span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
                    Buka
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        open={!!activeImage}
        image={activeImage}
        title="Gambar"
        onClose={() => setActiveImage(null)}
      />
    </PageShell>
  );
}
