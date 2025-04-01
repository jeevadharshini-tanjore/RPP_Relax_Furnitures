
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import InquiryPage from "@/pages/InquiryPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LoginPage />} />
            
            {/* Protected routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <HomePage />
                  </Layout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/products" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <ProductsPage />
                  </Layout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/inquiry" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <InquiryPage />
                  </Layout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <Layout>
                    <AboutPage />
                  </Layout>
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
