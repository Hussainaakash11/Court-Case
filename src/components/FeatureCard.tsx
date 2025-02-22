
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const FeatureCard = ({ title, description, icon: Icon, link }: FeatureCardProps) => {
  return (
    <Link
      to={link}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col items-center text-center transform hover:-translate-y-1"
    >
      <div className="rounded-full bg-primary/5 p-3 mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

export default FeatureCard;
