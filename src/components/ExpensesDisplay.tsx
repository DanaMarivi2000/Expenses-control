import {formatCurrency} from "../helpers/index"
import {useBudget} from '../hooks/useBudget'
import {categories} from '../data/categories'
import {useMemo} from "react"
import { formatDate } from "../helpers/index"
import ExpenseDetail from "./ExpenseDetail"
const ExpensesDisplay = () => {
  
  const {state}=useBudget()
  const isEmpty=useMemo(()=>state.expenses.length,[state.expenses])


  return (
    <>
      {isEmpty ? (
        <div>
          <p className="text-center font-bold text-2xl text-[#da627d]">Listado de Gastos:</p>
          {state.expenses.map(expense => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </div>
      ) : (
        <div className="shadow-lg rounded-lg p-10 text-center font-bold text-2xl text-[#da627d] bg-white">
          <p>No hay gastos</p>
        </div>
      )}
    </>
  )
}

export default ExpensesDisplay
