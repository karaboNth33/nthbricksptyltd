import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mojwnzva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", product: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8 AM - 5 PM" },
    { day: "Saturday", hours: "8 AM - 1 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to start your project? Get in touch with us today for a quote or any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+266 1234 5678"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => setFormData({ ...formData, product: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stock">Stock Bricks</SelectItem>
                          <SelectItem value="blocks">Concrete Blocks (6", 9", 4.5")</SelectItem>
                          <SelectItem value="ublocks">U-Blocks</SelectItem>
                          <SelectItem value="paving">Paving Bricks</SelectItem>
                          <SelectItem value="sand">Sand (Rough/Fine)</SelectItem>
                          <SelectItem value="multiple">Multiple Products</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project and requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Call to Action */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Call Us Directly</h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Prefer to speak with someone? Give us a call during business hours.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="tel:27002907" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      2700 2907
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Our Location</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Kofi, Koffi Annan Rd, Maseru
                  </p>
                  <div className="rounded-lg overflow-hidden h-48">
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

              {/* Business Hours */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
                  </div>
                  <ul className="space-y-2">
                    {businessHours.map((item) => (
                      <li key={item.day} className="flex justify-between">
                        <span className="text-foreground">{item.day}</span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
