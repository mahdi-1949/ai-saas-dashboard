export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>
        <input className="w-full mb-4 rounded-lg bg-white/10 p-3" placeholder="Email" />
        <input className="w-full mb-6 rounded-lg bg-white/10 p-3" placeholder="Password" type="password" />
        <button className="w-full rounded-lg bg-blue-500 p-3 font-semibold">Login</button>
      </div>
    </main>
  )
}
