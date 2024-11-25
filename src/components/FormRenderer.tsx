import React from 'react';
import { FormSchema } from '../types';
import { useForm, SubmitHandler } from 'react-hook-form';

const FormRenderer: React.FC<{ schema: FormSchema }> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Record<string, any>> = (data) => console.log(data);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">{schema.formTitle}</h2>
      <p className="text-gray-600">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        {schema.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.id}
                {...register(field.id, { required: field.required })}
                className="block w-full mt-1 border rounded"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'radio' ? (
              field.options?.map((option) => (
                <label key={option.value} className="inline-block mr-4">
                  <input
                    type="radio"
                    value={option.value}
                    {...register(field.id, { required: field.required })}
                  />{' '}
                  {option.label}
                </label>
              ))
            ) : (
              <input
                id={field.id}
                placeholder={field.placeholder}
                {...register(field.id, { required: field.required })}
                className="block w-full mt-1 border rounded"
              />
            )}
            {errors[field.id] && <p className="text-red-500">This field is required.</p>}
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRenderer;
