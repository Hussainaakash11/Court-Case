
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FileSearch, UserCog } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import CaseTracker from "@/components/CaseTracker";
import AppointmentBooking from "@/components/AppointmentBooking";

// Mock data
const mockCases = [
  {
    id: "123",
    title: "Property Dispute",
    type: "Civil",
    status: "in_progress" as const,
    date: "2024-02-15",
    nextHearing: "2024-03-01",
    lawyer: "John Smith",
    description: "Dispute regarding property boundaries and ownership rights.",
  },
  {
    id: "124",
    title: "Contract Violation",
    type: "Civil",
    status: "pending" as const,
    date: "2024-02-10",
    lawyer: "Sarah Johnson",
    description: "Breach of contract case involving business agreement.",
  },
];

const mockLawyers = [
  {
    id: "1",
    name: "John Smith",
    specialization: "Civil Law",
    experience: 10,
    rating: 4.5,
    availableDates: [
      new Date("2024-03-01"),
      new Date("2024-03-02"),
      new Date("2024-03-03"),
    ],
  },
  {
    id: "2",
    name: "Sarah Johnson",
    specialization: "Criminal Law",
    experience: 15,
    rating: 4.8,
    availableDates: [
      new Date("2024-03-01"),
      new Date("2024-03-04"),
      new Date("2024-03-05"),
    ],
  },
];

const Client = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      title: "Track Your Case",
      description: "Monitor the progress and status of your ongoing cases",
      icon: FileSearch,
      link: "#track-case",
      onClick: () => setActiveFeature("track-case"),
    },
    {
      title: "Appoint a Lawyer",
      description: "Find and connect with qualified legal professionals",
      icon: UserCog,
      link: "#appoint-lawyer",
      onClick: () => setActiveFeature("appoint-lawyer"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs showProfile />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Portal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your cases and connect with legal professionals
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

        {activeFeature === "track-case" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <CaseTracker userType="client" cases={mockCases} />
          </div>
        )}

        {activeFeature === "appoint-lawyer" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <AppointmentBooking userType="client" lawyers={mockLawyers} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Client;
