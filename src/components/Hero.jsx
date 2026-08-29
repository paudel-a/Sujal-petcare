import heroImage from "../assets/mountain.jpg";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Himalayan mountains"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center text-white">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm">
          Natural Himalayan Dog Chews
        </p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          Pure Himalayan
          <span className="mt-2 block">Chew</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
          Traditional Himalayan craftsmanship transformed into a natural,
          long-lasting treat for your best friend.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-green-950 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-100"
          >
            Explore Products
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/80 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-green-950"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
