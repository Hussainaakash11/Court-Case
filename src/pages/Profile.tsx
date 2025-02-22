
import Navbar from "@/components/Navbar";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-primary/10 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">John Doe</h1>
                  <p className="text-gray-600">Client</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <p className="text-gray-900">john.doe@example.com</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Phone</p>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Address</p>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <p className="text-gray-900">123 Main St, City, State 12345</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <p className="text-gray-900">January 2024</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Cases</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Case #12345</h3>
                        <p className="text-sm text-gray-500">Civil Matter</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        In Progress
                      </span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">Case #12346</h3>
                        <p className="text-sm text-gray-500">Property Dispute</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
