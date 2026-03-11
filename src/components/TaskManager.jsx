/**
 * Main Task Manager Component
 * Orchestrates all child components and manages application state
 * Demonstrates: State Management, Event Handling, Component Composition
 */

import React, { useState, useEffect } from 'react';
import Header from './Header';
import StatsBoard from './StatsBoard';
import ErrorAlert from './ErrorAlert';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { validateTask, validateCategory } from '../utils/validation';
import { calculatePriorityScore } from '../utils/calculations';
import { calculateStats, getUniqueCategories } from '../utils/helpers';

const TaskManager = () => {
  // State management
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  // Update statistics whenever tasks change (ES6 Array functions)
  useEffect(() => {
    const newStats = calculateStats(tasks);
    setStats(newStats);
  }, [tasks]);

  /**
   * Add a new task with validation
   * Demonstrates exception handling
   */
  const addTask = () => {
    try {
      // Validate task input (may throw error)
      validateTask(taskInput);
      
      // Validate and sanitize category
      const category = validateCategory(categoryInput);

      // Create new task object
      const newTask = {
        id: Date.now(),
        text: taskInput.trim(),
        category: category,
        completed: false,
        createdAt: new Date().toISOString(),
        priorityScore: 0
      };

      // Calculate priority using recursion
      newTask.priorityScore = calculatePriorityScore(newTask);

      // Add task to state
      setTasks(prevTasks => [...prevTasks, newTask]);
      
      // Clear inputs
      setTaskInput('');
      setCategoryInput('');
      setError('');

      // Log success
      console.log('Task added successfully:', newTask);
    } catch (err) {
      // Handle validation errors
      setError(err.message);
      
      // Auto-clear error after 3 seconds
      setTimeout(() => setError(''), 3000);
      
      console.error('Task validation error:', err.message);
    }
  };

  /**
   * Toggle task completion status
   * Demonstrates ES6 array map function
   */
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Delete a task
   * Demonstrates ES6 array filter function
   */
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    console.log(`Task ${id} deleted`);
  };

  // Get unique categories for display
  const uniqueCategories = getUniqueCategories(tasks);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Application Header */}
        <Header />

        {/* Statistics Dashboard */}
        <StatsBoard stats={stats} />

        {/* Error Alert */}
        <ErrorAlert error={error} />

        {/* Task Input Form */}
        <TaskForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
          onAddTask={addTask}
        />

        {/* Categories Overview */}
        {uniqueCategories.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {uniqueCategories.map(category => {
                const count = tasks.filter(t => t.category === category).length;
                return (
                  <span
                    key={category}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {category} ({count})
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {/* Technical Notes */}
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <h3 className="font-semibold text-indigo-900 mb-2">
            Technical Implementation Notes:
          </h3>
          <ul className="text-sm text-indigo-800 space-y-1">
            <li>✓ <strong>Display Output:</strong> React rendering to browser DOM</li>
            <li>✓ <strong>ES6 Array Functions:</strong> filter(), map(), sort(), Set</li>
            <li>✓ <strong>Recursion:</strong> calculatePriorityScore() in calculations.js</li>
            <li>✓ <strong>Exception Handling:</strong> try-catch in validation.js</li>
            <li>✓ <strong>External Library:</strong> Lucide React for icons</li>
            <li>✓ <strong>DOM & CSS:</strong> Dynamic React components with Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;