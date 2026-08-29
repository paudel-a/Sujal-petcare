function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
        alt="Himalayan mountains"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center text-white">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em]">
          Natural Himalayan Dog Chew
        </p>

        <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
          Pure Himalayan
          <span className="block">Chew</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
          Crafted from the heart of the Himalayas, our natural dog chews combine
          traditional craftsmanship with quality ingredients.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-green-900 transition hover:bg-gray-100"
          >
            Explore Products
          </a>

          <a
            href="#about"
            className="rounded-full border border-white px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-green-900"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
