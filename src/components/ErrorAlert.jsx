/**
 * Error Alert Component
 * Displays validation errors to the user
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorAlert = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 animate-pulse">
      <AlertCircle size={20} />
      <span>{error}</span>
    </div>
  );
};

export default ErrorAlert;