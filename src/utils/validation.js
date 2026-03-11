/**
 * Validation utilities for task management
 * Demonstrates exception handling with try-catch blocks
 */

/**
 * Validates task input with comprehensive error checking
 * @param {string} taskText - The task description to validate
 * @throws {Error} - Throws error with specific validation message
 * @returns {boolean} - Returns true if validation passes
 */
export const validateTask = (taskText) => {
  try {
    // Check for empty or whitespace-only input
    if (!taskText || taskText.trim().length === 0) {
      throw new Error('Task description cannot be empty');
    }
    
    // Check minimum length
    if (taskText.trim().length < 3) {
      throw new Error('Task description must be at least 3 characters long');
    }
    
    // Check maximum length
    if (taskText.length > 100) {
      throw new Error('Task description cannot exceed 100 characters');
    }
    
    // Check for special characters that might cause issues
    const invalidChars = /[<>]/;
    if (invalidChars.test(taskText)) {
      throw new Error('Task description contains invalid characters (< or >)');
    }
    
    return true;
  } catch (error) {
    // Re-throw the error to be handled by the calling function
    throw error;
  }
};

/**
 * Validates category input
 * @param {string} category - The category name to validate
 * @returns {string} - Returns sanitized category or default value
 */
export const validateCategory = (category) => {
  try {
    if (!category || category.trim().length === 0) {
      return 'General';
    }
    
    if (category.length > 20) {
      throw new Error('Category name cannot exceed 20 characters');
    }
    
    return category.trim();
  } catch (error) {
    console.warn('Category validation error:', error.message);
    return 'General';
  }
};