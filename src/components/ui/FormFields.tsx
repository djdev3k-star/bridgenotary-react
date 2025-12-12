import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export function InputField({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  error,
  className = '',
}: InputFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border rounded transition-colors
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-primary'}
          focus:outline-none focus:ring-2 focus:ring-primary/20`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
  className?: string;
}

export function SelectField({
  label,
  name,
  options,
  required = false,
  error,
  className = '',
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        className={`w-full p-3 border rounded transition-colors
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-primary'}
          focus:outline-none focus:ring-2 focus:ring-primary/20`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
  rows?: number;
}

export function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
  error,
  className = '',
  rows = 4,
}: TextAreaFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border rounded transition-colors
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-primary'}
          focus:outline-none focus:ring-2 focus:ring-primary/20`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface CheckboxFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
}

export function CheckboxField({
  label,
  name,
  required = false,
  error,
  className = '',
}: CheckboxFieldProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          name={name}
          id={name}
          required={required}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
      </div>
      <label htmlFor={name} className="ml-3 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
