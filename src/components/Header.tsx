import { Button } from "@/components/ui/button";
import { Globe, Moon, Sun } from "lucide-react";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src={logo} 
              alt="Cavendish Trader Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-white">Cavendish Trader</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-primary transition-colors">Trading</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Company</a>
          <a href="#" className="text-white hover:text-primary transition-colors">MH Academy</a>
          <a href="#" className="text-white hover:text-primary transition-colors">Partnership</a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex border-gray-600 text-white hover:bg-gray-800">
            Sign In
          </Button>
          <Button variant="primary" size="sm" className="bg-primary hover:bg-primary/90">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;