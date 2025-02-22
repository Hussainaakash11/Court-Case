
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FileSearch, Calendar } from "lucide-react";
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
    client: "Michael Brown",
    description: "Dispute regarding property boundaries and ownership rights.",
  },
  {
    id: "124",
    title: "Contract Violation",
    type: "Civil",
    status: "pending" as const,
    date: "2024-02-10",
    client: "Emily Wilson",
    description: "Breach of contract case involving business agreement.",
  },
];

const mockAppointments = [
  {
    id: "1",
    clientName: "Michael Brown",
    date: new Date("2024-03-01"),
    status: "pending" as const,
  },
  {
    id: "2",
    clientName: "Emily Wilson",
    date: new Date("2024-03-02"),
    status: "pending" as const,
  },
];

const Lawyer = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      title: "Track Your Cases",
      description: "Monitor and manage your assigned cases",
      icon: FileSearch,
      link: "#track-cases",
      onClick: () => setActiveFeature("track-cases"),
    },
    {
      title: "Give Appointment Time",
      description: "Schedule and manage client appointments",
      icon: Calendar,
      link: "#appointments",
      onClick: () => setActiveFeature("appointments"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs showProfile />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lawyer Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your cases and client appointments
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

        {activeFeature === "track-cases" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <CaseTracker userType="lawyer" cases={mockCases} />
          </div>
        )}

        {activeFeature === "appointments" && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <AppointmentBooking userType="lawyer" appointments={mockAppointments} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Lawyer;
