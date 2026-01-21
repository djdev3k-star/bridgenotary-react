/**
 * Reusable form field components for request forms
 * Follows existing design patterns from contact/booking forms
 */

import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'datetime-local';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  disabled?: boolean;
}

interface TextAreaFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  rows?: number;
  disabled?: boolean;
}

interface SelectFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  error?: string | null;
  disabled?: boolean;
}

interface CheckboxFieldProps {
  id: string;
  name: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string | null;
  disabled?: boolean;
}

/**
 * Input field component
 */
export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-charcoal mb-3">
      {label}
      {required && <span className="text-professional-blue ml-1">*</span>}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-2.5 bg-white text-charcoal border-2 rounded-lg transition-all duration-200 focus:outline-none ${
        error
          ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100'
          : 'border-professional-blue/20 hover:border-professional-blue/30 focus:border-professional-blue focus:ring-4 focus:ring-professional-blue/10'
      } ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200' : ''} placeholder:text-charcoal/40`}
    />
    {error && (
      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586l-6.687-6.687a1 1 0 00-1.414 1.414l7.071 7.071a1 1 0 001.414 0l9.9-9.9z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

/**
 * Textarea field component
 */
export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  rows = 4,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-charcoal mb-3">
      {label}
      {required && <span className="text-professional-blue ml-1">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`w-full px-4 py-2.5 bg-white text-charcoal border-2 rounded-lg transition-all duration-200 focus:outline-none resize-none ${
        error
          ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100'
          : 'border-professional-blue/20 hover:border-professional-blue/30 focus:border-professional-blue focus:ring-4 focus:ring-professional-blue/10'
      } ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200' : ''} placeholder:text-charcoal/40`}
    />
    {error && (
      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586l-6.687-6.687a1 1 0 00-1.414 1.414l7.071 7.071a1 1 0 001.414 0l9.9-9.9z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

/**
 * Select dropdown field component
 */
export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-charcoal mb-3">
      {label}
      {required && <span className="text-professional-blue ml-1">*</span>}
    </label>
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2.5 bg-white text-charcoal border-2 rounded-lg transition-all duration-200 focus:outline-none appearance-none ${
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100'
            : 'border-professional-blue/20 hover:border-professional-blue/30 focus:border-professional-blue focus:ring-4 focus:ring-professional-blue/10'
        } ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200' : ''} pr-10`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-professional-blue pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
    {error && (
      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586l-6.687-6.687a1 1 0 00-1.414 1.414l7.071 7.071a1 1 0 001.414 0l9.9-9.9z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

/**
 * Checkbox field component
 */
export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  required = false,
  error,
  disabled = false,
}) => (
  <div>
    <div className="flex items-start gap-3">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`mt-1 w-5 h-5 rounded border-2 border-professional-blue/30 text-professional-blue focus:ring-4 focus:ring-professional-blue/10 cursor-pointer transition-all ${
          error ? 'border-red-300' : 'hover:border-professional-blue/50'
        } ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      />
      <label htmlFor={id} className={`text-sm text-charcoal ${disabled ? 'opacity-50' : ''}`}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
    {error && (
      <p className="text-red-600 text-sm mt-1 ml-6 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18.101 12.93a1 1 0 00-1.414-1.414L10 15.586l-6.687-6.687a1 1 0 00-1.414 1.414l7.071 7.071a1 1 0 001.414 0l9.9-9.9z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

/**
 * Error alert component
 */
interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <div className="text-sm text-red-700 p-4 bg-red-50 border border-red-200 mb-6 flex items-center gap-3">
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    {message}
  </div>
);

/**
 * Success alert component
 */
interface SuccessAlertProps {
  message: string;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ message }) => (
  <div className="text-sm text-green-700 p-4 bg-green-50 border border-green-200 mb-6 flex items-center gap-3">
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    {message}
  </div>
);

/**
 * Loading spinner component
 */
interface LoadingSpinnerProps {
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Submitting...' }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 border-2 border-professional-blue border-t-transparent rounded-full animate-spin" />
    <span>{text}</span>
  </div>
);
