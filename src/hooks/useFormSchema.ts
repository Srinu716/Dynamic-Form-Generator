// src/hooks/useFormSchema.ts
import { useState } from 'react';

interface FieldSchema {
  id: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'radio' | 'number'; // Added 'number'
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: { pattern: string; message: string };
  options?: { value: string; label: string }[];
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FieldSchema[];
}

const initialSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address"
      }
    },
    {
      id: "companySize",
      type: "select",
      label: "Company Size",
      required: true,
      options: [
        { value: "1-50", label: "1-50 employees" },
        { value: "51-200", label: "51-200 employees" },
        { value: "201-1000", label: "201-1000 employees" },
        { value: "1000+", label: "1000+ employees" }
      ]
    },
    {
      id: "industry",
      type: "radio",
      label: "Industry",
      required: true,
      options: [
        { value: "tech", label: "Technology" },
        { value: "healthcare", label: "Healthcare" },
        { value: "finance", label: "Finance" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "timeline",
      type: "select",
      label: "Project Timeline",
      required: true,
      options: [
        { value: "immediate", label: "Immediate (within 1 month)" },
        { value: "short", label: "Short-term (1-3 months)" },
        { value: "medium", label: "Medium-term (3-6 months)" },
        { value: "long", label: "Long-term (6+ months)" }
      ]
    },
    {
      id: "comments",
      type: "textarea",
      label: "Additional Comments",
      required: false,
      placeholder: "Any other details you'd like to share..."
    },
    {
      id: "projectBudget",
      type: "number",
      label: "Project Budget",
      required: true,
      placeholder: "Enter project budget"
    },
  ]
};

const useFormSchema = () => {
  const [schema, setSchema] = useState<FormSchema>(initialSchema);
  const [error, setError] = useState<string | null>(null);

  const updateSchema = (newSchema: string) => {
    try {
      const parsedSchema = JSON.parse(newSchema);
      setSchema(parsedSchema);
      setError(null);
    } catch (err) {
      setError('Invalid JSON schema');
    }
  };

  return {
    schema,
    updateSchema,
    error
  };
};

export default useFormSchema;
