import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-primary text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[3px] text-accent text-sm">
          Let's Build Something Beautiful
        </span>

        <h2
          className="text-4xl lg:text-6xl font-bold mt-6 mb-8"
          style={{ fontFamily: "Playfair Display" }}
        >
          Ready to Transform Your Outdoor Space?
        </h2>

        <p className="text-gray-200 max-w-3xl mx-auto leading-8 mb-10">
          Whether it's a resort, villa, commercial property,
          home garden or plant gifting requirement,
          UrbanKrushika is ready to bring your vision to life.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* CALL NOW */}
          <a href="tel:+919876543210">
            <button className="bg-accent text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition">
              Call Now
            </button>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              WhatsApp Us
            </button>
          </a>

          {/* SITE VISIT */}
          <button
            onClick={() => navigate("/contact")}
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Request Site Visit
          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;