import logo from "./logo.svg";
import "./App.css";

// Redux-toolkit: using
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Redux/slices/countSlice";
import { logIn, logOut } from "./Redux/slices/authSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is {count}</h1>
      <div className="button">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increase by 10</button>
        <h2>For Logged in users only</h2>
        <p>Log in to see a secret about me</p>
        <button onClick={() => dispatch(logIn())}>Login</button>
        <button onClick={() => dispatch(logOut())}>Logout</button>
        {isLogin ? (
          <div>
            <p>
              I don't more than 50% of redux. But if you know 50% of it, you're
              like a Superman.
            </p>
          </div>
        ) : (
          ""
        )}
        <p>
          Follow by:
          https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/
        </p>
      </div>
    </div>
  );
}

export default App;
