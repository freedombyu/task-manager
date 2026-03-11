/**
 * Main Application Component
 * Serves as the root component that renders the TaskManager
 */

import React from 'react';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <TaskManager />
    </div>
  );
}

export default App;