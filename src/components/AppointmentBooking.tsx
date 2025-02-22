
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { User, Calendar as CalendarIcon, Clock } from "lucide-react";

interface Lawyer {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  availableDates: Date[];
}

interface AppointmentRequest {
  id: string;
  clientName: string;
  date: Date;
  status: "pending" | "approved" | "rejected";
}

interface AppointmentBookingProps {
  userType: "client" | "lawyer";
  lawyers?: Lawyer[];
  appointments?: AppointmentRequest[];
}

const AppointmentBooking = ({ userType, lawyers = [], appointments = [] }: AppointmentBookingProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const handleBooking = (lawyerId: string) => {
    if (!selectedDate) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a date first",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Appointment request sent successfully",
    });
  };

  const handleAppointmentResponse = (appointmentId: string, status: "approved" | "rejected") => {
    toast({
      title: "Success",
      description: `Appointment ${status} successfully`,
    });
  };

  if (userType === "lawyer") {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Requests</CardTitle>
            <CardDescription>Manage your appointment requests</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{appointment.clientName}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{appointment.date.toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="default"
                        onClick={() => handleAppointmentResponse(appointment.id, "approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleAppointmentResponse(appointment.id, "rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Set Available Dates</CardTitle>
            <CardDescription>Mark your available dates for appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={[]}
              onSelect={() => {}}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Available Lawyers</CardTitle>
          <CardDescription>Book an appointment with a lawyer</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="p-4 border rounded-lg space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{lawyer.name}</h3>
                        <p className="text-sm text-gray-500">{lawyer.specialization}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {lawyer.experience} years exp.
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) =>
                        !lawyer.availableDates.some(
                          (d) => d.toDateString() === date.toDateString()
                        )
                      }
                      className="rounded-md border"
                    />
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Available Time Slots</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"].map((time) => (
                            <Button
                              key={time}
                              variant="outline"
                              className="w-full"
                              onClick={() => {}}
                            >
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => handleBooking(lawyer.id)}
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentBooking;
