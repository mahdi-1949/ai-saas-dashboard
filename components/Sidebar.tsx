export default function Sidebar() {
  const items = ['Dashboard', 'AI Chat', 'Analytics', 'Projects', 'Settings'];

  return (
    <aside className="w-64 min-h-screen border-r border-slate-800 p-6">
      <h2 className="text-xl font-bold mb-8">NexaAI</h2>
      <nav className="space-y-4">
        {items.map((item) => (
          <div key={item} className="text-slate-300 hover:text-white cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
