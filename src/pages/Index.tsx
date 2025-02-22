
import { Gavel, Users, UserCog, Scale, FileText, FileSearch } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "Login/Signup",
    description: "Access your account or create a new one",
    icon: Users,
    link: "/login",
  },
  {
    title: "Client Portal",
    description: "Track cases and connect with lawyers",
    icon: UserCog,
    link: "/client",
  },
  {
    title: "Lawyer Dashboard",
    description: "Manage cases and appointments",
    icon: Scale,
    link: "/lawyer",
  },
  {
    title: "Judge Portal",
    description: "Schedule hearings and manage cases",
    icon: Gavel,
    link: "/judge",
  },
  {
    title: "Register Case",
    description: "File new cases and complaints",
    icon: FileText,
    link: "/register",
  },
  {
    title: "Generate Report",
    description: "Analyze FIR and generate reports",
    icon: FileSearch,
    link: "/report",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Court Case Management System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive solution for managing court cases, connecting with legal professionals, and tracking case progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Court Case Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
