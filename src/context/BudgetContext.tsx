import { createContext, useReducer, type Dispatch } from "react"
import { budgetReducer, initialState } from "../reducers/expenses-reducer"
import type { BudgetActions, State } from "../types"
import type { ReactNode} from "react"
import { useMemo } from "react"



type BudgetContextProps={
    state:State,
    dispatch:Dispatch<BudgetActions>,
    presupuesto:number,
    gastado:number,
    disponible:number,
}

type BudgetProviderProps={
    children:ReactNode
}



export const BudgetContext=createContext<BudgetContextProps>({} as BudgetContextProps)


export const BudgetProvider=({children}:BudgetProviderProps)=>{
    
    const [state, dispatch]=useReducer(budgetReducer, initialState)

    
  const presupuesto=state.budget
  const gastado=useMemo(()=>state.expenses.reduce((total, expense)=>expense.amount+total,0),[state.expenses])
  const disponible=presupuesto-gastado


    return(
        <BudgetContext.Provider value={{state, dispatch, presupuesto, gastado, disponible}}>
            {children}
        </BudgetContext.Provider>
    )
}