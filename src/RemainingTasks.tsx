import React, { Component } from 'react';

type RemainingTasksProps = {
  toDoVal: string[];
  onDone: (index: number) => void;
};

class RemainingTasks extends Component<RemainingTasksProps> {
  render() {
    const { toDoVal, onDone } = this.props;
    const tasks = toDoVal || [];

    return (
      <div className="mb-4">
        <h2 className="text-xl font-medium">Remaining Tasks</h2>
        {tasks.length > 0 ? (
          <ul className="list-none space-y-2">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                  onChange={() => onDone(index)}
                />
                <span className="text-gray-700">{task}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks remaining</p>
        )}
      </div>
    );
  }
}

export default RemainingTasks;
