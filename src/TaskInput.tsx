import React, { Component, ChangeEvent } from 'react';

type TaskInputProps = {
  setTakeInput: (value: boolean) => void;
  updateVal: (value: string) => void;
};

type TaskInputState = {
  inputValue: string;
};

class TaskInput extends Component<TaskInputProps, TaskInputState> {
  constructor(props: TaskInputProps) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  handleSave() {
    const { inputValue } = this.state;
    const { updateVal } = this.props;
    if (inputValue.trim()) {
      updateVal(inputValue);
      this.setState({ inputValue: '' });
    }
  }

  handleCancel() {
    const { setTakeInput } = this.props;
    setTakeInput(false);
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div className="border flex flex-col rounded-md pl-4 w-full">
        <h1 className="text-xl py-5">Create a todo</h1>
        <input
          type="text"
          placeholder="Add a New Task"
          className="border focus:outline-blue-500"
          onChange={this.handleInputChange}
          value={inputValue}
        />
        <div className="flex space-x-10 my-5">
          <button
            onClick={this.handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white border rounded py-2 px-3 disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            Save
          </button>
          <button
            className="text-black border rounded py-2 px-3"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default TaskInput;
