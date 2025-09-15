import { useMemo, useEffect } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
// import {useBudget} from "./hooks/useBudget"
import ExpensesComponent from "./components/ExpensesComponent"
import ExpenseModal from "./components/ExpensesModal"
import ExpensesDisplay from "./components/ExpensesDisplay"
function App() {

  // const [state, dispatch]=useReducer(budgetReducer, initialState)


  // const {state, dispatch}=useBudget()



  const {state} =useBudget()

  const isValidBudget=useMemo(()=>{
    return state.budget > 0
  },[state.budget])


  useEffect(()=>{

      localStorage.setItem("expenses", JSON.stringify(state.expenses))
      localStorage.setItem("budget",state.budget.toString())
    
    },[state])


  return (
    <>
    <header className="bg-[#f4acb7] py-8 max-h-72" >
     <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de gastos</h1>
    </header>
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
    {isValidBudget ? (<ExpensesComponent/>) : (<BudgetForm />) }
    </div>
     {isValidBudget && (
       <main className="max-w-3xl mx-auto py-10 bg-white mt-10">
        <ExpensesDisplay/>
        <ExpenseModal/>
      </main>
      
    )}
    </>
  )
}

export default App
