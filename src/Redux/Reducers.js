import * as actions from "./ActionTypes";
let lastId =0
 const DataReducer = (state = [], action) => {
  switch (action.type) {
    case actions.DATA_ADDED:
      return [...state, {id:++lastId,resolved:false,descrition:action.payload.descripton}];
    case actions.DATA_REMOVED:
      return [...state.filter((bug) => bug.id !== action.payload.id)];
    case actions.DATA_RESOLVED:
      return [
        ...state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug,resolved:true }))
      ];
    default:
      return state;
  }
 };

 export default DataReducer
