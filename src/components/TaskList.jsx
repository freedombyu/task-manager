/**
 * Task List Component
 * Manages and displays the list of tasks
 */

import React from 'react';
import { Circle } from 'lucide-react';
import TaskItem from './TaskItem';
import { sortTasksByPriority } from '../utils/helpers';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  // Sort tasks by priority score
  const sortedTasks = sortTasksByPriority(tasks);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Tasks (Sorted by Priority Score)
      </h2>
      
      {sortedTasks.length === 0 ? (
        // Empty state
        <div className="text-center py-12 text-gray-400">
          <Circle size={48} className="mx-auto mb-3 opacity-50" />
          <p className="text-lg">No tasks yet. Add your first task above!</p>
        </div>
      ) : (
        // Task list
        <div className="space-y-3">
          {sortedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;