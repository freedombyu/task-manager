/**
 * Individual Task Item Component
 * Displays a single task with actions
 */

import React from 'react';
import { CheckCircle, Circle, Trash2, Calendar, Tag } from 'lucide-react';
import { formatDate } from '../utils/helpers';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border-2 transition ${
        task.completed
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-200 hover:border-indigo-300'
      }`}
    >
      {/* Complete/Incomplete Button */}
      <button
        onClick={() => onToggle(task.id)}
        className="flex-shrink-0 transition transform hover:scale-110"
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed ? (
          <CheckCircle className="text-green-600" size={24} />
        ) : (
          <Circle className="text-gray-400" size={24} />
        )}
      </button>

      {/* Task Content */}
      <div className="flex-1">
        <p
          className={`font-medium ${
            task.completed ? 'line-through text-gray-500' : 'text-gray-800'
          }`}
        >
          {task.text}
        </p>
        
        {/* Task Metadata */}
        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Tag size={14} />
            {task.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(task.createdAt)}
          </span>
          <span className="text-indigo-600 font-semibold">
            Priority: {task.priorityScore}
          </span>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        aria-label="Delete task"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TaskItem;