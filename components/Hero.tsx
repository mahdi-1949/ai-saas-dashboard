export default function Hero() {
  return (
    <section className="px-8 py-24 text-center">
      <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
        Build smarter products with AI powered workflows
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
        A modern SaaS platform designed to automate tasks, analyze data and
        improve productivity with artificial intelligence.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <button className="rounded-full bg-white px-7 py-3 text-black">
          Start Free
        </button>
        <button className="rounded-full border border-white/20 px-7 py-3">
          View Demo
        </button>
      </div>
    </section>
  );
}
