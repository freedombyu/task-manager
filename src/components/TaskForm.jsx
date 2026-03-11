/**
 * Task Form Component
 * Handles task input and creation
 */

import React from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ taskInput, setTaskInput, categoryInput, setCategoryInput, onAddTask }) => {
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <div className="flex flex-col md:flex-row gap-3">
        {/* Task Description Input */}
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter task description..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Task description"
        />
        
        {/* Category Input */}
        <input
          type="text"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Category (optional)"
          className="md:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Task category"
        />
        
        {/* Add Button */}
        <button
          onClick={onAddTask}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-semibold"
          aria-label="Add new task"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;