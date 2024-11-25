import React from 'react';
import { FormSchema } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';

const FormRenderer: React.FC<{ schema: FormSchema }> = ({ schema }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    console.log('Form Submission:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">{schema.formTitle}</h2>
      <p className="text-gray-600 mb-6">{schema.formDescription}</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field) => (
          <div key={field.id} className="space-y-1">
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            
            {/* Input Fields Based on Type */}
            {field.type === 'select' ? (
              <select
                id={field.id}
                {...register(field.id, { required: field.required })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : field.type === 'radio' ? (
              field.options?.map((option) => (
                <label key={option.value} className="inline-block mr-4">
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))
            ) : (
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            )}

            {/* Error Messages */}
            {errors[field.id] && (
              <p className="text-sm text-red-500">
                {field.label} is required.
              </p>
            )}
          </div>
        ))}

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded shadow hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRenderer;
