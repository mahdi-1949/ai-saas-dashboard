export default function DashboardPreview() {
  return (
    <section className="py-24">
      <div className="rounded-3xl border bg-black/20 p-8">
        <div className="grid gap-6 md:grid-cols-4">
          {['Revenue','Users','Requests','Accuracy'].map((item) => (
            <div key={item} className="rounded-xl border p-5">
              <p className="text-sm text-gray-400">{item}</p>
              <p className="mt-3 text-3xl font-bold">+124%</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border p-8">
          <h3 className="text-xl font-bold">AI Workspace</h3>
          <p className="mt-3 text-gray-400">Generate insights, automate tasks and manage your AI workflows.</p>
        </div>
      </div>
    </section>
  );
}
