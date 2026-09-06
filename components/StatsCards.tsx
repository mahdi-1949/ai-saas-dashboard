const stats = [
  { title: 'AI Requests', value: '24.8K' },
  { title: 'Generated Content', value: '8,420' },
  { title: 'Active Users', value: '12.5K' },
];

export default function StatsCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {stats.map((item) => (
        <div key={item.title} className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
          <p className="text-slate-400">{item.title}</p>
          <h3 className="text-3xl font-bold mt-3">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}
