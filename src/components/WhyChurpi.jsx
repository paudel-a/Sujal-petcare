import { Mountain, Leaf, Heart } from "lucide-react";

function WhyChurpi() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            Why Churpi?
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            The Great Himalayan Dog Chew
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Rooted in Himalayan tradition, Churpi is a natural cheese chew known
            for its firmness, nutritional value, and long-lasting enjoyment.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-stone-50 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Mountain size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Himalayan Heritage
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Inspired by traditional Himalayan cheesemaking techniques passed
              down through generations.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-50 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Leaf size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Natural Ingredients
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Made with carefully selected ingredients for a simple and natural
              treat.
            </p>
          </div>

          <div className="rounded-3xl bg-stone-50 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-900">
              <Heart size={26} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Made for Dogs
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Designed to provide dogs with an enjoyable and long-lasting
              chewing experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChurpi;
