
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      toast.success("Your inquiry has been submitted successfully! We'll get back to you shortly.");
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again later.");
      console.error("Inquiry submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-brown-600">
            Have questions about our products or need assistance with your furniture needs?
            Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md border border-brown-100 p-6 md:p-8">
              <h2 className="text-2xl font-serif font-medium text-brown-800 mb-6">
                Send Us an Inquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brown-700">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-brown-200 focus:border-brown-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brown-700">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-brown-200 focus:border-brown-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-brown-700">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-brown-200 focus:border-brown-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brown-700">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="border-brown-200 focus:border-brown-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-brown-700">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] border-brown-200 focus:border-brown-300"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-brown-600 hover:bg-brown-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-brown-50 rounded-lg p-6 md:p-8 h-full">
              <h3 className="text-xl font-serif font-medium text-brown-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-brown-700 mb-2">Address</h4>
                  <p className="text-brown-600">
                    140 P&C Tower, Perundurai Road<br />
                    Erode 638011<br />
                    Tamil Nadu, India
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-brown-700 mb-2">Phone</h4>
                  <p className="text-brown-600">
                    <a href="tel:+919842916999" className="hover:text-brown-800">+91 98429 16999</a><br />
                    <a href="tel:+919842899311" className="hover:text-brown-800">+91 98428 99311</a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-brown-700 mb-2">Email</h4>
                  <p className="text-brown-600">
                    <a href="mailto:rpprelax@gmail.com" className="hover:text-brown-800">rpprelax@gmail.com</a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-brown-700 mb-2">Business Hours</h4>
                  <p className="text-brown-600">
                    Monday - Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brown-800 text-white rounded-lg p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Visit Our Showroom
            </h2>
            <p className="text-brown-100 mb-6">
              Experience our furniture collection in person by visiting our showroom.
              Our experts will guide you through our extensive range of products.
            </p>
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              {/* This would ideally be a Google Maps embed, but we're using a placeholder image */}
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Erode,TN,India&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY" 
                alt="Map location of RPP Relax Furnitures" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x400?text=Map+of+RPP+Relax+Furnitures";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
