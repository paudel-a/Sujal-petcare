import dogjump from "../assets/dogjump.jpg";
function About() {
  return (
    <section id="about" className="bg-stone-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src={dogjump}
            alt="Happy dog"
            className="h-[400px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            About Us
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            A Taste of the
            <span className="block text-green-900">Himalayas</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            At Sujal Petcare, we bring the natural goodness and traditional
            craftsmanship of the Himalayas to dogs around the world.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Our Himalayan dog chews are carefully crafted using quality
            ingredients and traditional techniques to create a natural,
            long-lasting treat your dog can enjoy.
          </p>

          <a
            href="#benefits"
            className="mt-8 inline-block rounded-full bg-green-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Discover Our Benefits
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
