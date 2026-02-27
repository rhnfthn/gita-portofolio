import PageShell from '../components/PageShell.jsx'
import meImage from '../assets/bg-me1.jpeg'
import eduImage from '../assets/bg-me2.jpeg'
import unpriLogo from '../assets/logo-unpri.png'
import officeLogo from '../assets/logo-office.png'
import workspaceLogo from '../assets/logo-workspace.png'

export default function About() {
  return (
    <PageShell title={null}>
      {/* Section 1: About Me */}
      <div className="flex min-h-[calc(100dvh-11rem)] items-center justify-center py-4">
        <div className="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center">
          {/* Left image with pink card behind */}
          <div className="relative mx-auto md:mx-0 md:-translate-x-10">
            <div className="pointer-events-none absolute -left-3 -top-3 h-[280px] w-[220px] bg-[#7f344f] sm:-left-6 sm:-top-6 sm:h-[320px] sm:w-[260px] md:h-[360px] md:w-[280px]" />
            <div className="group relative h-[280px] w-[220px] overflow-hidden rounded-sm bg-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:h-[320px] sm:w-[260px] md:h-[360px] md:w-[280px]">
              <img
                src={meImage}
                alt="Gita Roito Dian Tumanggor"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
              />
            </div>
          </div>

          {/* Right panel */}
          <div className="relative flex-1">
            {/* Inner content (no frame) */}
            <div className="relative h-full rounded-[2.5rem] bg-pink-200/90 px-8 py-10 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl md:px-10 md:py-12">
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

              <div className="mt-6 max-w-3xl text-sm font-medium leading-relaxed text-zinc-900 text-justify sm:text-base">
                <p className="mb-3">
                  Saya merupakan mahasiswa yang memiliki minat kuat dalam
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
      <section className="mt-10 pb-12">
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

          {/* Bottom row: card + image with frame */}
          <div
            className="flex flex-col items-stretch gap-6 md:flex-row md:items-stretch"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* Left education card */}
            <div className="flex-1 rounded-3xl bg-pink-200/95 px-8 py-8 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl md:px-10 md:py-10">
              <h3
                className="text-3xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-4xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              ></h3>

              {/* Education text layout (single main card) */}
              <div className="mt-4 max-w-xl text-[0.8rem] font-semibold leading-relaxed text-zinc-900 sm:text-sm md:text-base">
                <p className="text-base font-extrabold tracking-wide sm:text-lg">
                  Universitas Prima Indonesia
                </p>
                <p className="mt-2 text-[0.8rem] sm:text-sm">
                  Medan, 2021 - 2025
                </p>
                <p className="mt-1 text-[0.8rem] sm:text-sm">S-1 Ilmu Hukum</p>
                <p className="mt-1 mb-2 text-[0.8rem] sm:text-sm">
                  IPK: 4.00 / 4.00
                </p>
                <p className="text-justify text-[0.8rem] sm:text-sm md:text-base">
                  Memiliki kompetensi akademik yang sangat baik dalam bidang
                  hukum, didukung oleh kemampuan analisis yuridis, penelitian
                  hukum, serta penyusunan argumentasi dan dokumen hukum secara
                  sistematis, objektif, dan berlandaskan peraturan
                  perundang-undangan yang berlaku.
                </p>
              </div>
            </div>

            {/* Right image with card behind (shadow bottom-right, proportional) */}
            <div className="relative flex-1 md:pl-6">
              {/* Back card as smaller shadow */}
              <div className="pointer-events-none absolute -bottom-3 -right-2 h-[220px] w-[95%] bg-[#7f344f] sm:-right-4 sm:h-[240px] md:-bottom-1 md:-right-8 md:h-[310px] md:w-[95%]" />
              {/* Front photo */}
              <div className="group relative z-10 h-[240px] w-full overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:h-[260px] md:h-[320px]">
                <img
                  src={eduImage}
                  alt="Ilustrasi pendidikan"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section className="mt-20 pb-16">
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
                  <li>Komunikasi dan public speaking</li>
                  <li>Kepemimpinan dan kerja tim</li>
                  <li>Pemecahan masalah dan berpikir kritis</li>
                </ul>

                <p
                  className="mt-5 font-extrabold uppercase tracking-[0.18em] text-zinc-800"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Hard Skill
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-4 text-[0.8rem] sm:text-sm">
                  <li>Komunikasi dan public speaking</li>
                  <li>Kepemimpinan dan kerja tim</li>
                  <li>Pemecahan masalah dan berpikir kritis</li>
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
                  <li>Microsoft Word (penyusunan dokumen hukum)</li>
                  <li>Microsoft Excel (pengolahan data dasar)</li>
                  <li>
                    Microsoft PowerPoint (presentasi akademik/profesional)
                  </li>
                  <li>Google Workspace (Docs, Sheets, Drive)</li>
                  <li>Mendeley / Zotero (manajemen referensi hukum)</li>
                </ul>

                {/* Logo bar */}
                <div className="mt-8 flex justify-center gap-6">
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={workspaceLogo}
                      alt="Logo Google Workspace"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={officeLogo}
                      alt="Logo Microsoft Office"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <div className="h-16 w-16 rounded-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-20 sm:w-20">
                    <img
                      src={unpriLogo}
                      alt="Logo Universitas Prima Indonesia"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
