import services from "../../data/services";
import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
            Our Expertise
          </span>

          <h2
            className="text-4xl lg:text-6xl font-bold mt-4 text-primary"
            style={{ fontFamily: "Playfair Display" }}
          >
            Nature Meets Luxury Design
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-6 leading-8">
            We design and build premium landscapes for resorts,
            villas, homes and commercial environments with a focus on sustainability and elegance.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate("/services")}
              className="
                group relative cursor-pointer overflow-hidden rounded-3xl
                border border-gray-100
                bg-gradient-to-b from-white to-green-50
                p-8
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Leaf className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-[#D4AF37] transition-all duration-500"></div>

              <p className="mt-4 text-sm text-[#D4AF37] opacity-0 group-hover:opacity-100 transition">
                Click to explore services →
              </p>

            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">

          <button
            onClick={() => navigate("/services")}
            className="bg-primary hover:bg-green-900 text-white px-10 py-4 rounded-full transition"
          >
            View All Services
          </button>

        </div>

      </div>

    </section>
  );
};

export default ServicesPreview;