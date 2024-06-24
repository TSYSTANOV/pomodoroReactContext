import "./App.css";
import { Controls } from "./components/Controls/Controls";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Title } from "./components/Pomodoro/Title";
import { Timer } from "./components/Timer/Timer";
import { ActiveToDoCount } from "./components/ToDoList/ActiveToDo";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  return (
    <>
      <div className="container">
        <ToDoList />
        <div className="timer">
          <Header />
          <Navigation />
          <Timer />
          <Title />
          <Controls />
        </div>
        <ActiveToDoCount />
      </div>
    </>
  );
}

export default App;
