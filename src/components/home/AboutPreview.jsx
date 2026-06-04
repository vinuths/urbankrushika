import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-light">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
              alt="Landscape"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* CONTENT */}
          <div>

            <span className="text-accent uppercase tracking-[3px] text-sm">
              About UrbanKrushika
            </span>

            <h2
              className="text-4xl lg:text-5xl mt-4 mb-6 text-primary font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Creating Green Spaces That Inspire
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              UrbanKrushika specializes in premium landscaping,
              horticulture, plant gifting and garden development
              solutions for resorts, villas, homes and commercial properties.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our mission is to blend nature, creativity and sustainability
              to create breathtaking outdoor environments that leave lasting impressions.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => navigate("/about")}
              className="bg-primary hover:bg-green-900 text-white px-8 py-4 rounded-full transition"
            >
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;