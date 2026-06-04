import processSteps from "../../data/process";

const ProcessSection = () => {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-[3px] text-sm">
            Our Process
          </span>

          <h2
            className="text-4xl lg:text-5xl font-bold mt-4 text-primary"
            style={{ fontFamily: "Playfair Display" }}
          >
            From Vision to Reality
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-6 shadow-md text-center"
            >
              <div className="text-5xl font-bold text-accent mb-4">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold text-primary mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;