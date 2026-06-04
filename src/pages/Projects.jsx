import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Luxury Resort Landscaping",
    location: "Chikkamagaluru",
    category: "Resort",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    title: "Private Villa Garden",
    location: "Bengaluru",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    title: "Commercial Green Space",
    location: "Mysuru",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  {
    title: "Eco Resort Development",
    location: "Coorg",
    category: "Resort",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Terrace Garden Setup",
    location: "Bengaluru",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Hotel Entrance Landscape",
    location: "Mysuru",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28">

      {/* HEADER */}
      <section className="bg-primary text-white py-20 text-center">

        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Our Projects
        </h1>

        <p className="text-gray-200 mt-6 max-w-3xl mx-auto">
          A showcase of premium landscaping, horticulture, and resort development projects across Karnataka.
        </p>

      </section>

      {/* GRID */}
      <section className="py-24 bg-light">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-lg"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* BADGE */}
              <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full">
                {project.category}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>

              {/* HOVER CTA */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  View Case Study
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Want a Similar Landscape Project?
        </h2>

        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Let us design a premium outdoor experience for your property.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Get Free Consultation
        </button>

      </section>

    </div>
  );
};

export default Projects;