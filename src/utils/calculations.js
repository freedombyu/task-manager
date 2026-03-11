/**
 * Calculation utilities demonstrating recursion
 * Contains recursive algorithms for task priority scoring
 */

/**
 * Calculates priority score using recursive algorithm
 * Demonstrates recursion by processing task text character by character
 * 
 * @param {Object} task - Task object containing text and category
 * @param {number} depth - Current recursion depth (prevents infinite recursion)
 * @returns {number} - Calculated priority score
 */
export const calculatePriorityScore = (task, depth = 0) => {
  // Base case: prevent infinite recursion
  if (depth > 10) {
    return 0;
  }
  
  let score = 0;
  
  // Add points based on category complexity
  if (task.category && task.category !== 'General') {
    score += task.category.length;
  }
  
  // Recursive calculation based on text length
  if (task.text && task.text.length > 0) {
    score += 1;
    
    // Create new task object with remaining text
    const remainingText = task.text.slice(1);
    
    // Recursive call with remaining text
    if (remainingText.length > 0) {
      score += calculatePriorityScore(
        { ...task, text: remainingText }, 
        depth + 1
      );
    }
  }
  
  return score;
};

/**
 * Recursive function to count words in text
 * Additional example of recursion
 * 
 * @param {string} text - Text to count words in
 * @param {number} count - Current word count
 * @returns {number} - Total word count
 */
export const countWordsRecursive = (text, count = 0) => {
  if (!text || text.trim().length === 0) {
    return count;
  }
  
  const words = text.trim().split(' ');
  if (words.length === 1) {
    return count + 1;
  }
  
  // Recursive call with remaining words
  const remaining = words.slice(1).join(' ');
  return countWordsRecursive(remaining, count + 1);
};