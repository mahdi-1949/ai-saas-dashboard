export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
          AI Powered SaaS Platform
        </span>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Build smarter products with artificial intelligence
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          A modern AI workspace designed for teams to create, analyze and automate workflows faster.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
            Get Started
          </button>
          <button className="rounded-xl border border-slate-700 px-6 py-3">
            View Demo
          </button>
        </div>
      </section>
    </main>
  );
}
