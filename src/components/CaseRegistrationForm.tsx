
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { FileText, Upload } from "lucide-react";

interface CaseRegistrationFormProps {
  type: "case" | "complaint";
}

const CaseRegistrationForm = ({ type }: CaseRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: `${type === "case" ? "Case" : "Complaint"} registered successfully`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder={`Enter ${type === "case" ? "case" : "complaint"} title`}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Select>
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="civil">Civil</SelectItem>
              <SelectItem value="criminal">Criminal</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="property">Property</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="parties">Involved Parties</Label>
          <Input
            id="parties"
            placeholder="Enter names of involved parties"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter location"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder={`Describe the ${type === "case" ? "case" : "complaint"} in detail`}
          className="min-h-[150px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Supporting Documents</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            Drag and drop your files here, or click to select files
          </p>
          <input
            type="file"
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <Button
            type="button"
            variant="outline"
            className="mt-4"
          >
            Select Files
          </Button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        <FileText className="w-4 h-4 mr-2" />
        {isSubmitting ? "Submitting..." : `Register ${type === "case" ? "Case" : "Complaint"}`}
      </Button>
    </form>
  );
};

export default CaseRegistrationForm;
