import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-white">MH Markets</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted global forex & CFD broker providing professional trading solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">📧</Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">📱</Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">🌐</Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Forex Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">CFD Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Indices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Commodities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Metals</a></li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Trading</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">MetaTrader 4</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">MetaTrader 5</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Web Trader</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Mobile Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Account Types</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Regulation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Legal Documents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 MH Markets. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;