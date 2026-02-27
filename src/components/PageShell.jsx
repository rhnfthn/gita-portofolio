import headerUngu from '../assets/header-ungu.svg'
import bgPink from '../assets/bg-pink.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function PageShell({ title, children, headerContent, headerRightContent, noScroll = false }) {
  const location = useLocation()
  const navigate = useNavigate()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact Me', to: '/contact' },
  ]

  const routeOrder = links.map((link) => link.to)
  const currentIndex = routeOrder.indexOf(location.pathname)
  const prevTo = currentIndex > 0 ? routeOrder[currentIndex - 1] : null
  const nextTo = currentIndex >= 0 && currentIndex < routeOrder.length - 1 ? routeOrder[currentIndex + 1] : null

  const defaultHeaderContent = (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Back"
          onClick={() => {
            if (prevTo) navigate(prevTo)
          }}
          disabled={!prevTo}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-searchbar text-zinc-900 ring-1 ring-black/15 transition-opacity disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Forward"
          onClick={() => {
            if (nextTo) navigate(nextTo)
          }}
          disabled={!nextTo}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-searchbar text-zinc-900 ring-1 ring-black/15 transition-opacity disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Refresh"
          onClick={() => {
            window.location.reload()
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-searchbar text-zinc-900 ring-1 ring-black/15"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 1 1-2.64-6.36" />
            <path d="M21 3v6h-6" />
          </svg>
        </button>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex h-10 items-center rounded-full bg-searchbar px-5 ring-1 ring-black/15">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3 h-6 w-6 text-zinc-900/70"
            aria-hidden="true"
          >
            <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            defaultValue=""
            aria-label="Search"
            className="w-full bg-transparent text-sm font-semibold tracking-wide text-zinc-900/90 outline-none placeholder:text-zinc-900/60"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          />
        </div>
      </div>
    </div>
  )

  const rootClassName =
    'min-h-dvh bg-cover bg-center bg-no-repeat overflow-x-hidden ' +
    (noScroll ? 'overflow-y-hidden' : 'overflow-y-auto')

  return (
    <div
      className={rootClassName}
      style={{ backgroundImage: `url(${bgPink})` }}
    >
      <header className="relative w-full min-h-16 sm:h-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${headerUngu})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden="true"
        />

        <div className="relative flex w-full items-center px-4 py-3 sm:h-full sm:py-0 sm:px-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="min-w-0 flex-1">{headerContent ?? defaultHeaderContent}</div>

            <nav className="flex w-full items-center justify-center sm:w-auto sm:justify-end" aria-label="Primary">
              <div className="mx-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-searchbar p-1 ring-1 ring-black/15 sm:mx-0">
                {links.map((link) => {
                  const isActive = location.pathname === link.to
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      aria-current={isActive ? 'page' : undefined}
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                      className={
                        'whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold tracking-wide text-zinc-900/90 transition-colors sm:px-4 ' +
                        (isActive ? 'bg-black/10' : 'hover:bg-black/5')
                      }
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {headerRightContent ? <div className="shrink-0">{headerRightContent}</div> : null}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 animate-page sm:px-6 sm:py-12">
        {title ? (
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 animate-fade-in-up">
            {title}
          </h1>
        ) : null}

        {children ? <div className={title ? 'mt-6' : ''}>{children}</div> : null}
      </div>
    </div>
  )
}
