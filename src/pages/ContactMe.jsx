import { useState } from 'react'
import PageShell from '../components/PageShell.jsx'
import linkedinLogo from '../assets/logo/logo-linkedin.png'
import igLogo from '../assets/logo/logo-ig.jfif'
import waLogo from '../assets/logo/logo-wa.jfif'
import gmailLogo from '../assets/logo/logo-gmail.png'

export default function ContactMe() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [pesan, setPesan] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const phoneNumber = '6281313289971' // target WhatsApp (format internasional tanpa +)

    const message = `Nama: ${nama}\nEmail: ${email}\nNo Whatsapp: ${whatsapp}\nPesan: ${pesan}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`

    // Redirect ke WhatsApp dengan pesan terisi.
    // Catatan: pengiriman final tetap dilakukan user di WhatsApp.
    window.location.href = url
  }

  const contactLinks = [
    {
      logoSrc: linkedinLogo,
      logoAlt: 'LinkedIn',
      label: 'LinkedIn',
      value: 'Gita Roito Dian Tumanggor',
    },
    {
      logoSrc: igLogo,
      logoAlt: 'Instagram',
      label: 'Instagram',
      value: 'git.___00',
    },
    {
      logoSrc: waLogo,
      logoAlt: 'WhatsApp',
      label: 'WhatsApp',
      value: '+6281313289971',
    },
    {
      logoSrc: gmailLogo,
      logoAlt: 'Gmail',
      label: 'Email',
      value: 'gitatumanggorstudy@gmail.com',
    },
  ]

  const contactCard = (
    <div className="w-full max-w-md rounded-[1.75rem] bg-pink-200/95 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-3" style={{ fontFamily: '"Poppins", sans-serif' }}>
          {contactLinks.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-[0_10px_22px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <img src={item.logoSrc} alt={item.logoAlt} className="h-9 w-9 object-contain" draggable={false} />
              <p className="min-w-0 truncate text-xs font-semibold text-zinc-800 sm:text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
    </div>
  )

  return (
    <PageShell title={null} noScroll searchText="Hubungi Saya - Gita Roito Dian Tumanggor">
      <div className="flex h-[calc(100dvh-11rem)] items-center justify-center py-6 sm:py-8">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 text-center md:flex-row md:items-end md:text-left">
          {/* Left (desktop): title + icons */}
          <div className="flex w-full flex-col items-center md:flex-1 md:items-start">
            <h1
              className="select-none text-center text-zinc-900 animate-fade-in-up md:text-left"
              style={{
                fontFamily: '"Great Vibes", cursive',
                lineHeight: 1.15,
                textShadow: '6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)',
              }}
            >
              <span className="block text-[clamp(4rem,8vw,5.5rem)]">Hubungi</span>
              <span className="mt-2 block text-[clamp(4.2rem,9vw,6rem)]">Saya</span>
            </h1>

            {/* Desktop contact card */}
            <div className="mt-8 hidden md:block">{contactCard}</div>
          </div>

          {/* Right: form */}
          <div
            className="w-full max-w-md rounded-[2rem] bg-pink-200/95 px-5 py-6 text-left text-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl sm:px-6 sm:py-7 md:flex-1"
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
                rows="3"
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

          {/* Mobile contact card (after form) */}
          <div className="mt-10 w-full md:hidden">{contactCard}</div>
        </div>
      </div>
    </PageShell>
  )

}
