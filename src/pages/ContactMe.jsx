import { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import linkedinLogo from '../assets/logo-linkedin.png'
import igLogo from '../assets/logo-ig.jfif'
import waLogo from '../assets/logo-wa.jfif'
import gmailLogo from '../assets/logo-gmail.png'

export default function ContactMe() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [pesan, setPesan] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '6281313289971' // 0813... -> 62 (Indonesia)

    const message = `Nama: ${nama}\nEmail: ${email}\nNo Whatsapp: ${whatsapp}\nPesan: ${pesan}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(url, '_blank')

    alert('Pesan berhasil terkirim!')

    setNama('')
    setEmail('')
    setWhatsapp('')
    setPesan('')
  }

  return (
    <PageShell title={null} noScroll>
      <div className="flex min-h-[calc(100dvh-11rem)] items-center justify-center">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-10 px-4 text-center md:flex-row md:items-end md:text-left">
          <div className="md:flex-1 flex flex-col items-center md:items-start">
            <h1
              className="select-none text-zinc-900 animate-fade-in-up"
              style={{
                fontFamily: '"Great Vibes", cursive',
                lineHeight: 1.15,
                textShadow:
                  '6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)',
              }}
            >
              <span className="block text-[clamp(4rem,8vw,5.5rem)]">Hubungi</span>
              <span className="mt-2 block text-[clamp(4.2rem,9vw,6rem)]">Saya</span>
            </h1>

              <div className="mt-10 inline-flex rounded-[1.75rem] bg-pink-200/95 px-5 py-4 shadow-[0_18px_35px_rgba(0,0,0,0.35)] sm:mt-12">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-16 sm:w-16"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-16 sm:w-16"
                >
                  <img
                    src={igLogo}
                    alt="Instagram"
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </a>
                <a
                  href="https://wa.me/6281328511954"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-16 sm:w-16"
                >
                  <img
                    src={waLogo}
                    alt="WhatsApp"
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </a>
                <a
                  href="mailto:"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl sm:h-16 sm:w-16"
                >
                  <img
                    src={gmailLogo}
                    alt="Gmail"
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-full max-w-md rounded-[2rem] bg-pink-200/95 px-5 py-6 text-left text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-xl sm:px-6 sm:py-7 md:flex-1 flex flex-col justify-between"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
          <form onSubmit={handleSubmit} className="space-y-3 text-sm sm:text-base">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 sm:text-[0.7rem]">
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-pink-300 bg-white/90 px-3 py-2 text-sm outline-none ring-pink-500 focus:ring-2 sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 sm:text-[0.7rem]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-pink-300 bg-white/90 px-3 py-2 text-sm outline-none ring-pink-500 focus:ring-2 sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 sm:text-[0.7rem]">
                No Whatsapp
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-pink-300 bg-white/90 px-3 py-2 text-sm outline-none ring-pink-500 focus:ring-2 sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-zinc-800 sm:text-[0.7rem]">
                Pesan
              </label>
              <textarea
                rows="4"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-pink-300 bg-white/90 px-3 py-2 text-sm outline-none ring-pink-500 focus:ring-2 sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-2xl bg-[#7f344f] py-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-50 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition hover:bg-[#692840] sm:text-base"
            >
              Kirim
            </button>
          </form>
        </div>
        </div>
      </div>
    </PageShell>
  )
}
