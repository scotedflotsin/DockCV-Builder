import React from 'react';
import { FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">DockCV Builder</span>
            </div>
            <p className="text-gray-400">
              Create professional resumes that get you hired. Fast, easy, and completely free.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Product</span>
            <div className="space-y-2 text-gray-400">
              <li  className="block hover:text-white">Resume Builder</li>
              <li  className="block hover:text-white">Templates</li>
              <li className="block hover:text-white">PDF Export</li>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Support</span>
            <div className="space-y-2 text-gray-400">
              <Link to="/contact" className="block hover:text-white">Contact Us</Link>
              <Link to="/faq" className="block hover:text-white">FAQ</Link>
              <Link to="/tutorial" className="block hover:text-white">Tutorials</Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Legal</span>
            <div className="space-y-2 text-gray-400">
              <Link to="/privacy-policy" className="block hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by DockCV Builder Team
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 DockCV Builder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
