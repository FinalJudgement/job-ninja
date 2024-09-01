// components/forms/EmploymentHistory.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { WorkExperience, FormData } from "@/types/formInterfaces";

interface EmploymentHistoryProps {
  workExperiences: WorkExperience[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof FormData
  ) => void;
  addField: (field: keyof FormData) => void;
  removeField: (field: keyof FormData, id: number) => void;
}

const EmploymentHistory: React.FC<EmploymentHistoryProps> = ({
  workExperiences,
  handleInputChange,
  addField,
  removeField,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Employment History</h2>
      {workExperiences.map((experience, index) => (
        <Card key={experience.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Work Experience {index + 1}
            </CardTitle>
            {index > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeField("workExperiences", experience.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
            <Input
              id={`jobTitle-${index}`}
              name="jobTitle"
              onChange={(e) => handleInputChange(e, index, "workExperiences")}
            />
            <Label htmlFor={`company-${index}`}>Company Name</Label>
            <Input
              id={`company-${index}`}
              name="company"
              onChange={(e) => handleInputChange(e, index, "workExperiences")}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  name="startDate"
                  type="date"
                  onChange={(e) =>
                    handleInputChange(e, index, "workExperiences")
                  }
                />
              </div>
              <div>
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  name="endDate"
                  type="date"
                  onChange={(e) =>
                    handleInputChange(e, index, "workExperiences")
                  }
                />
              </div>
            </div>
            <Label htmlFor={`responsibilities-${index}`}>
              Responsibilities and Achievements
            </Label>
            <Textarea
              id={`responsibilities-${index}`}
              name="responsibilities"
              onChange={(e) => handleInputChange(e, index, "workExperiences")}
            />
          </CardContent>
        </Card>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => addField("workExperiences")}
      >
        Add Work Experience
      </Button>
    </div>
  );
};

export default EmploymentHistory;
