
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">RPP Relax Furnitures</h3>
            <p className="text-brown-100 text-sm">
              Premium furniture crafted for comfort and elegance. Transforming houses into homes since 2005.
            </p>
            <div className="text-brown-100 text-sm">
              <p>140 P&C Tower, Perundurai Road</p>
              <p>Erode 638011</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/home" className="text-brown-100 hover:text-white text-sm">Home</Link>
              <Link to="/products" className="text-brown-100 hover:text-white text-sm">Products</Link>
              <Link to="/inquiry" className="text-brown-100 hover:text-white text-sm">Inquiry</Link>
              <Link to="/about" className="text-brown-100 hover:text-white text-sm">About Us</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-medium">Contact Us</h4>
            <div className="text-brown-100 space-y-2 text-sm">
              <p>Phone: 98429 16999, 98428 99311</p>
              <p>Email: rpprelax@gmail.com</p>
            </div>
            <div className="text-xs text-brown-200">
              © {new Date().getFullYear()} RPP Relax Furnitures. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
