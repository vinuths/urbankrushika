import whyChooseUs from "../../data/whyChooseUs";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[3px] text-sm">
            Why Choose Us
          </span>

          <h2
            className="text-4xl lg:text-5xl font-bold mt-4 text-primary"
            style={{ fontFamily: "Playfair Display" }}
          >
            Excellence Rooted in Nature
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;