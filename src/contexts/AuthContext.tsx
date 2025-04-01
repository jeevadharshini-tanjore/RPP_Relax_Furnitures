
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type User = {
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // For demonstration purposes, we're using a simple validation
    // In a real app, this would make an API call to your backend
    if (email && password) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Basic validation - in a real app this would be handled by your backend
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return;
      }
      
      const userData = {
        email,
        name: email.split('@')[0], // Extract name from email for demo
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Login successful. Welcome back!");
      navigate("/home");
    } else {
      toast.error("Please enter both email and password");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    toast.info("You have been logged out");
    navigate("/");
  };

  const forgotPassword = async (email: string) => {
    // In a real app, this would send a password reset email
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Password reset instructions sent to your email");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
