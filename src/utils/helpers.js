/**
 * Helper utilities demonstrating ES6 array functions
 * Contains functions that use modern JavaScript array methods
 */

/**
 * Get unique categories from task array
 * Demonstrates: map(), Set, spread operator
 * 
 * @param {Array} tasks - Array of task objects
 * @returns {Array} - Array of unique category names
 */
export const getUniqueCategories = (tasks) => {
  // Use map to extract categories, Set to get unique values
  return [...new Set(tasks.map(task => task.category))];
};

/**
 * Filter tasks by completion status
 * Demonstrates: filter()
 * 
 * @param {Array} tasks - Array of task objects
 * @param {boolean} completed - Filter for completed or pending tasks
 * @returns {Array} - Filtered array of tasks
 */
export const filterTasksByStatus = (tasks, completed) => {
  return tasks.filter(task => task.completed === completed);
};

/**
 * Sort tasks by priority score
 * Demonstrates: sort()
 * 
 * @param {Array} tasks - Array of task objects
 * @returns {Array} - Sorted array (highest priority first)
 */
export const sortTasksByPriority = (tasks) => {
  return [...tasks].sort((a, b) => b.priorityScore - a.priorityScore);
};

/**
 * Get tasks by category
 * Demonstrates: filter()
 * 
 * @param {Array} tasks - Array of task objects
 * @param {string} category - Category to filter by
 * @returns {Array} - Filtered array of tasks
 */
export const getTasksByCategory = (tasks, category) => {
  return tasks.filter(task => task.category === category);
};

/**
 * Calculate statistics from task array
 * Demonstrates: reduce(), filter()
 * 
 * @param {Array} tasks - Array of task objects
 * @returns {Object} - Statistics object
 */
export const calculateStats = (tasks) => {
  return {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
    categories: getUniqueCategories(tasks).length
  };
};

/**
 * Format date to readable string
 * 
 * @param {string} isoDate - ISO date string
 * @returns {string} - Formatted date string
 */
export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};