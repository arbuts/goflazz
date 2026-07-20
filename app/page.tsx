import Container from "@/components/layout/Container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Container>
        <section className="py-20">
          <h1 className="text-6xl font-bold">
            GoFlazz
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            The Premium Apple-Quality Wallet for Arbitrum Micro-Payments.
          </p>
        </section>
      </Container>
    </main>
  );
}
