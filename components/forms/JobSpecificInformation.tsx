// components/forms/JobSpecificInformation.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "@/types/formInterfaces";

interface JobSpecificInformationProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const JobSpecificInformation: React.FC<JobSpecificInformationProps> = ({
  formData,
  handleInputChange,
  setFormData,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Job-Specific Information</h2>
      <div>
        <Label htmlFor="desiredPosition">Desired Position or Job Title</Label>
        <Input
          id="desiredPosition"
          name="desiredPosition"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="availabilityToStart">Availability to Start Work</Label>
        <Input
          id="availabilityToStart"
          name="availabilityToStart"
          type="date"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="salaryExpectations">Salary Expectations</Label>
        <Input
          id="salaryExpectations"
          name="salaryExpectations"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="preferredLocation">Preferred Work Location</Label>
        <Input
          id="preferredLocation"
          name="preferredLocation"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="willingToRelocate" />
        <Label htmlFor="willingToRelocate">Willing to Relocate</Label>
      </div>
      <div>
        <Label htmlFor="workHours">Availability for Work Hours</Label>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, workHours: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select work hours" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fullTime">Full-time</SelectItem>
            <SelectItem value="partTime">Part-time</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default JobSpecificInformation;
