import { Component, memo } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-800 text-white py-4 px-4 md:px-8">
        <div className="flex justify-between">
          <p className="text-sm">© Copyright 2024 | Task_Manager</p>
          <p className="text-sm">Powered by xq_ankit</p>
        </div>
      </footer>
    );
  }
}

export default memo(Footer);