import type { BudgetActions, State } from "../types"

export const initialState={
    budget:0,
    modal:false
}

export const budgetReducer=(state:State=initialState, action:BudgetActions)=>{
    if(action.type==="add-budget"){
        return{
            ...state,
            budget:action.payload.budget
        }
    }

    if(action.type==="show-modal"){
        return{
            ...state,
            modal:true
        }
    }

    if(action.type==="close-modal"){
        return{
            ...state,
            modal:!state.modal
        }
    }


    return state
}
