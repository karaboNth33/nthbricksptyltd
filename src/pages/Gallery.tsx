import { useState } from "react";
import Layout from "@/components/Layout";
import stockBricks from "@/assets/stock-bricks.webp";
import blocks6inch1 from "@/assets/blocks-6inch-1.jpg";
import blocks6inch2 from "@/assets/blocks-6inch-2.jpg";
import stockAndUblocks from "@/assets/stock-and-ublocks.jpg";
import pavingBricks from "@/assets/paving-bricks.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: stockBricks, alt: "Stock bricks - quality stacked bricks", category: "Stock Bricks" },
    { src: blocks6inch1, alt: "6 inch concrete blocks", category: "Concrete Blocks" },
    { src: blocks6inch2, alt: "Concrete blocks production", category: "Concrete Blocks" },
    { src: stockAndUblocks, alt: "Stock bricks and U-blocks display", category: "Products" },
    { src: pavingBricks, alt: "Interlocking paving bricks", category: "Paving Bricks" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our brick and block products. Quality you can see.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <span className="text-sm font-medium bg-primary-foreground/20 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                    <p className="mt-2 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
