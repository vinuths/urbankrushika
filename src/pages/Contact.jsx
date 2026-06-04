import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `Hi UrbanKrushika,%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <div className="pt-28">

      {/* HEADER */}
      <section className="bg-primary text-white py-20 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Contact Us
        </h1>

        <p className="text-gray-200 mt-6 max-w-3xl mx-auto">
          Let’s discuss your landscaping vision and turn it into reality.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold text-primary mb-6">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 mb-4 border rounded-xl"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-4 mb-4 border rounded-xl"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 mb-6 border rounded-xl"
              onChange={handleChange}
            />

            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#D4AF37] text-black py-4 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>

          </div>

          {/* INFO */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Phone className="text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@urbankrushika.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  Chikkamagaluru / Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-primary text-white p-8 rounded-3xl mt-10">
              <h3 className="text-xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>

              <button
                onClick={() =>
                  window.open("https://wa.me/919538969830", "_blank")
                }
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold"
              >
                Chat on WhatsApp
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;