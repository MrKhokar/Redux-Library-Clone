import DataReducer from "./Reducers";

const store = (DataReducer) => {
    let state;
    let listners=[]
  function getState() {
    return state;
  }
    function subscrition(listner) {
        listners.push(listner)
    }
  function dispatch(action) {
      state = DataReducer(state, action)
      for (let i = 0; i < listners.length; i++){
          listners[i]()
      }
  }
  return {
    getState,
      dispatch,
    subscrition
  };
};
export default store(DataReducer);
