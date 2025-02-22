
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FileText, FileWarning } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CaseRegistrationForm from "@/components/CaseRegistrationForm";

const Register = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      title: "Register a Case",
      description: "File a new case in the court system",
      icon: FileText,
      link: "#register-case",
      onClick: () => setActiveFeature("register-case"),
    },
    {
      title: "File a Complaint",
      description: "Submit a formal complaint",
      icon: FileWarning,
      link: "#file-complaint",
      onClick: () => setActiveFeature("file-complaint"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs showProfile />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {activeFeature === "register-case"
              ? "Register a New Case"
              : activeFeature === "file-complaint"
              ? "File a Complaint"
              : "Register Case"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {activeFeature
              ? "Please fill in all the required information below"
              : "File new cases or submit complaints"}
          </p>
        </div>

        {!activeFeature && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in">
            {features.map((feature) => (
              <div key={feature.title} onClick={feature.onClick}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        )}

        {activeFeature && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <CaseRegistrationForm
                type={activeFeature === "register-case" ? "case" : "complaint"}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Register;
