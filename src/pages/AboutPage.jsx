
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
                We carefully select sustainable, high-quality materials that will ensure durability and comfort.
              </p>
            </div>
            
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">3</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Crafting</h3>
              <p className="text-brown-600">
                Our skilled artisans use both traditional techniques and modern technology to create each piece.
              </p>
            </div>
            
            <div className="bg-white border border-brown-100 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-brown-800">4</span>
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-2">Quality Control</h3>
              <p className="text-brown-600">
                Each piece undergoes rigorous testing to ensure it meets our standards before reaching your home.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brown-800 text-center mb-10">
            Our Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                  alt="RPP Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-1">Rajesh Patel</h3>
              <p className="text-brown-500 mb-3">Founder & CEO</p>
              <p className="text-brown-600 text-sm">
                With over 25 years of experience in furniture design and manufacturing, 
                Rajesh leads our company with passion and vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                  alt="RPP Design Head"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-1">Priya Sharma</h3>
              <p className="text-brown-500 mb-3">Head of Design</p>
              <p className="text-brown-600 text-sm">
                Priya brings her award-winning design expertise to create furniture 
                that perfectly balances form and function.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                  alt="RPP Operations Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-brown-800 mb-1">Vikram Reddy</h3>
              <p className="text-brown-500 mb-3">Operations Director</p>
              <p className="text-brown-600 text-sm">
                Vikram oversees our production processes, ensuring quality and efficiency 
                at every stage of manufacturing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-brown-800 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Ready to Experience Our Furniture?
          </h2>
          <p className="text-brown-100 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see and feel the quality of our furniture collections, 
            or contact us to discuss your custom furniture needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-brown-800 hover:bg-cream"
            >
              <Link to="/products">View Our Catalog</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/inquiry">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
