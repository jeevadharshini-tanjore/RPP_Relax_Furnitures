
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  details: {
    items: string[];
    material: string;
    style: string;
    finish: string;
    features: string[];
    dimensions: {
      width: string;
      depth: string;
      height: string;
    };
  };
};

const products: Product[] = [
  {
    id: 1,
    name: "Elegance Leather Sofa",
    category: "Living",
    subcategory: "Sofas",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["1 Seater (PSBR 001A)", "3 Seater (PSBR 003A)"],
      material: "Treated wooden frame, Webbing, High-density PU Foam, Leatherette",
      style: "Modern",
      finish: "Leatherette",
      features: ["Ergonomically designed seating", "Comfortable backrest", "Classical touch"],
      dimensions: {
        width: "180 cm",
        depth: "85 cm",
        height: "90 cm",
      },
    },
  },
  {
    id: 2,
    name: "Executive Office Chair",
    category: "Office",
    subcategory: "Chairs",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Executive Chair (OFCH 002B)"],
      material: "Aluminum base, High-density foam, Premium leather upholstery",
      style: "Modern",
      finish: "Leather",
      features: ["Adjustable height", "Ergonomic design", "Swivel base", "Lumbar support"],
      dimensions: {
        width: "65 cm",
        depth: "70 cm",
        height: "110-120 cm",
      },
    },
  },
  {
    id: 3,
    name: "King Size Platform Bed",
    category: "Bedroom",
    subcategory: "Beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["King Size Bed (BDRM 003K)"],
      material: "Solid wood frame, Engineered wood panels, Fabric headboard",
      style: "Contemporary",
      finish: "Walnut veneer with fabric upholstery",
      features: ["Storage drawers", "Padded headboard", "Durable construction"],
      dimensions: {
        width: "190 cm",
        depth: "210 cm",
        height: "100 cm",
      },
    },
  },
  {
    id: 4,
    name: "Glass Dining Table",
    category: "Dining",
    subcategory: "Tables",
    image: "https://images.unsplash.com/photo-1595514535519-e3140a9f9d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Dining Table (DITR 004G)"],
      material: "Tempered glass, Stainless steel base",
      style: "Modern",
      finish: "Clear glass with polished steel",
      features: ["Heat-resistant surface", "Easy to clean", "Elegant design"],
      dimensions: {
        width: "160 cm",
        depth: "90 cm",
        height: "75 cm",
      },
    },
  },
  {
    id: 5,
    name: "Minimalist Coffee Table",
    category: "Living",
    subcategory: "Tables",
    image: "https://images.unsplash.com/photo-1608626597747-0d9b8884972e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Coffee Table (LVTR 005M)"],
      material: "Engineered wood, Metal legs",
      style: "Minimalist",
      finish: "Matte white with brass accents",
      features: ["Storage shelf", "Lightweight design", "Easy assembly"],
      dimensions: {
        width: "120 cm",
        depth: "60 cm",
        height: "45 cm",
      },
    },
  },
  {
    id: 6,
    name: "Wooden Wardrobe",
    category: "Bedroom",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["4-Door Wardrobe (BDST 006W)"],
      material: "Solid wood, Premium plywood, Brass hardware",
      style: "Traditional",
      finish: "Dark walnut stain",
      features: ["Multiple compartments", "Hanging rail", "Adjustable shelves", "Full-length mirror"],
      dimensions: {
        width: "200 cm",
        depth: "60 cm",
        height: "210 cm",
      },
    },
  },
  {
    id: 7,
    name: "Recliner Armchair",
    category: "Living",
    subcategory: "Chairs",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Recliner Chair (LVCH 007R)"],
      material: "Engineered wood frame, High-density foam, Premium fabric upholstery",
      style: "Contemporary",
      finish: "Textured fabric",
      features: ["Multiple reclining positions", "Padded armrests", "Footrest"],
      dimensions: {
        width: "85 cm",
        depth: "90-160 cm (reclined)",
        height: "105 cm",
      },
    },
  },
  {
    id: 8,
    name: "Dining Chair Set",
    category: "Dining",
    subcategory: "Chairs",
    image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Dining Chair (DICH 008S) - Set of 4"],
      material: "Solid wood frame, Fabric cushion",
      style: "Scandinavian",
      finish: "Natural oak with grey upholstery",
      features: ["Ergonomic design", "Durable construction", "Stain-resistant fabric"],
      dimensions: {
        width: "45 cm",
        depth: "55 cm",
        height: "85 cm",
      },
    },
  },
  {
    id: 9,
    name: "Office Desk",
    category: "Office",
    subcategory: "Desks",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Executive Desk (OFDS 009E)"],
      material: "Engineered wood, Metal framework",
      style: "Modern",
      finish: "Oak veneer with black metal",
      features: ["Cable management system", "Drawers with soft-close mechanism", "Spacious work surface"],
      dimensions: {
        width: "150 cm",
        depth: "70 cm",
        height: "75 cm",
      },
    },
  },
  {
    id: 10,
    name: "Bookshelf Unit",
    category: "Living",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Bookshelf (LVST 010B)"],
      material: "Engineered wood, Metal accents",
      style: "Industrial",
      finish: "Dark wood with black metal",
      features: ["Open shelving", "Adjustable shelves", "Sturdy construction"],
      dimensions: {
        width: "120 cm",
        depth: "40 cm",
        height: "180 cm",
      },
    },
  },
  {
    id: 11,
    name: "Nightstand",
    category: "Bedroom",
    subcategory: "Tables",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["Nightstand (BDTB 011N)"],
      material: "Solid wood, Premium plywood",
      style: "Mid-century modern",
      finish: "Walnut veneer",
      features: ["Two drawers", "Tapered legs", "Brass hardware"],
      dimensions: {
        width: "50 cm",
        depth: "45 cm",
        height: "60 cm",
      },
    },
  },
  {
    id: 12,
    name: "TV Unit",
    category: "Living",
    subcategory: "Storage",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: {
      items: ["TV Unit (LVST 012T)"],
      material: "Engineered wood, Glass shelves",
      style: "Contemporary",
      finish: "Matte white and oak",
      features: ["Cable management system", "Multiple storage compartments", "Open and closed storage"],
      dimensions: {
        width: "180 cm",
        depth: "45 cm",
        height: "55 cm",
      },
    },
  },
];

