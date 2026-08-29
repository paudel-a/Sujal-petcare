function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-3xl bg-stone-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-900 transition group-hover:bg-green-900 group-hover:text-white">
        <Icon size={26} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
