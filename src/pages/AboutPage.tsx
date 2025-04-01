
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <div className="aspect-[21/9] w-full">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
              alt="RPP Relax Furnitures Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 to-brown-800/30"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  About RPP Relax Furnitures
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Crafting comfort and elegance for modern living spaces since 2005.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-800 mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-brown-600">
              <p>
                Founded in 2005, RPP Relax Furnitures began as a small family-owned workshop 
                with a passion for crafting high-quality furniture that combines comfort, 
                durability, and elegant design.
              </p>
              <p>
                What started as a modest operation with just three skilled craftsmen has grown 
                into one of the region's most respected furniture manufacturers, known for our 
                attention to detail, use of premium materials, and commitment to customer satisfaction.
              </p>
              <p>
                Today, RPP Relax Furnitures continues to uphold its founding principles while 
                embracing modern design trends and manufacturing techniques. Our extensive catalog 
                spans from classic designs that stand the test of time to contemporary pieces that 
                reflect current lifestyle needs.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581541234264-28d91f3b6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="RPP Relax Furnitures Workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Our Mission and Values */}
        <div className="bg-cream rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-brown-700 mb-8">
              At RPP Relax Furnitures, we're committed to creating furniture that enhances 
              the quality of life for our customers, while upholding responsible 
              business practices and environmental stewardship.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-medium text-brown-800 mb-3">Quality</h3>
                <p className="text-brown-600">
                  We never compromise on materials or craftsmanship, ensuring that every piece 
                  we create meets our exacting standards and will stand the test of time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-medium text-brown-800 mb-3">Innovation</h3>
                <p className="text-brown-600">
                  We continuously explore new designs, materials, and techniques to create 
                  furniture that meets the evolving needs of modern living.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-medium text-brown-800 mb-3">Sustainability</h3>
                <p className="text-brown-600">
                  We're committed to responsible sourcing and production methods that minimize 
                  environmental impact and promote sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Process */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-800 text-center mb-10">
            Our Furniture Making Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">1</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Design</h3>
              <p className="text-brown-600">
                Our designers create concepts that blend aesthetics with functionality, 
                ensuring each piece serves its purpose beautifully.
              </p>
            </div>
            
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">2</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Material Selection</h3>
              <p className="text-brown-600">
                We carefully source the finest woods, fabrics, and other materials to ensure 
                quality, durability, and sustainability.
              </p>
            </div>
            
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">3</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Craftsmanship</h3>
              <p className="text-brown-600">
                Our skilled artisans combine traditional woodworking techniques with modern 
                precision to create pieces of exceptional quality.
              </p>
            </div>
            
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">4</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Quality Assurance</h3>
              <p className="text-brown-600">
                Every piece undergoes rigorous inspection to ensure it meets our high standards 
                before reaching our customers.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-800 text-center mb-10">
            Meet Our Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 max-w-[200px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Ravi Prakash - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-brown-800">Ravi Prakash</h3>
              <p className="text-brown-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 max-w-[200px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Priya Sharma - Head of Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-brown-800">Priya Sharma</h3>
              <p className="text-brown-600">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 max-w-[200px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Vijay Kumar - Production Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-brown-800">Vijay Kumar</h3>
              <p className="text-brown-600">Production Manager</p>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="bg-brown-800 text-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4 text-brown-100">
                <p>
                  We'd love to hear from you whether you have questions about our products, 
                  need design advice, or want to discuss custom furniture options.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-xl font-medium mb-3">Visit Our Showroom</h3>
                  <p>140 P&C Tower, Perundurai Road</p>
                  <p>Erode 638011, Tamil Nadu, India</p>
                </div>
                
                <div className="pt-2">
                  <h3 className="text-xl font-medium mb-3">Contact Information</h3>
                  <p>Phone: 98429 16999, 98428 99311</p>
                  <p>Email: rpprelax@gmail.com</p>
                </div>
                
                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-white text-brown-800 hover:bg-cream"
                  >
                    <Link to="/inquiry">Send Us a Message</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-brown-700 p-8 md:p-0">
              <img
                src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="RPP Relax Furnitures Showroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
