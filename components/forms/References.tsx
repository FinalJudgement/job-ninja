// components/forms/References.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/forms/input";
import { Label } from "@/components/forms/label";
import { X } from "lucide-react";
import { Reference, FormData } from "@/types/formInterfaces";

interface ReferencesProps {
  references: Reference[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof FormData
  ) => void;
  addField: (field: keyof FormData) => void;
  removeField: (field: keyof FormData, id: number) => void;
}

const References: React.FC<ReferencesProps> = ({
  references,
  handleInputChange,
  addField,
  removeField,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">References</h2>
      {references.map((reference, index) => (
        <Card key={reference.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reference {index + 1}
            </CardTitle>
            {index > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeField("references", reference.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor={`referenceName-${index}`}>Reference Name</Label>
            <Input
              id={`referenceName-${index}`}
              name="referenceName"
              onChange={(e) => handleInputChange(e, index, "references")}
            />
            {/* Other input fields for reference information */}
          </CardContent>
        </Card>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => addField("references")}
      >
        Add Reference
      </Button>
    </div>
  );
};

export default References;
