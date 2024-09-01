// components/forms/Education.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "@/types/formInterfaces";

interface EducationProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Education: React.FC<EducationProps> = ({
  formData,
  handleInputChange,
  setFormData,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education</h2>
      <div>
        <Label htmlFor="educationLevel">Highest Level of Education</Label>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, educationLevel: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highSchool">High School Diploma</SelectItem>
            <SelectItem value="associate">Associate's Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="school">School/College Attended</Label>
        <Input id="school" name="school" onChange={handleInputChange} />
      </div>
      {/* Other fields like degree, major, GPA, etc. */}
    </div>
  );
};

export default Education;
