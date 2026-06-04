// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <h1
//               className="text-3xl font-bold text-green-900"
//               style={{ fontFamily: "Playfair Display" }}
//             >
//               UrbanKrushika
//             </h1>
//           </Link>

//           {/* Menu */}
//           <nav className="hidden md:flex items-center gap-8">
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/services">Services</Link>
//             <Link to="/projects">Projects</Link>
//             <Link to="/gallery">Gallery</Link>
//             <Link to="/contact">Contact</Link>
//           </nav>

//           {/* CTA */}
//           <button className="hidden md:block bg-green-900 text-white px-5 py-2 rounded-full">
//             Get Quote
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isHome
          ? scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
          : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-3xl font-bold transition ${
                isHome && !scrolled ? "text-white" : "text-primary"
              }`}
              style={{ fontFamily: "Playfair Display" }}
            >
              UrbanKrushika
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  font-medium transition
                  ${
                    isActive
                      ? "text-[#D4AF37]"
                      : isHome && !scrolled
                      ? "text-white hover:text-[#D4AF37]"
                      : "text-gray-700 hover:text-primary"
                  }
                `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:block bg-[#D4AF37] hover:bg-[#c29d2e] text-black px-6 py-3 rounded-full font-semibold transition"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${
              isHome && !scrolled ? "text-white" : "text-black"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="flex flex-col p-6 space-y-5">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 font-medium text-lg"
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE CTA FIX */}
            <button
              onClick={() => {
                setMobileOpen(false);
                navigate("/contact");
              }}
              className="bg-primary text-white py-3 rounded-full mt-4"
            >
              Get Quote
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;