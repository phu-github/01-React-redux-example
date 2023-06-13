import logo from './logo.svg';
import './App.css';

// Redux-toolkit: using
import { useSelector, useDispatch } from "react-redux";
import { setTodoList, resetTodoList } from "./Redux/slices/fetchTodoSlice";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);  // state.[name].[initalvariable]



  const handleGetAllTodo = () => {
    dispatch(setTodoList())
  }
  return (
    <div className="App">
        <h1>HELLO REDUX THUNK IN REDUX TOOLKIT</h1>
        <p>Follow by: https://www.youtube.com/watch?v=bxgZe6BVIGI</p>
        <button onClick= {() => handleGetAllTodo()}>GET TODO</button>
    </div>
  );
}

export default App;
