import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ value, onChange, error }) => {
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  // Handle Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopyMessage('Copied!');
      setTimeout(() => setCopyMessage(null), 2000);
    });
  };

  // Handle Download
  const handleDownload = () => {
    const blob = new Blob([value], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form-schema.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 border-r">
      <h2 className="text-lg font-bold">JSON Editor</h2>
      <JSONInput
        locale={locale}
        placeholder={JSON.parse(value)}
        height="400px"
        width="100%"
        onChange={(data: any) => {
          if (!data.error) onChange(JSON.stringify(data.jsObject, null, 2));
        }}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4 flex items-center gap-4">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Copy JSON
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Download JSON
        </button>
      </div>

      {/* Copy Message */}
      {copyMessage && (
        <p className="mt-2 text-green-600 font-semibold">{copyMessage}</p>
      )}
    </div>
  );
};

export default JsonEditor;
