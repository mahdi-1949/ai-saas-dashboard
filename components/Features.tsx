const features = [
  'AI powered automation',
  'Advanced analytics dashboard',
  'Real time insights',
  'Secure workspace management',
];

export default function Features() {
  return (
    <section id="features" className="grid gap-6 px-8 py-20 md:grid-cols-4">
      {features.map((feature) => (
        <div key={feature} className="rounded-2xl border border-white/10 p-6">
          <h3 className="font-semibold">{feature}</h3>
          <p className="mt-3 text-sm text-gray-400">
            Powerful tools built for modern teams.
          </p>
        </div>
      ))}
    </section>
  );
}
