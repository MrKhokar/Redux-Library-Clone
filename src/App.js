import store from "./Redux/CustomStore";
import * as actions from "./Redux/Actions";

store.subscrition(() => console.log("State Changes"));
store.dispatch(actions.dataAdded("This is the 1st Entry"));
store.dispatch(actions.dataAdded("This is the 2nd Entry"));
store.dispatch(actions.dataAdded("This is the 3rd Entry"));
console.log(store.getState(), "store updated with data");

store.dispatch(actions.dataResolved(2));
console.log(store.getState(), "resolved data");

store.dispatch(actions.dataDelete(1));
console.log(store.getState(), "delete");
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Redux Clone</h1>
    </div>
  );
}

export default App;
