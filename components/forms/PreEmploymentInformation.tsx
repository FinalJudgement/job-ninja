// components/forms/PreEmploymentInformation.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Checkbox } from "@/components/ui/checkbox";

interface PreEmploymentInformationProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const PreEmploymentInformation: React.FC<PreEmploymentInformationProps> = ({
  handleInputChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Pre-Employment Information</h2>
      <div className="flex items-center space-x-2">
        <Checkbox id="backgroundCheckConsent" />
        <Label htmlFor="backgroundCheckConsent">
          I consent to a background check
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="drugTestConsent" />
        <Label htmlFor="drugTestConsent">I consent to a drug test</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="creditCheckConsent" />
        <Label htmlFor="creditCheckConsent">I consent to a credit check</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="policyAcknowledgment" />
        <Label htmlFor="policyAcknowledgment">
          I acknowledge and agree to company policies
        </Label>
      </div>
      <div>
        <Label htmlFor="workEligibility">Work Eligibility Documentation</Label>
        <Input
          id="workEligibility"
          name="workEligibility"
          type="file"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PreEmploymentInformation;
