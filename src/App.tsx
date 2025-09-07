import { useMemo, useReducer } from "react"
import BudgetForm from "./components/BudgetForm"
import { budgetReducer, initialState } from "./reducers/expenses-reducer"
import { useBudget } from "./hooks/useBudget"
// import {useBudget} from "./hooks/useBudget"
import ExpensesComponent from "./components/ExpensesComponent"

function App() {

  // const [state, dispatch]=useReducer(budgetReducer, initialState)


  // const {state, dispatch}=useBudget()



  const {state} =useBudget()

  const isValidBudget=useMemo(()=>{
    return state.budget > 0
  },[state.budget])

  return (
    <>
    <header className="bg-[#f4acb7] py-8 max-h-72" >

     <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de gastos</h1>
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
    
    {isValidBudget ? (<ExpensesComponent/>) : (<BudgetForm />) }
    
    </div>
      
    </header>
    </>
  )
}

export default App
