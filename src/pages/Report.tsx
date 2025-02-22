
import Navbar from "@/components/Navbar";
import { Upload } from "lucide-react";

const Report = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar showBackButton showContactUs showProfile />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generate Report
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload and analyze FIR documents
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-1">Upload FIR Document</p>
              <p className="text-sm text-gray-500 mb-4">PDF files up to 10MB</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Select File
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Report;
