function ProductCard({ name, size, description, image }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-900">
          {size}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>

        <p className="mt-3 leading-7 text-gray-600">{description}</p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center font-semibold text-green-900 transition hover:text-green-700"
        >
          Enquire Now
          <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
