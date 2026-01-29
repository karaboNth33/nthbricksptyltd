import { Clock, MapPin, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import bricks2 from "@/assets/bricks-2.webp";

const About = () => {
  const businessHours = [
    { day: "Monday", hours: "8 AM - 5 PM" },
    { day: "Tuesday", hours: "8 AM - 5 PM" },
    { day: "Wednesday", hours: "8 AM - 5 PM" },
    { day: "Thursday", hours: "8 AM - 5 PM" },
    { day: "Friday", hours: "8 AM - 5 PM" },
    { day: "Saturday", hours: "8 AM - 1 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const values = [
    "High-quality, durable bricks",
    "Strict quality control processes",
    "On-time delivery guarantee",
    "Customer specification compliance",
    "Support for all project sizes",
    "Trusted by industry professionals",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NTH Bricks</h1>
            <p className="text-xl text-primary-foreground/90">
              Building excellence since our founding, we've become Maseru's trusted brick manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                NTH Bricks Pty Ltd is a reliable brick manufacturing company specializing in 
                high-quality, durable bricks for residential, commercial, and industrial construction.
              </p>
              <p className="text-muted-foreground mb-4">
                Our bricks are manufactured using carefully selected materials and strict quality 
                control to ensure strength, consistency, and long-lasting performance.
              </p>
              <p className="text-muted-foreground">
                We are committed to meeting customer specifications, delivering on time, and 
                supporting builders, contractors, and developers with dependable products they can trust.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={bricks2} 
                alt="Concrete blocks" 
                className="rounded-lg shadow-lg h-64 w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Commitment to Quality
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <span className="text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  {businessHours.map((item) => (
                    <li key={item.day} className="flex justify-between pb-2 border-b border-border last:border-0">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Our Location</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Kofi, Koffi Annan Rd, Maseru
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:27002907" className="text-primary hover:underline font-semibold">
                    2700 2907
                  </a>
                </div>
                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    title="NTH Bricks Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5!2d27.4833!3d-29.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSkZNQytHNCBNYXNlcnU!5e0!3m2!1sen!2sls!4v1706545200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
