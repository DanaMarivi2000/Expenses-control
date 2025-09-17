import type { BudgetActions, State } from "../types"
import { v4 as uuidv4 } from "uuid"
import type { Expense } from "../types"


const initialBudget=():number=>{
    const localStorageBudget=localStorage.getItem("budget")
    return localStorageBudget?+localStorageBudget:0
}

const localStorageExpenses=():Expense[]=>{
    const getStorage=localStorage.getItem("expenses")
    return getStorage?JSON.parse(getStorage):[]
}


export const initialState={
    budget:initialBudget(),
    modal:false,
    expenses: localStorageExpenses(),
    activeId:"",
    idCategory:""
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

    if(action.type==="reset-app"){
        return{
            ...state,
            budget:0,
            expenses:[],
        }
    }

    if(action.type==="filter-by-category"){
        
        return{
            ...state,
            idCategory:action.payload.id,
        }
    }

    return state
}
