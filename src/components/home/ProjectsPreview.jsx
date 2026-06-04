import projects from "../../data/projects";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-light">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
            Our Work
          </span>

          <h2
            className="text-4xl lg:text-6xl font-bold mt-4 text-primary"
            style={{ fontFamily: "Playfair Display" }}
          >
            Landscapes We’ve Crafted
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-6 leading-8">
            A glimpse into our premium landscaping, resort development
            and horticulture projects across Karnataka.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate("/projects")}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg bg-white"
            >

              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">

                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <MapPin size={14} />
                    {project.location}
                  </div>

                </div>

              </div>

              {/* Hover CTA */}
              <div
                className="
                  absolute inset-0 bg-black/60
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition
                "
              >
                <button
                  onClick={() => navigate("/projects")}
                  className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold"
                >
                  View Projects
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectsPreview;