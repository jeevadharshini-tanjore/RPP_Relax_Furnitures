
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Product data
const products = [
  {
    id: "bedroom-001",
    name: "Premium King Bed",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["King Size Bed (KBED-001A)", "2 Side Tables (KBST-001B)"],
      material: "Solid teak wood with premium upholstery",
      style: "Contemporary",
      finish: "Natural wood with matte polish",
      features: ["Ergonomic design", "Extra storage drawers", "Anti-termite treatment"],
      dimensions: "L 84\" x W 78\" x H 36\""
    }
  },
  {
    id: "bedroom-002",
    name: "Luxury Wardrobe",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["3-Door Wardrobe (BWAR-003A)", "Mirror Panel (BWMP-001B)"],
      material: "Engineered wood with laminate finish",
      style: "Modern",
      finish: "High-gloss laminate",
      features: ["Soft-close doors", "LED lighting", "Modular design"],
      dimensions: "L 72\" x W 24\" x H 80\""
    }
  },
  {
    id: "bedroom-003",
    name: "Classic Dresser",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Dresser with Mirror (BDRS-002A)"],
      material: "Solid oak wood",
      style: "Classic",
      finish: "Dark walnut stain",
      features: ["Large mirror", "Jewelry compartment", "Six drawers"],
      dimensions: "L 48\" x W 18\" x H 32\" (Dresser) + 24\" (Mirror)"
    }
  },
  {
    id: "living-001",
    name: "Luxury Sofa Set",
    category: "living",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["3 Seater Sofa (LSOF-003A)", "2 Single Seaters (LSOF-001A)"],
      material: "Hardwood frame with premium leatherette upholstery",
      style: "Contemporary",
      finish: "Leatherette with wooden accents",
      features: ["High-density foam", "Ergonomic design", "Stain-resistant fabric"],
      dimensions: "L 84\" x W 36\" x H 32\" (3 Seater), L 36\" x W 36\" x H 32\" (Single Seater)"
    }
  },
  {
    id: "living-002",
    name: "Coffee Table",
    category: "living",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Coffee Table (LCFT-001A)"],
      material: "Tempered glass top with metal frame",
      style: "Modern",
      finish: "Brushed metal with clear glass",
      features: ["Tempered safety glass", "Anti-scratch surface", "Lower shelf for storage"],
      dimensions: "L 48\" x W 24\" x H 16\""
    }
  },
  {
    id: "living-003",
    name: "Entertainment Unit",
    category: "living",
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["TV Unit (LTVU-002A)", "Wall Shelves Set (LWSH-001B)"],
      material: "Engineered wood with veneer finish",
      style: "Contemporary",
      finish: "Oak veneer with matte finish",
      features: ["Cable management system", "Adjustable shelves", "Concealed storage"],
      dimensions: "L 72\" x W 18\" x H 24\""
    }
  },
  {
    id: "dining-001",
    name: "Dining Table Set",
    category: "dining",
    image: "https://images.unsplash.com/photo-1595514535519-e3140a9f9d7a?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Dining Table (DTBL-006A)", "6 Dining Chairs (DCHR-006A)"],
      material: "Solid teak wood",
      style: "Classic",
      finish: "Natural wood with protective coating",
      features: ["Extendable table top", "Cushioned chairs", "Scratch-resistant surface"],
      dimensions: "L 72\" (96\" extended) x W 42\" x H 30\" (Table), 18\" x 18\" x 36\" (Chairs)"
    }
  },
  {
    id: "dining-002",
    name: "Buffet Cabinet",
    category: "dining",
    image: "https://images.unsplash.com/photo-1594026636867-7615b24deb89?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Buffet Cabinet (DBUF-001A)"],
      material: "Solid wood and MDF",
      style: "Traditional",
      finish: "Distressed white",
      features: ["Wine rack", "Adjustable shelves", "Soft-close drawers"],
      dimensions: "L 60\" x W 18\" x H 36\""
    }
  },
  {
    id: "office-001",
    name: "Executive Desk",
    category: "office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Executive Desk (OEDK-001A)", "Side Cabinet (OSCB-001A)"],
      material: "Engineered wood with premium veneer",
      style: "Modern Executive",
      finish: "Walnut veneer",
      features: ["Cable management", "Lockable drawers", "Modular design"],
      dimensions: "L 72\" x W 36\" x H 30\" (Desk), L 18\" x W 18\" x H 24\" (Cabinet)"
    }
  },
  {
    id: "office-002",
    name: "Ergonomic Office Chair",
    category: "office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["Office Chair (OCHR-002A)"],
      material: "Mesh fabric and premium leatherette with metal base",
      style: "Contemporary",
      finish: "Black mesh and leatherette",
      features: ["Adjustable height", "Lumbar support", "360° swivel", "Armrests"],
      dimensions: "W 26\" x D 26\" x H 38-42\" (adjustable)"
    }
  },
  {
    id: "office-003",
    name: "Bookshelf",
    category: "office",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3",
    details: {
      itemsIncluded: ["5-Tier Bookshelf (OBKS-005A)"],
      material: "Engineered wood with metal frame",
      style: "Industrial",
      finish: "Dark oak with black metal",
      features: ["Open shelving", "Reinforced structure", "Wall mounting option"],
      dimensions: "L 36\" x W 12\" x H 72\""
    }
  }
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set category from URL params if available
    const categoryParam = searchParams.get("category");
    if (categoryParam && ["bedroom", "living", "dining", "office"].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    // Update URL query parameter
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brown-800 mb-4">
            Our Product Catalog
          </h1>
          <p className="text-brown-600">
            Explore our extensive range of premium furniture designed for comfort, 
            elegance, and durability. Click on any product to view more details.
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs 
            value={selectedCategory} 
            onValueChange={handleCategoryChange}
            defaultValue="all"
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="bedroom">Bedroom</TabsTrigger>
              <TabsTrigger value="living">Living</TabsTrigger>
              <TabsTrigger value="dining">Dining</TabsTrigger>
              <TabsTrigger value="office">Office</TabsTrigger>
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden group hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium text-brown-800">{product.name}</h3>
                          <Badge variant="outline" className="text-xs bg-brown-50">
                            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-brown-500">Click to view details</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Product Detail Dialog */}
        {selectedProduct && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-brown-800">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-brown-600">
                  Product specifications and details
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-brown-800 mb-2">Items Included</h4>
                    <ul className="list-disc list-inside text-brown-600">
                      {selectedProduct.details.itemsIncluded.map((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-brown-800 mb-1">Primary Material</h4>
                      <p className="text-sm text-brown-600">{selectedProduct.details.material}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-brown-800 mb-1">Style</h4>
                      <p className="text-sm text-brown-600">{selectedProduct.details.style}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-brown-800 mb-1">Finish</h4>
                      <p className="text-sm text-brown-600">{selectedProduct.details.finish}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-brown-800 mb-1">Dimensions</h4>
                      <p className="text-sm text-brown-600">{selectedProduct.details.dimensions}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium text-brown-800 mb-2">Features</h4>
                    <ul className="list-disc list-inside text-brown-600">
                      {selectedProduct.details.features.map((feature, index) => (
                        <li key={index} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      asChild
                      className="w-full bg-brown-600 hover:bg-brown-700 text-white"
                    >
                      <a href="/inquiry">Make an Inquiry</a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
