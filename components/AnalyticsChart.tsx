const data = [72, 88, 65, 94, 82, 100];

export default function AnalyticsChart() {
  return (
    <section className="rounded-2xl border p-6">
      <h2 className="text-xl font-semibold mb-6">AI Usage Analytics</h2>
      <div className="flex items-end gap-3 h-40">
        {data.map((item, index) => (
          <div key={index} className="flex-1 rounded-t-lg bg-black/70" style={{height: `${item}%`}} />
        ))}
      </div>
    </section>
  );
}
