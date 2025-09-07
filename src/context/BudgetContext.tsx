import { createContext, useReducer, type Dispatch } from "react"
import { budgetReducer, initialState } from "../reducers/expenses-reducer"
import type { BudgetActions, State } from "../types"
import type { ReactNode } from "react"


type BudgetContextProps={
    state:State,
    dispatch:Dispatch<BudgetActions>
}

type BudgetProviderProps={
    children:ReactNode
}



export const BudgetContext=createContext<BudgetContextProps>({} as BudgetContextProps)


export const BudgetProvider=({children}:BudgetProviderProps)=>{
    
    const [state, dispatch]=useReducer(budgetReducer, initialState)

    return(
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    )
}