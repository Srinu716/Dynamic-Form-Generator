import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormRenderer from './components/FormRenderer';
import { FormSchema } from '../src/types';
import { initialSchema } from './schema';

const App: React.FC = () => {
  const [json, setJson] = useState(JSON.stringify(initialSchema, null, 2));
  const [schema, setSchema] = useState<FormSchema>(initialSchema);
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = (newJson: string) => {
    setJson(newJson);
    try {
      setSchema(JSON.parse(newJson));
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="flex h-screen">
      <JsonEditor value={json} onChange={handleJsonChange} error={error} />
      <div className="w-1/2 p-4">
        <FormRenderer schema={schema} />
      </div>
    </div>
  );
};

export default App;
