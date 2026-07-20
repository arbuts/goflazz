import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 text-white font-bold">
            G
          </div>

          <div>
            <h1 className="text-xl font-bold">GoFlazz</h1>
          </div>

          <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            ALPHA
          </span>
        </div>

        <button className="rounded-xl border p-2 transition hover:bg-slate-100">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
}
