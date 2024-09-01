// components/forms/PersonalInformation.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { FormData } from "@/types/formInterfaces";

interface PersonalInformationProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDateChange: (date: Date, name: keyof FormData) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  formData,
  handleInputChange,
  handleDateChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Input fields for first, middle, last names */}
        {["firstName", "middleName", "lastName"].map((name) => (
          <div key={name}>
            <Label htmlFor={name}>{name.split(/(?=[A-Z])/).join(" ")}</Label>
            <Input id={name} name={name} onChange={handleInputChange} />
          </div>
        ))}
      </div>
      {/* Other input fields for email, phone, etc. */}
      <div>
        <Label htmlFor="dob">Date of Birth</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.dob ? (
                format(formData.dob, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.dob}
              onSelect={(date) => handleDateChange(date ?? new Date(), "dob")}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PersonalInformation;
