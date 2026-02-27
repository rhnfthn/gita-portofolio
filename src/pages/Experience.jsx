import PageShell from '../components/PageShell.jsx'
import bgMe1 from '../assets/bg-me1.jpeg'
import bgMe2 from '../assets/bg-me2.jpeg'
import bgMe3 from '../assets/bg-me3.jpeg'

const steps = [
  {
    id: 1,
    title: 'Awal Perjalanan',
    subtitle: 'Pengenalan organisasi & lingkungan kampus',
    description:
      'Mulai aktif mengikuti kegiatan orientasi dan pengenalan organisasi kemahasiswaan, membangun jejaring awal dengan teman-teman satu jurusan dan lintas fakultas.',
    image: bgMe1,
  },
  {
    id: 2,
    title: 'Aktif di Organisasi',
    subtitle: 'Kepanitiaan & program kerja pertama',
    description:
      'Terlibat sebagai panitia dalam berbagai kegiatan kampus seperti seminar, diskusi publik, dan kegiatan sosial sehingga terbiasa bekerja dalam tim secara terstruktur.',
    image: bgMe2,
  },
  {
    id: 3,
    title: 'Pengembangan Diri',
    subtitle: 'Pelatihan, lomba, dan forum diskusi',
    description:
      'Mengikuti pelatihan kepemimpinan, lomba debat, dan forum diskusi hukum yang mengasah kemampuan berpikir kritis, argumentasi, dan public speaking.',
    image: bgMe3,
  },
  {
    id: 4,
    title: 'Peran Kepemimpinan',
    subtitle: 'Memimpin tim & koordinasi program',
    description:
      'Memegang tanggung jawab sebagai koordinator / pengurus organisasi, mengelola program kerja, serta memastikan komunikasi yang efektif antara anggota tim.',
    image: bgMe2,
  },
  {
    id: 5,
    title: 'Roadmap Ke Depan',
    subtitle: 'Profesionalisme & kontribusi berkelanjutan',
    description:
      'Berfokus pada penguatan kapasitas profesional, memperluas jejaring, dan tetap aktif berkontribusi melalui proyek, riset, maupun kegiatan kolaboratif lainnya.',
    image: bgMe1,
  },
]

const certificates = Array.from({ length: 9 }, (_, index) => index + 1)

export default function Experience() {
  return (
    <PageShell title={null}>
      <section className="mx-auto flex min-h-[calc(100dvh-11rem)] w-full max-w-5xl flex-col items-center py-8 sm:py-10">
        {/* Heading */}
        <h1
          className="text-center text-zinc-900 animate-fade-in-up"
          style={{
            fontFamily: '"Great Vibes", cursive',
            lineHeight: 1.15,
            textShadow:
              '6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)',
          }}
        >
          <span className="block text-[clamp(4rem,8vw,5.5rem)]">Pengalaman</span>
        </h1>

        {/* Roadmap timeline */}
        <div className="mt-12 w-full max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-[3px] rounded-full bg-[#7f344f]/70 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

            <div className="space-y-16 sm:space-y-20">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={step.id}
                    className="relative flex items-stretch gap-6 sm:gap-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-6 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
                      <div className="h-4 w-4 rounded-full border-[3px] border-pink-100 bg-[#7f344f] shadow-[0_0_0_4px_rgba(255,255,255,0.7)]" />
                    </div>

                    {/* Content wrapper */}
                    <div
                      className={`mt-2 flex w-full flex-col items-stretch sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-8 ${
                        isLeft ? '' : 'sm:flex-row-reverse sm:[&>*:first-child]:col-start-2'
                      }`}
                    >
                      {/* Image */}
                      <div className={`order-1 overflow-hidden rounded-3xl bg-white shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl ${isLeft ? '' : 'sm:order-2'}`}>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-40 w-full object-cover sm:h-48"
                        />
                      </div>

                      {/* Text card */}
                      <div
                        className={`order-2 mt-4 rounded-3xl bg-pink-200/95 px-5 py-5 text-sm text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:mt-0 sm:px-6 sm:py-6 ${
                          isLeft ? '' : 'sm:order-1'
                        }`}
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
                          Langkah {step.id}
                        </p>
                        <h2 className="mt-1 text-lg font-extrabold uppercase tracking-[0.16em] text-zinc-900 sm:text-xl">
                          {step.title}
                        </h2>
                        <p className="mt-1 text-[0.8rem] font-semibold text-zinc-800 sm:text-sm">
                          {step.subtitle}
                        </p>
                        <p className="mt-3 text-[0.8rem] leading-relaxed text-zinc-900 sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Certificates grid */}
        <section className="mt-16 w-full max-w-5xl">
          <h2
            className="text-center text-2xl font-extrabold uppercase tracking-[0.18em] text-zinc-900 sm:text-3xl"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Sertifikat
          </h2>

          <p
            className="mt-3 text-center text-sm text-zinc-800 sm:text-base"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Beberapa sertifikat dan penghargaan yang pernah saya raih.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {certificates.map((item) => (
              <div
                key={item}
                className="flex h-32 flex-col items-center justify-center rounded-3xl bg-pink-200/95 px-4 text-center text-sm font-semibold text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:h-36"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-700">
                  Sertifikat {item}
                </span>
                <span className="mt-2 text-[0.8rem] text-zinc-900 sm:text-sm">
                  Tambahkan deskripsi singkat atau gambar sertifikat di sini.
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  )
}
