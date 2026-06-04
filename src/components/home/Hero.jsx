import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-accent uppercase tracking-[4px] mb-4 text-sm">
              Landscaping • Horticulture • Plant Gifting
            </p>

            <h1
              className="text-white text-5xl md:text-7xl leading-tight font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Crafting Nature,
              <br />
              Creating Experiences
            </h1>

            <p className="text-gray-200 text-lg mt-8 max-w-2xl">
              Transforming resorts, villas, homes and commercial spaces
              into breathtaking green environments that leave a lasting impression.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* VIEW PROJECTS */}
              <button
                onClick={() => navigate("/projects")}
                className="bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full flex items-center gap-2 transition"
              >
                Explore Projects
                <ArrowRight size={18} />
              </button>

              {/* CONTACT */}
              <button
                onClick={() => navigate("/contact")}
                className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Get Consultation
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;