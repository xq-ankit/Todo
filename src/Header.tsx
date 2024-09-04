import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4">
          <h1 className="text-2xl font-semibold text-center">Task Manager</h1>
        </div>
      </header>
    );
  }
}

export default Header;