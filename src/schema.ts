// src/schema.ts
import { FormSchema } from './types';
export const initialSchema: FormSchema = {
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name",
      },
      // Add more fields...
    ],
  };
  