// types/formInterfaces.ts
export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface Reference {
  id: number;
  name: string;
  relationship: string;
  email: string;
  phone: string;
}

export interface FormData {
  workExperiences: WorkExperience[];
  references: Reference[];
  dob?: Date;
  pronouns?: string;
  educationLevel: string;
  workHours: string;
  criminalRecord: string;
}
