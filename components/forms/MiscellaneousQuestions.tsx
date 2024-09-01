// components/forms/MiscellaneousQuestions.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormData } from "@/types/formInterfaces";

interface MiscellaneousQuestionsProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const MiscellaneousQuestions: React.FC<MiscellaneousQuestionsProps> = ({
  handleInputChange,
  setFormData,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Miscellaneous Questions</h2>
      <div>
        <Label htmlFor="howDidYouHear">How Did You Hear About This Job?</Label>
        <Input
          id="howDidYouHear"
          name="howDidYouHear"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="whyInterested">
          Why Are You Interested in This Position?
        </Label>
        <Textarea
          id="whyInterested"
          name="whyInterested"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="motivation">What Motivates You?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="careerGoals">What Are Your Career Goals?</Label>
        <Textarea
          id="careerGoals"
          name="careerGoals"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="criminalRecord">
          Have You Ever Been Convicted of a Crime?
        </Label>
        <RadioGroup
          onValueChange={(value) =>
            setFormData((prevState) => ({
              ...prevState,
              criminalRecord: value,
            }))
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="criminalRecordYes" />
            <Label htmlFor="criminalRecordYes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="criminalRecordNo" />
            <Label htmlFor="criminalRecordNo">No</Label>
          </div>
        </RadioGroup>
      </div>
      {/* Add other questions */}
    </div>
  );
};

export default MiscellaneousQuestions;
