import { Link } from "react-router-dom";
import { CheckCircle, Truck, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import stockBricks from "@/assets/stock-bricks.webp";
import blocks6inch from "@/assets/blocks-6inch-1.jpg";
import pavingBricks from "@/assets/paving-bricks.jpg";

const Index = () => {
  const products = [
    {
      name: "Stock Bricks",
      description: "High-quality stock bricks manufactured with strict quality control. Perfect for residential and commercial construction.",
      image: stockBricks,
    },
    {
      name: "Concrete Blocks",
      description: "Durable concrete blocks available in 6\", 9\" and 4.5\" sizes. Ideal for structural walls and foundations.",
      image: blocks6inch,
    },
    {
      name: "Paving Bricks",
      description: "Beautiful interlocking paving bricks for outdoor surfaces, driveways, and walkways. Built to withstand heavy traffic.",
      image: pavingBricks,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Control",
      description: "Every brick is manufactured using carefully selected materials and strict quality control processes.",
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "We are committed to delivering your orders on time, every time. Reliable service you can count on.",
    },
    {
      icon: CheckCircle,
      title: "Trusted by Builders",
      description: "Builders, contractors, and developers trust us for dependable products that form solid foundations.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Foundations You Can Trust
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We are a reliable brick manufacturing company specializing in high-quality, 
              durable bricks for residential, commercial, and industrial construction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About NTH Bricks
              </h2>
              <p className="text-muted-foreground mb-4">
                Our bricks are manufactured using carefully selected materials and strict quality 
                control to ensure strength, consistency, and long-lasting performance.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to meeting customer specifications, delivering on time, and 
                supporting builders, contractors, and developers with dependable products they can trust.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={stockBricks} 
                alt="NTH Bricks facility" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether for small projects or large-scale developments, we provide bricks and blocks 
              that form a solid foundation for lasting structures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/products">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose NTH Bricks?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your brick needs. We're here to help you build with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:27002907" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 2700 2907
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
