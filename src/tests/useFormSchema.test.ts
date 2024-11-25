// src/tests/useFormSchema.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import useFormSchema from '../hooks/useFormSchema';

describe('useFormSchema Hook', () => {
  it('should return the initial schema', () => {
    const { result } = renderHook(() => useFormSchema());
    expect(result.current.schema.formTitle).toBe("Project Requirements Survey");
  });

  it('should update schema on valid JSON input', () => {
    const { result } = renderHook(() => useFormSchema());
    const newSchema = JSON.stringify({
      formTitle: "Updated Title",
      formDescription: "Updated Description",
      fields: []
    });

    act(() => {
      result.current.updateSchema(newSchema);
    });

    expect(result.current.schema.formTitle).toBe("Updated Title");
  });

  it('should set error for invalid JSON', () => {
    const { result } = renderHook(() => useFormSchema());
    const invalidJson = "{ formTitle: 'Invalid' "; // malformed JSON

    act(() => {
      result.current.updateSchema(invalidJson);
    });

    expect(result.current.error).toBe('Invalid JSON schema');
  });
});
