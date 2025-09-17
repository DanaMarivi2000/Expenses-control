import { useBudget } from '../hooks/useBudget'
import { useMemo } from "react"
import ExpenseDetail from "./ExpenseDetail"

const ExpensesDisplay = () => {
  
  const {state}=useBudget()

  const filteredExpenses=state.expenses.filter(expense=>expense.categories===state.idCategory)
  const expenses=state.idCategory?filteredExpenses:state.expenses
  const isEmpty=useMemo(()=>expenses.length,[expenses])

  

  return (
    <>
      {isEmpty ? (
      <div className="mt-5">
          <p className="text-center font-bold text-2xl text-[#da627d]">Listado de Gastos:</p>
          {expenses.map(expense => (
            <div key={expense.id} className="shadow-lg rounded-lg p-10" >    
              <ExpenseDetail key={expense.id} expense={expense} />
            </div>
          ))}
      </div>
      ) : (
        <div className="shadow-lg rounded-lg p-10 text-center font-bold text-2xl text-[#da627d]">
          <p>No hay gastos</p>
        </div>
      )}
    </>
  )
}

export default ExpensesDisplay
