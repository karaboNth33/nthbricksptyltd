import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import stockBricks from "@/assets/stock-bricks.webp";
import blocks6inch from "@/assets/blocks-6inch-1.jpg";
import stockAndUblocks from "@/assets/stock-and-ublocks.jpg";
import pavingBricks from "@/assets/paving-bricks.jpg";
import sandCollection from "@/assets/sand-collection.jpg";

const Products = () => {
  const products = [
    {
      name: "Stock Bricks",
      description: "Our stock bricks are the backbone of quality construction. Manufactured using carefully selected materials and strict quality control processes, these bricks offer exceptional strength, consistency, and durability for all your building needs.",
      uses: [
        "Residential building walls",
        "Commercial construction",
        "Load-bearing walls",
        "Foundation work",
        "General construction projects",
      ],
      specifications: [
        "Dimensions: Standard stock brick sizes",
        "Material: High-quality concrete blend",
        "Strength: Tested for load-bearing capacity",
        "Finish: Smooth, uniform texture",
      ],
      image: stockBricks,
    },
    {
      name: "Concrete Blocks (6\", 9\" & 4.5\")",
      description: "Our concrete blocks are available in 6 inch, 9 inch, and 4.5 inch sizes to suit various construction needs. These hollow blocks are manufactured with precision for consistent dimensions and strength, making them ideal for structural applications.",
      uses: [
        "Structural walls",
        "Foundation construction",
        "Boundary walls",
        "Industrial buildings",
        "Retaining walls",
      ],
      specifications: [
        "Sizes: 6 inch, 9 inch, 4.5 inch available",
        "Material: High-strength concrete blend",
        "Type: Hollow blocks for efficient construction",
        "Finish: Consistent textured surface",
      ],
      image: blocks6inch,
    },
    {
      name: "U-Blocks",
      description: "U-Blocks are specialized blocks designed for creating bond beams and lintels in masonry construction. Their unique U-shape allows for easy placement of reinforcement and concrete, providing superior structural support.",
      uses: [
        "Bond beam construction",
        "Window and door lintels",
        "Structural reinforcement",
        "Top of wall finishes",
        "Ring beams",
      ],
      specifications: [
        "Design: Open U-shaped profile",
        "Material: High-strength concrete",
        "Purpose: Reinforcement and beam construction",
        "Compatibility: Works with standard block sizes",
      ],
      image: stockAndUblocks,
    },
    {
      name: "Paving Bricks",
      description: "Transform your outdoor spaces with our premium interlocking paving bricks. Designed to withstand heavy traffic and weather conditions, these bricks combine durability with aesthetic appeal for beautiful, long-lasting surfaces.",
      uses: [
        "Driveways and parking areas",
        "Garden pathways",
        "Patios and outdoor areas",
        "Commercial walkways",
        "Pool surrounds",
      ],
      specifications: [
        "Design: Interlocking pattern for stability",
        "Material: High-density concrete blend",
        "Strength: Heavy traffic rated",
        "Finish: Slip-resistant surface",
      ],
      image: pavingBricks,
    },
    {
      name: "Sand (Rough & Fine)",
      description: "We supply both rough (coarse) and fine sand for various construction applications. Our sand is carefully sourced and screened to ensure quality and consistency for mixing concrete, mortar, plastering, and more.",
      uses: [
        "Concrete mixing",
        "Mortar preparation",
        "Plastering and rendering",
        "Bricklaying",
        "Landscaping projects",
      ],
      specifications: [
        "Types: Rough (coarse) and Fine sand available",
        "Quality: Screened for consistency",
        "Application: Construction and landscaping",
        "Delivery: Bulk quantities available",
      ],
      image: sandCollection,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-primary-foreground/90">
              High-quality bricks, blocks, and construction materials for every building need. 
              From residential to industrial, we provide dependable products you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Common Uses</h4>
                          <ul className="space-y-2">
                            {product.uses.map((use, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                {use}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                          <ul className="space-y-2">
                            {product.specifications.map((spec, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button asChild>
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can accommodate custom orders and special requirements. 
            Contact us to discuss your specific construction needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
