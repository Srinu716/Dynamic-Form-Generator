// src/schema.ts
import { FormSchema } from './types';
export const initialSchema: FormSchema = {
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "stakeholderName",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "Gender",
      "type": "radio",
      "label": "Gender",
      "required": true,
      "options": [
        { "value": "Male", "label": "Male" },
        { "value": "Female", "label": "Female" },
        { "value": "Others", "label": "Others" }
      ]
    },
    {
      "id": "stakeholderRole",
      "type": "text",
      "label": "Role",
      "required": true,
      "placeholder": "Enter your role"
    },
    {
      "id": "stakeholderDepartment",
      "type": "text",
      "label": "Department",
      "required": true,
      "placeholder": "Enter department name"
    },
    {
      "id": "stakeholderContact",
      "type": "email",
      "label": "Contact Information",
      "required": true,
      "placeholder": "Enter contact information"
    },
    {
      "id": "projectTitle",
      "type": "text",
      "label": "Project Title",
      "required": true,
      "placeholder": "Enter project title"
    },
    {
      "id": "projectGoal",
      "type": "textarea",
      "label": "Project Goal",
      "required": true,
      "placeholder": "Enter project goal"
    },
    {
      "id": "objective1",
      "type": "text",
      "label": "Objective 1",
      "required": true,
      "placeholder": "Enter first project objective"
    },
    {
      "id": "objective2",
      "type": "text",
      "label": "Objective 2",
      "required": true,
      "placeholder": "Enter second project objective"
    },
    {
      "id": "inScope",
      "type": "textarea",
      "label": "In-scope",
      "required": true,
      "placeholder": "Define in-scope elements"
    },
    {
      "id": "outOfScope",
      "type": "textarea",
      "label": "Out-of-scope",
      "required": true,
      "placeholder": "Define out-of-scope elements"
    },
    {
      "id": "primaryFunctions",
      "type": "textarea",
      "label": "Primary Functions",
      "required": true,
      "placeholder": "Describe primary system functions"
    },
    {
      "id": "dataInputOutput",
      "type": "textarea",
      "label": "Data Input and Output Formats",
      "required": true,
      "placeholder": "Specify data formats"
    },
    {
      "id": "securityPrivacy",
      "type": "textarea",
      "label": "Security and Privacy Requirements",
      "required": true,
      "placeholder": "Describe security and privacy requirements"
    },
    {
      "id": "performanceRequirements",
      "type": "textarea",
      "label": "Performance Requirements",
      "required": true,
      "placeholder": "Define performance requirements"
    },
    {
      "id": "hardwareSoftware",
      "type": "textarea",
      "label": "Hardware and Software Platforms",
      "required": true,
      "placeholder": "List hardware and software platforms"
    },
    {
      "id": "projectTimeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
      ]
    },
    {
      "id": "projectBudget",
      "type": "text",
      "label": "Project Budget",
      "required": true,
      "placeholder": "Enter project budget"
    },
    {
      "id": "additionalComments",
      "type": "textarea",
      "label": "Additional Comments",
      "required": false,
      "placeholder": "Enter any additional comments"
    }
  ],
};
