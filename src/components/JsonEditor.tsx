import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange, error }) => {
  return (
    <div className="p-4 border-r">
      <h2 className="text-lg font-bold">JSON Editor</h2>
      <JSONInput
        locale={locale}
        placeholder={JSON.parse(value)}
        height="400px"
        width="100%"
        onChange={(data) => {
          if (!data.error) onChange(JSON.stringify(data.jsObject, null, 2));
        }}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonEditor;
