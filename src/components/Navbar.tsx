
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, ArrowLeft } from "lucide-react";

interface NavbarProps {
  showBackButton?: boolean;
  showProfile?: boolean;
  showContactUs?: boolean;
}

const Navbar = ({ showBackButton = false, showProfile = false, showContactUs = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">CCMS</span>
            </Link>
          </div>

          {/* Court Title - centered on desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <h1 className="text-xl font-semibold text-gray-900">J&K High Court Srinagar</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {showBackButton && (
              <Link
                to="/"
                className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            )}
            
            {!showBackButton && (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </>
            )}

            {showContactUs && (
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            )}

            {showProfile && (
              <Link
                to="/profile"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Court Title - centered on mobile */}
            <h1 className="text-lg font-semibold text-gray-900 mr-4">J&K High Court</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {showBackButton && (
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Back to Home
              </Link>
            )}
            
            {!showBackButton && (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </>
            )}

            {showContactUs && (
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            )}

            {showProfile && (
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                Profile
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
