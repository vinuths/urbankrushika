import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[3px] text-sm">
            Testimonials
          </span>

          <h2
            className="text-4xl lg:text-5xl font-bold mt-4 text-primary"
            style={{ fontFamily: "Playfair Display" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-light rounded-3xl p-8 shadow-md"
            >
              <p className="text-gray-600 leading-8 mb-6">
                "{item.review}"
              </p>

              <h3 className="font-semibold text-primary">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;