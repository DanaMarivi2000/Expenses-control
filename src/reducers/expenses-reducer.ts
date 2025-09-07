import type { BudgetActions, State } from "../types"

export const initialState={
    budget:0
}

export const budgetReducer=(state:State=initialState, action:BudgetActions)=>{
    if(action.type==="add-budget"){
        return{
            ...state,
            budget:action.payload.budget
        }
    }
    return state
}
