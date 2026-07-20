type Props = {
  children: React.ReactNode;
};

export default function GradientButton({ children }: Props) {
  return (
    <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] active:scale-95">
      {children}
    </button>
  );
}
