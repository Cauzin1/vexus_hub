import React, { useState, useCallback } from 'react';
import { ClipboardIcon, CheckIcon } from './Icons';

export const FinalCTAForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Use a targeted validation function
  const validateField = useCallback((fieldName: 'name' | 'email', value: string) => {
    let error = '';
    if (fieldName === 'name') {
      if (!value.trim()) error = 'Name is required.';
    } else if (fieldName === 'email') {
      if (!value.trim()) {
        error = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email is invalid.';
      }
    }
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  }, []);
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: 'name' | 'email'; value: string };
    validateField(name, value);
  };

  const validateForm = useCallback(() => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Pulsating effect on the button while "submitting"
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 1500); // Simulate network request
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText('VEXUS-BETA-2024');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (submitted) {
    return (
      <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-8 text-center animate-slow-pulse">
        <h3 className="text-2xl font-bold text-white">Welcome to the Nucleus!</h3>
        <p className="mt-2 text-gray-300">Your access code is ready. Thank you for joining the revolution.</p>
        <div className="mt-6 flex justify-center">
            <button
              onClick={handleCopy}
              className="bg-[#00FFC1] text-[#0A0A16] font-bold py-3 px-6 rounded-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
            >
              {copied ? <CheckIcon className="w-6 h-6"/> : <ClipboardIcon className="w-6 h-6" />}
              <span>{copied ? 'Copied!' : 'Copy Beta Access'}</span>
            </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="relative">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          className={`w-full bg-[#1a1a2e] border-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors duration-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-[#6E3AFF] focus:ring-[#6E3AFF]'}`}
        />
        {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
      </div>
       <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          className={`w-full bg-[#1a1a2e] border-2 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors duration-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-[#6E3AFF] focus:ring-[#6E3AFF]'}`}
        />
        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
      </div>
      <div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#6E3AFF] hover:bg-purple-600 text-white font-bold py-4 px-10 rounded-lg text-lg uppercase tracking-widest transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Access Beta'
          )}
        </button>
      </div>
    </form>
  );
};
