
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const categories = [
  {
    name: "Bedroom",
    description: "Beds, Wardrobes, Nightstands, Dressers",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/products?category=bedroom"
  },
  {
    name: "Dining",
    description: "Dining Tables, Chairs, Sideboards",
    image: "https://images.unsplash.com/photo-1595514535519-e3140a9f9d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/products?category=dining"
  },
  {
    name: "Office",
    description: "Desks, Office Chairs, Cabinets",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/products?category=office"
  },
  {
    name: "Living",
    description: "Sofas, Recliners, Coffee Tables, TV Units",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/products?category=living"
  }
];

const trendingItems = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Living",
  },
  {
    id: 2,
    name: "Executive Office Chair",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Office",
  },
  {
    id: 3,
    name: "King Size Platform Bed",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bedroom",
  },
  {
    id: 4,
    name: "Glass Dining Table",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Dining",
  },
  {
    id: 5,
    name: "Minimalist Coffee Table",
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8884972e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Living",
  },
  {
    id: 6,
    name: "Wooden Wardrobe",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bedroom",
  },
];

const featured = [
  {
    id: 1,
    name: "Luxury Living Room Set",
    description: "Complete your living room with our premium sofa set, designed for both comfort and style.",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    name: "Premium Bedroom Collection",
    description: "Transform your bedroom into a sanctuary with our coordinated bedroom furniture collection.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    name: "Executive Office Suite",
    description: "Elevate your work space with our professional office furniture solutions.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
  }
];

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Exceptional Furniture for Exceptional Homes
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover our collection of premium furniture designed for comfort, elegance, and durability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-brown-600 hover:bg-brown-700 text-white"
              >
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/inquiry">Make an Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brown-800 mb-4">Shop by Category</h2>
            <p className="text-brown-600 max-w-2xl mx-auto">
              Explore our wide range of furniture categories to find the perfect pieces for your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={category.link}
                className="group block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif font-medium text-brown-800 group-hover:text-brown-600">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-brown-500">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brown-800 mb-4">Trending Pieces</h2>
            <p className="text-brown-600 max-w-2xl mx-auto">
              Our most popular furniture selections that showcase the best in design and comfort.
            </p>
          </div>
          
          <div className="product-grid">
            {trendingItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group border-brown-100 hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-brown-800">{item.name}</h3>
                    <p className="text-sm text-brown-500">{item.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              variant="outline" 
              className="border-brown-600 text-brown-700 hover:bg-brown-50"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Collections */}
      <section className="py-16 bg-brown-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brown-800 mb-4">Featured Collections</h2>
            <p className="text-brown-600 max-w-2xl mx-auto">
              Curated sets of furniture to completely transform your space.
            </p>
          </div>
          
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {featured.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-serif font-bold text-brown-800 mb-2">{item.name}</h3>
                        <p className="text-brown-600 mb-4">{item.description}</p>
                        <Button asChild className="bg-brown-600 hover:bg-brown-700 text-white">
                          <Link to="/products">Explore Collection</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-brown-200 text-brown-700" />
            <CarouselNext className="bg-white border-brown-200 text-brown-700" />
          </Carousel>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-brown-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-brown-100">
            Browse our catalog to find the perfect furniture pieces or contact us for personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-brown-800 hover:bg-cream"
            >
              <Link to="/products">View Catalog</Link>
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
      </section>
    </div>
  );
};

export default HomePage;
