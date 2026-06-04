import { useNavigate } from "react-router-dom";
import { Leaf, Target, Eye, Sparkles } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28">

      {/* HERO SECTION */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
            About UrbanKrushika
          </span>

          <h1
            className="text-4xl md:text-6xl font-bold mt-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Crafting Living Landscapes
          </h1>

          <p className="text-gray-200 mt-8 max-w-3xl mx-auto leading-8">
            We are a premium landscaping and horticulture company
            specializing in resort development, villa gardens,
            commercial landscapes, and plant gifting solutions
            across Karnataka.
          </p>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              UrbanKrushika was founded with a vision to bring nature
              back into modern living spaces. From luxury resorts in
              Chikkamagaluru to private villas and commercial spaces,
              we transform ordinary land into living masterpieces.
            </p>

            <p className="text-gray-600 leading-8">
              Every project we take is a blend of design, sustainability,
              and creativity — ensuring long-lasting beauty and ecological balance.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="landscape"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-light">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-primary mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <Leaf className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We design eco-friendly landscapes that thrive naturally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <Target className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Precision</h3>
              <p className="text-gray-600">
                Every plant, stone and layout is carefully planned.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md">
              <Sparkles className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Luxury Design</h3>
              <p className="text-gray-600">
                We create visually stunning, premium outdoor experiences.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <Eye className="mx-auto mb-6 text-[#D4AF37]" size={40} />

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Green & Timeless
          </h2>

          <p className="text-gray-200 mb-10 leading-8">
            From resorts to private gardens, we bring your outdoor vision to life
            with luxury landscaping solutions.
          </p>

          {/* CTA BUTTON FIXED */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Get in Touch
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;