const testimonials = [
  { name: 'Alex Johnson', text: 'This AI platform improved our workflow dramatically.' },
  { name: 'Sarah Miller', text: 'A beautiful and powerful SaaS experience.' },
  { name: 'David Lee', text: 'The dashboard makes managing AI tasks simple.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-2xl border p-6 shadow-sm">
            <p className="mb-4">{item.text}</p>
            <strong>{item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
