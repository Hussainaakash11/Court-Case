
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileSearch, Calendar, CircleDot } from "lucide-react";

interface Case {
  id: string;
  title: string;
  type: string;
  status: "pending" | "in_progress" | "resolved";
  date: string;
  nextHearing?: string;
  priority?: "high" | "medium" | "low";
  lawyer?: string;
  client?: string;
  description: string;
}

interface CaseTrackerProps {
  userType: "client" | "lawyer" | "judge";
  cases: Case[];
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-blue-100 text-blue-800",
  resolved: "bg-green-100 text-green-800",
};

const priorityColors = {
  high: "text-red-500",
  medium: "text-orange-500",
  low: "text-green-500",
};

const CaseTracker = ({ userType, cases }: CaseTrackerProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <FileSearch className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-gray-900">Case Records</h2>
        </div>
      </div>

      <ScrollArea className="h-[600px]">
        <div className="p-6 space-y-4">
          {cases.map((case_) => (
            <div
              key={case_.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">Case #{case_.id}</h3>
                  <p className="text-sm text-gray-500">{case_.type}</p>
                </div>
                <Badge variant="secondary" className={statusColors[case_.status]}>
                  {case_.status.replace("_", " ").toUpperCase()}
                </Badge>
              </div>

              <p className="text-gray-600 text-sm mb-3">{case_.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Filed: {case_.date}</span>
                </div>

                {case_.nextHearing && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      Next Hearing: {case_.nextHearing}
                    </span>
                  </div>
                )}

                {case_.priority && userType === "judge" && (
                  <div className="flex items-center space-x-2">
                    <CircleDot className={`w-4 h-4 ${priorityColors[case_.priority]}`} />
                    <span className="text-gray-600">
                      Priority: {case_.priority.charAt(0).toUpperCase() + case_.priority.slice(1)}
                    </span>
                  </div>
                )}

                {case_.lawyer && userType === "client" && (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Lawyer: {case_.lawyer}</span>
                  </div>
                )}

                {case_.client && (userType === "lawyer" || userType === "judge") && (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">Client: {case_.client}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CaseTracker;
