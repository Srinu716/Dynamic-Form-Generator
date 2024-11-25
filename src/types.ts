// src/types.ts
export interface FieldSchema {
    id: string;
    type: 'text' | 'email' | 'textarea' | 'select' | 'radio';
    label: string;
    required: boolean;
    placeholder?: string;
    validation?: { pattern: string; message: string };
    options?: { value: string; label: string }[];
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FieldSchema[];
  }
  