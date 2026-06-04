import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-28">

      {/* HEADER */}
      <section className="bg-primary text-white py-20 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Gallery
        </h1>

        <p className="text-gray-200 mt-6 max-w-3xl mx-auto">
          A visual collection of our landscaping, horticulture, and resort transformation projects.
        </p>
      </section>

      {/* GRID */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-4xl max-h-[80vh] rounded-xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
};

export default Gallery;