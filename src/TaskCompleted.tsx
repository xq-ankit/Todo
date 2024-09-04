import React, { Component } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineRedo } from "react-icons/ai";

type ThingsDoneProps = {
  thingsDone: string[];
  AgainDo: (value: number) => void;
  removeItem: (value: number) => void;
};

class TaskCompleted extends Component<ThingsDoneProps> {
  render() {
    const { thingsDone, AgainDo, removeItem } = this.props;

    return (
      <div className="mt-4">
        <h2 className="text-xl font-medium">Completed Tasks</h2>
        {thingsDone.length > 0 ? (
          <ul className="list-none space-y-2">
            {thingsDone.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded"
              >
                <p className="text-gray-700 line-through">{task}</p>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-2 hover:bg-gray-200"
                    onClick={() => AgainDo(index)}
                  >
                    <AiOutlineRedo className="text-xl text-blue-500" />
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full p-2 hover:bg-gray-200"
                    onClick={() => removeItem(index)}
                  >
                    <CiCircleRemove className="text-xl text-red-500" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No completed tasks yet</p>
        )}
      </div>
    );
  }
}

export default TaskCompleted;
