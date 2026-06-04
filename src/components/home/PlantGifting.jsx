import { useNavigate } from "react-router-dom";

const PlantGifting = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-primary text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div>

            <span className="uppercase tracking-[3px] text-accent text-sm">
              Plant Gifting Solutions
            </span>

            <h2
              className="text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              Gifts That Grow With Time
            </h2>

            <p className="text-gray-200 leading-8 mb-8">
              Make every occasion memorable with eco-friendly plant gifts.
              Customized gifting solutions for weddings, corporate events,
              housewarming ceremonies and celebrations of every scale.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-100">

              <div>✓ Wedding Return Gifts</div>
              <div>✓ Corporate Gifting</div>
              <div>✓ Housewarming Events</div>
              <div>✓ Festival Gifts</div>
              <div>✓ Custom Branding</div>
              <div>✓ Bulk Orders</div>

            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="mt-8 bg-accent text-black px-8 py-4 rounded-full font-medium hover:bg-yellow-400 transition"
            >
              Request Package
            </button>

          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
              alt="Plant Gifting"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default PlantGifting;