import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

function Benefits() {
  return (
    <section id="benefits" className="bg-stone-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-800">
            Our Benefits
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Good for Your Dog
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Thoughtfully crafted Himalayan chews that combine tradition,
            quality, and a great chewing experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
