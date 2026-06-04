import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Resort Landscaping",
    description:
      "Complete design and execution of luxury resort landscapes including pathways, greenery, water features, and eco-zones.",
    points: [
      "Site Planning & Concept Design",
      "Garden & Lawn Development",
      "Water Features & Lighting",
      "Maintenance Planning",
    ],
  },
  {
    title: "Villa Landscaping",
    description:
      "Premium villa garden design focused on aesthetics, privacy, and long-term sustainability.",
    points: [
      "Private Garden Design",
      "Terrace Gardens",
      "Outdoor Seating Areas",
      "Plant Selection & Installation",
    ],
  },
  {
    title: "Commercial Landscaping",
    description:
      "Corporate campuses, hotels, and commercial spaces designed for visual impact and low maintenance.",
    points: [
      "Corporate Green Zones",
      "Entrance Landscaping",
      "Low Maintenance Design",
      "Large Scale Execution",
    ],
  },
  {
    title: "Horticulture Services",
    description:
      "Expert plant selection, soil management, and long-term growth planning for all types of environments.",
    points: [
      "Soil Analysis",
      "Plant Health Management",
      "Seasonal Planning",
      "Sustainable Growth Strategy",
    ],
  },
  {
    title: "Plant Gifting Solutions",
    description:
      "Premium plant gifting for weddings, corporate events, and special occasions.",
    points: [
      "Custom Gift Packaging",
      "Event Bulk Orders",
      "Corporate Branding",
      "Eco-Friendly Gifts",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28">

      {/* HEADER */}
      <section className="bg-primary text-white py-20 text-center">

        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Our Services
        </h1>

        <p className="text-gray-200 mt-6 max-w-3xl mx-auto">
          Premium landscaping and horticulture solutions designed to transform spaces into living experiences.
        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-light">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <h2 className="text-2xl font-bold text-primary mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-6 leading-7">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">

                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-green-600" />
                    {point}
                  </li>
                ))}

              </ul>

              {/* CTA BUTTON */}
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                Request Quote
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="bg-primary text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Need a Custom Landscaping Plan?
        </h2>

        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          We design tailored solutions based on your land, budget, and vision.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default Services;