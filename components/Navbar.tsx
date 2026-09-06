export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="text-xl font-bold">NexaAI</div>
      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#dashboard">Dashboard</a>
      </div>
      <button className="rounded-full bg-white px-5 py-2 text-black font-medium">
        Get Started
      </button>
    </nav>
  );
}
