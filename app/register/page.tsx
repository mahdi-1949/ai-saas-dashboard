export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>
        <div className="space-y-4">
          <input className="w-full rounded-lg border p-3" placeholder="Name" />
          <input className="w-full rounded-lg border p-3" placeholder="Email" />
          <input className="w-full rounded-lg border p-3" placeholder="Password" type="password" />
          <button className="w-full rounded-lg bg-black text-white p-3">Sign Up</button>
        </div>
      </div>
    </main>
  );
}
