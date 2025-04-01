
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isForgotLoading, setIsForgotLoading] = useState(false);
  const { login, forgotPassword } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login(email, password);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsForgotLoading(true);
      await forgotPassword(forgotEmail);
      setForgotEmail("");
    } finally {
      setIsForgotLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-brown-50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="RPP Relax Furnitures"
            className="h-16 mx-auto mb-6"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/160x64?text=RPP+Relax+Furnitures";
              e.currentTarget.onerror = null;
            }}
          />
          <h1 className="text-3xl font-bold text-brown-800">RPP Relax Furnitures</h1>
          <p className="text-brown-600 mt-2">Discover Comfort & Elegance</p>
        </div>
        
        <Card className="w-full border-brown-100 bg-white/80 backdrop-blur-sm shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-brown-800">Welcome Back</CardTitle>
            <CardDescription className="text-brown-500">
              Please sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brown-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-brown-200 focus:border-brown-300"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-brown-700">Password</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" size="sm" className="text-brown-500 hover:text-brown-700 px-0">
                        Forgot Password?
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Reset your password</DialogTitle>
                        <DialogDescription>
                          Enter your email address and we'll send you instructions to reset your password.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleForgotPassword} className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="forgot-email">Email address</Label>
                          <Input
                            id="forgot-email"
                            type="email"
                            placeholder="you@example.com"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                          />
                        </div>
                        <DialogFooter className="sm:justify-start mt-4">
                          <Button type="submit" disabled={isForgotLoading}>
                            {isForgotLoading ? "Sending..." : "Send Reset Instructions"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-brown-200 focus:border-brown-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brown-600 hover:bg-brown-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center border-t border-brown-100 pt-4">
            <p className="text-sm text-brown-500">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
