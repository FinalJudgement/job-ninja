// components/forms/AdditionalInformation.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalInformationProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  handleInputChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Additional Information</h2>
      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          name="coverLetter"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="resume">Resume</Label>
        <Input
          id="resume"
          name="resume"
          type="file"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="portfolio">Portfolio or Work Samples</Label>
        <Input id="portfolio" name="portfolio" onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input id="linkedin" name="linkedin" onChange={handleInputChange} />
      </div>
      <div>
        <Label htmlFor="interviewAvailability">
          Availability for Interview
        </Label>
        <Textarea
          id="interviewAvailability"
          name="interviewAvailability"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="gapExplanation">Employment Gap Explanation</Label>
        <Textarea
          id="gapExplanation"
          name="gapExplanation"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AdditionalInformation;
