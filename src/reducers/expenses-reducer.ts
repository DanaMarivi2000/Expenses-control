import type { BudgetActions, State } from "../types"
import {v4 as uuidv4} from "uuid"



export const initialState={
    budget:0,
    modal:false,
    expenses:[],
    activeId:"",
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
            modal:false,
            activeId:""
        }
    }

    if(action.type==="add-expense"){
        
        const id=uuidv4()
        const newExpense={...action.payload.expense, id}
            return{
                ...state,
                expenses:[...state.expenses, newExpense],
            }
    }


    if(action.type==="delete-expense"){
        
        const expenses=state.expenses.filter(expense=>expense.id!==action.payload.id)
        return{
            ...state,
            expenses,
        }
    }

    if(action.type==="add-id"){

        return{
            ...state,
            activeId:action.payload.id,
            modal:true,
        }
    }

    if(action.type==="update-expense"){
        const expenseExists=state.expenses.find(expense=>expense.id===state.activeId)
        if(expenseExists){
            const expenses=state.expenses.map(expense=>expense.id===action.payload.expense.id?action.payload.expense:expense)
            return{
                ...state,
                expenses,
                activeId:"",
                modal:false,
            }
        }
    }

    return state
}
