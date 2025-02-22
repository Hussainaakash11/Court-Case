
import Navbar from "@/components/Navbar";
import { Shield, Scale, Clock, Building2, Code, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our Court Case Management System
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600">
              Advanced security measures to protect sensitive legal information
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair</h3>
            <p className="text-gray-600">
              Ensuring equal access to justice and transparent processes
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficient</h3>
            <p className="text-gray-600">
              Streamlined processes to save time and resources
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto prose prose-blue animate-fade-in">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            The Court Case Management System (CCMS) is dedicated to modernizing the judicial process
            through digital innovation. Our platform connects clients, lawyers, and judges, making
            legal proceedings more accessible and efficient.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-8">
            We envision a future where justice is accessible to all through technology. By digitizing
            court processes and providing easy access to legal resources, we aim to create a more
            transparent and efficient judicial system.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>Transparency in all legal proceedings</li>
            <li>Equal access to justice for all</li>
            <li>Innovation in legal technology</li>
            <li>Protection of sensitive information</li>
            <li>Efficiency in court processes</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">About the Court</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  The District Court of Justice is one of the premier judicial institutions,
                  serving the community since 1950. Our court handles both civil and criminal
                  cases, ensuring justice is served with fairness and transparency.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Operating Hours: Monday to Friday, 9:00 AM - 5:00 PM</li>
                  <li>• Location: 123 Justice Avenue, Cityville, State 12345</li>
                  <li>• Contact: (555) 123-4567</li>
                  <li>• Email: info@districtcourt.gov</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Code className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">Development Team</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our system is developed by a dedicated team of legal technology experts
                  committed to improving access to justice through innovation.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Tech Stack</h4>
                    <p className="text-gray-600">Built with modern technologies including React, TypeScript, and Tailwind CSS</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Team</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Project Lead: Jane Smith</li>
                      <li>• Lead Developer: John Doe</li>
                      <li>• UI/UX Designer: Sarah Johnson</li>
                      <li>• Legal Consultant: Michael Brown, Esq.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
