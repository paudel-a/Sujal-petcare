import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <section id="products" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            Our Products
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Crafted from the Himalayas
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Discover our range of naturally crafted Himalayan dog chews, made
            with care and inspired by generations of tradition.
          </p>
        </div>

        {/* Products */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              size={product.size}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
