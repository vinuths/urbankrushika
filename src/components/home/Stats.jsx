const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "50K+",
    label: "Plants Delivered",
  },
  {
    number: "100+",
    label: "Commercial Projects",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h2
                className="text-5xl font-bold text-green-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;