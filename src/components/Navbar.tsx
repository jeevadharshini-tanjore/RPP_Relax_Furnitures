
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, User, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brown-100 bg-white/80 backdrop-blur-sm">
      <div className="container-custom h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="RPP Relax Furnitures"
            className="h-10"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/100x40?text=RPP";
              e.currentTarget.onerror = null;
            }}
          />
          <span className="font-serif text-xl font-medium text-brown-800 hidden sm:inline-block">
            RPP Relax Furnitures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-brown-800 bg-brown-50"
                  : "text-brown-600 hover:text-brown-800 hover:bg-brown-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="text-brown-600 hover:text-brown-800 flex items-center ml-2"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-brown-600">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b border-brown-100">
                <span className="font-serif text-lg font-medium text-brown-800">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex flex-col py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-brown-800 bg-brown-50"
                        : "text-brown-600 hover:text-brown-800 hover:bg-brown-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-t border-brown-100 pt-4">
                <div className="flex items-center px-4 py-2 text-sm text-brown-600">
                  <User className="mr-2 h-4 w-4" />
                  <span>{user?.email}</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 mt-2"
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
