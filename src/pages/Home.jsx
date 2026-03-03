import PageShell from '../components/PageShell.jsx'

export default function Home() {
  return (
    <PageShell title={null} noScroll searchText="Beranda - Gita Roito Dian Tumanggor">
      <div className="flex min-h-[calc(100dvh-10rem)] flex-col items-center justify-center text-center sm:min-h-[calc(100dvh-11rem)]">
        <h1
          className="select-none text-zinc-900 animate-fade-in-up"
          style={{
            fontFamily: '"Great Vibes", cursive',
            lineHeight: 1.15,
            textShadow:
              "6px 6px 0 rgba(0,0,0,0.35), 12px 12px 0 rgba(0,0,0,0.18)",
          }}
        >
          <span className="block text-[clamp(5rem,12vw,8rem)] animate-float-slow">
            Portofolio
          </span>
          <span className="mt-4 block text-[clamp(6rem,14vw,9rem)] animate-float-slow-delay">
            Kreatif
          </span>
        </h1>

        <div
          className="mt-14 w-full max-w-3xl flex flex-col items-center text-center"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <p className="text-sm font-medium text-zinc-900 sm:text-base">
            Dipersembahkan Oleh
          </p>
          <div className="mt-2 flex items-center justify-center rounded-full border-2 border-black/50 bg-transparent px-5 py-2">
            <span className="text-lg font-extrabold text-zinc-900 sm:text-xl">
              Gita Roito Dian Tumanggor
            </span>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
