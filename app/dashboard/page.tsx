import Sidebar from '../../components/Sidebar';
import StatsCards from '../../components/StatsCards';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />
      <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold">AI Dashboard</h1>
        <p className="mt-2 text-slate-400">Monitor your AI workspace performance.</p>
        <StatsCards />
      </section>
    </main>
  );
}
