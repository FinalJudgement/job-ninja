// app/portfolio/page.tsx
"use client";
import { WorkExperience, Reference, FormData } from "@/types/formInterfaces";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonalInformation from "@/components/forms/PersonalInformation";
import EmploymentHistory from "@/components/forms/EmploymentHistory";
import Education from "@/components/forms/Education";
import References from "@/components/forms/References";
import SkillsAndQualifications from "@/components/forms/SkillsAndQualifications";
import JobSpecificInformation from "@/components/forms/JobSpecificInformation";
import AdditionalInformation from "@/components/forms/AdditionalInformation";
import PreEmploymentInformation from "@/components/forms/PreEmploymentInformation";
import MiscellaneousQuestions from "@/components/forms/MiscellaneousQuestions";

export default function ProfileEditForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    workExperiences: [
      {
        id: 1,
        company: "",
        role: "",
        startDate: new Date(),
        description: "",
      },
    ],
    references: [
      {
        id: 1,
        name: "",
        relationship: "",
        email: "",
        phone: "",
      },
    ],
    dob: undefined,
    educationLevel: "",
    workHours: "",
    criminalRecord: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number | null = null,
    field: keyof FormData | null = null
  ) => {
    if (index !== null && field) {
      const updatedArray = [...(formData[field] as { id: number }[])];
      updatedArray[index] = {
        ...updatedArray[index],
        [e.target.name]: e.target.value,
      };
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleDateChange = (date: Date, name: keyof FormData) => {
    setFormData((prevState) => ({ ...prevState, [name]: date }));
  };

  const addField = (field: keyof FormData) => {
    const updatedArray = [
      ...(formData[field] as { id: number }[]),
      { id: (formData[field] as { id: number }[]).length + 1 },
    ];
    setFormData({ ...formData, [field]: updatedArray });
  };

  const removeField = (field: keyof FormData, id: number) => {
    if (Array.isArray(formData[field])) {
      const updatedArray = (formData[field] as { id: number }[]).filter(
        (item) => item.id !== id
      );
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      console.error(`Field ${field} is not a valid array in formData.`);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Update your profile information</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <PersonalInformation
              formData={formData}
              handleInputChange={handleInputChange}
              handleDateChange={handleDateChange}
            />
          )}
          {step === 2 && (
            <EmploymentHistory
              workExperiences={formData.workExperiences}
              handleInputChange={handleInputChange}
              addField={addField}
              removeField={removeField}
            />
          )}
          {step === 3 && (
            <Education
              formData={formData}
              handleInputChange={handleInputChange}
              setFormData={setFormData}
            />
          )}
          {step === 4 && (
            <References
              references={formData.references}
              handleInputChange={handleInputChange}
              addField={addField}
              removeField={removeField}
            />
          )}
          {step === 5 && (
            <SkillsAndQualifications handleInputChange={handleInputChange} />
          )}
          {step === 6 && (
            <JobSpecificInformation
              formData={formData}
              handleInputChange={handleInputChange}
              setFormData={setFormData}
            />
          )}
          {step === 7 && (
            <AdditionalInformation handleInputChange={handleInputChange} />
          )}
          {step === 8 && (
            <PreEmploymentInformation handleInputChange={handleInputChange} />
          )}
          {step === 9 && (
            <MiscellaneousQuestions
              handleInputChange={handleInputChange}
              setFormData={setFormData}
            />
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button type="button" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step < 9 ? (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