const categories = ["All", "Living", "Bedroom", "Dining", "Office"];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle URL parameters
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();
      if (categories.includes(formattedCategory)) {
        setSelectedCategory(formattedCategory);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    // Filter products based on category and search query
    let filtered = products;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) || 
        product.subcategory.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">
            Our Product Catalog
          </h1>
          <p className="text-brown-600">
            Browse our extensive collection of quality furniture designed for comfort, durability, and style. 
            Our catalog is constantly updated with new designs to suit every taste and need.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <Tabs 
            value={selectedCategory} 
            onValueChange={handleCategoryChange}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-brown-50 border border-brown-100">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-brown-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <form onSubmit={handleSearch} className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brown-400 h-4 w-4" />
            <Input 
              type="search"
              placeholder="Search products..." 
              className="pl-10 pr-4 border-brown-200 focus:border-brown-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="product-grid mb-12">
            {filteredProducts.map((product) => (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer border-brown-100 hover:shadow-md transition-all">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-brown-800 mb-1">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-brown-500">{product.category}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-brown-600 hover:text-brown-800 hover:bg-brown-50"
                            onClick={() => setSelectedProduct(product)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-brown-800">{product.name}</DialogTitle>
                    <DialogDescription className="text-brown-600">
                      {product.category} • {product.subcategory}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Items Included</h4>
                        <ul className="mt-1 text-sm text-brown-600">
                          {product.details.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Primary Material</h4>
                        <p className="mt-1 text-sm text-brown-600">{product.details.material}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Style</h4>
                        <p className="mt-1 text-sm text-brown-600">{product.details.style}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Finish</h4>
                        <p className="mt-1 text-sm text-brown-600">{product.details.finish}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Features</h4>
                        <ul className="mt-1 text-sm text-brown-600 list-disc list-inside">
                          {product.details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-brown-800">Product Dimensions</h4>
                        <div className="mt-1 text-sm text-brown-600">
                          <p>Width: {product.details.dimensions.width}</p>
                          <p>Depth: {product.details.dimensions.depth}</p>
                          <p>Height: {product.details.dimensions.height}</p>
                        </div>
                      </div>
                      
                      <Button 
                        asChild
                        className="bg-brown-600 hover:bg-brown-700 text-white w-full mt-6"
                      >
                        <a href="/inquiry">Make an Inquiry</a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-brown-800 mb-2">No products found</h3>
            <p className="text-brown-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button 
              variant="outline" 
              className="border-brown-600 text-brown-700 hover:bg-brown-50"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                searchParams.delete("category");
                setSearchParams(searchParams);
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
        
        <div className="bg-brown-50 rounded-lg p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-4">
              Need Help Finding the Perfect Piece?
            </h2>
            <p className="text-brown-600 mb-6">
              Our team of furniture experts is ready to assist you in selecting the perfect pieces for your space.
              Contact us for personalized recommendations and inquiries.
            </p>
            <Button 
              asChild
              className="bg-brown-600 hover:bg-brown-700 text-white"
            >
              <a href="/inquiry">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
