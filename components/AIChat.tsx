export default function AIChat() {
  return (
    <section className="rounded-2xl border p-6 bg-white/5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">AI Assistant</h2>
        <p className="text-sm opacity-70">Generate ideas, analyze data and automate workflows.</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl bg-black/20 p-4">Hello! How can I help you today?</div>
        <div className="rounded-xl border p-4">Write a marketing strategy for my product.</div>
      </div>
      <div className="mt-6 flex gap-3">
        <input className="flex-1 rounded-xl border bg-transparent px-4 py-3" placeholder="Ask AI anything..." />
        <button className="rounded-xl px-5 py-3 bg-black text-white">Send</button>
      </div>
    </section>
  );
}
