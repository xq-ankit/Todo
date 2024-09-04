import { Component } from "react";
import TaskCompleted from "./TaskCompleted";
import RemainingTasks from "./RemainingTasks";
import TaskInput from "./TaskInput";
import Header from "./Header";
import Footer from "./Footer";


type StateProps = {
  takeInput: boolean;
  toDo: string[];
  Done: string[];
}

class App extends Component<{}, StateProps> {

  constructor(props: {}) {
    super(props);
    const Data = localStorage.getItem("toDoItems") || "[]";
    const storedData = JSON.parse(Data);

    this.state = {
      takeInput: false,
      toDo: storedData,
      Done: [],
    }

    this.setComponent = this.setComponent.bind(this);
    this.updateVal = this.updateVal.bind(this);
    this.onDone = this.onDone.bind(this);
    this.handleAgainDo = this.handleAgainDo.bind(this);
    this.handleRemoveItems = this.handleRemoveItems.bind(this);
  }

  setComponent() {
    this.setState({ takeInput: true });
  }

  updateVal(newVal: string) {
    if (newVal.length > 0) {
      const newToDo = [...this.state.toDo, newVal];
      this.setState({ toDo: newToDo, takeInput: false });
    }
  }

  componentDidUpdate(prevState: StateProps) {
    if (prevState.toDo !== this.state.toDo) {
      localStorage.setItem('toDoItems', JSON.stringify(this.state.toDo));
    }
  }

  onDone(index: number) {
    const newDo = [...this.state.toDo];
    const completed = newDo.splice(index, 1)[0];
    this.setState({ toDo: newDo });

    setTimeout(() => {
      this.setState((prevState) => ({
        Done: [...prevState.Done, completed],
      }));
    }, 100);
  }

  handleAgainDo(index: number) {
    const newDone = [...this.state.Done];
    const taskToReAdd = newDone.splice(index, 1)[0];
    this.setState({ Done: newDone });

    setTimeout(() => {
      this.setState((prevState) => ({
        toDo: [...prevState.toDo, taskToReAdd],
      }));
    }, 100);
  }

  handleRemoveItems(index: number) {
    const newDone = [...this.state.Done];
    newDone.splice(index, 1);
    this.setState({ Done: newDone });
  }

  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex justify-center items-center">
          <div className="max-w-7xl p-4">
            <h1 className="text-3xl font-bold text-center">Things to get Done</h1>
            <div className="flex flex-col space-y-4">
              <RemainingTasks toDoVal={this.state.toDo} onDone={this.onDone} />
              <div className="flex justify-center">
                {this.state.takeInput ? (
                  <TaskInput
                    setTakeInput={(value) => this.setState({ takeInput: value })}
                    updateVal={this.updateVal}
                  />
                ) : (
                  <button
                    onClick={this.setComponent}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add a todo
                  </button>
                )}
              </div>
              <TaskCompleted
                thingsDone={this.state.Done}
                AgainDo={this.handleAgainDo}
                removeItem={this.handleRemoveItems}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
