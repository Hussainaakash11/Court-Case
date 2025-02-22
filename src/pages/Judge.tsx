
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FileSearch, Clock } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CaseTracker from "@/components/CaseTracker";

// Mock data
const mockCases = [
  {
    id: "123",
    title: "Property Dispute",
    type: "Civil",
    status: "in_progress" as const,
    date: "2024-02-15",
    nextHearing: "2024-03-01",
    priority: "high" as const,
    client: "Michael Brown",
    lawyer: "John Smith",
    description: "Dispute regarding property boundaries and ownership rights.",
  },
  {
    id: "124",
    title: "Contract Violation",
    type: "Civil",
    status: "pending" as const,
    date: "2024-02-10",
    priority: "medium" as const,
    client: "Emily Wilson",
    lawyer: "Sarah Johnson",
    description: "Breach of contract case involving business agreement.",
  },
];

const Judge = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      title: "Track Cases",
      description: "Monitor and manage court cases under your jurisdiction",
      icon: FileSearch,
      link: "#track-cases",
      onClick: () => setActiveFeature("track-cases"),
    },
    {
      title: "Give Hearing Time",
      description: "Schedule and manage court hearings",
      icon: Clock,
      link: "#hearings",
      onClick: () => setActiveFeature("hearings"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs showProfile />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Judge Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage cases and schedule court hearings
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

        {(activeFeature === "track-cases" || activeFeature === "hearings") && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <CaseTracker userType="judge" cases={mockCases} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Judge;
