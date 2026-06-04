import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              UrbanKrushika
            </h3>

            <p className="text-gray-400 leading-7">
              Premium landscaping, horticulture and plant gifting
              solutions for homes, resorts and businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-400">

              <li>
                <button onClick={() => navigate("/")}>Home</button>
              </li>

              <li>
                <button onClick={() => navigate("/about")}>About</button>
              </li>

              <li>
                <button onClick={() => navigate("/services")}>Services</button>
              </li>

              <li>
                <button onClick={() => navigate("/projects")}>Projects</button>
              </li>

            </ul>
          </div>

         {/* SERVICES */}
<div>
  <h4 className="font-semibold mb-4">Services</h4>

  <ul className="space-y-2 text-gray-400">

    <li>
      <button
        onClick={() => navigate("/services")}
        className="hover:text-white transition"
      >
        Landscaping
      </button>
    </li>

    <li>
      <button
        onClick={() => navigate("/services")}
        className="hover:text-white transition"
      >
        Horticulture
      </button>
    </li>

    <li>
      <button
        onClick={() => navigate("/services")}
        className="hover:text-white transition"
      >
        Plant Gifting
      </button>
    </li>

    <li>
      <button
        onClick={() => navigate("/services")}
        className="hover:text-white transition"
      >
        Maintenance
      </button>
    </li>

  </ul>
</div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-gray-400">

              <li>Chikkamagaluru</li>
              <li>Bengaluru</li>

              <li>
                <a
                  href="mailto:info@urbankrushika.com"
                  className="hover:text-white transition"
                >
                  info@urbankrushika.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition"
                >
                  +91 9538969830
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">

          © 2026 UrbanKrushika. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;