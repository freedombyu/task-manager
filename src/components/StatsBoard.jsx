import { Tag, CheckCircle, Circle } from "lucide-react";

const StatsDashboard = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {/* Total */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Total Tasks</p>
          <p className="text-3xl font-bold text-indigo-600">{stats.total}</p>
        </div>
        <Tag className="text-indigo-400" size={32} />
      </div>
    </div>

    {/* Completed */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Completed</p>
          <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
        </div>
        <CheckCircle className="text-green-400" size={32} />
      </div>
    </div>

    {/* Pending */}
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Pending</p>
          <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
        </div>
        <Circle className="text-orange-400" size={32} />
      </div>
    </div>
  </div>
);

export default StatsDashboard;
