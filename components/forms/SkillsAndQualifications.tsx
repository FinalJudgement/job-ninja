// components/forms/SkillsAndQualifications.tsx
import React from "react";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/types/formInterfaces";

interface SkillsAndQualificationsProps {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const SkillsAndQualifications: React.FC<SkillsAndQualificationsProps> = ({
  handleInputChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Skills and Qualifications</h2>
      <div>
        <Label htmlFor="technicalSkills">Technical Skills</Label>
        <Textarea
          id="technicalSkills"
          name="technicalSkills"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="softSkills">Soft Skills</Label>
        <Textarea
          id="softSkills"
          name="softSkills"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="languages">Language Proficiency</Label>
        <Textarea
          id="languages"
          name="languages"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="licenses">
          Professional Licenses or Certifications
        </Label>
        <Textarea id="licenses" name="licenses" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default SkillsAndQualifications;
