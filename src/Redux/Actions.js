import * as actions from "./ActionTypes"


export const dataAdded =(descripton)=> ({
    type: actions.DATA_ADDED,
    payload: {
        descripton
    }
})
export const dataDelete = (id) => ({
    type: actions.DATA_REMOVED,
    payload: {
        id
    }
})
export const dataResolved = id => ({
    type: actions.DATA_RESOLVED,
    payload: {
        id
    }
})