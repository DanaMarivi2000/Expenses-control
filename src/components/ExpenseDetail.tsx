import {useMemo} from 'react'
import type {Expense} from "../types/index"
import { categories } from '../data/categories'
import {formatDate, formatCurrency} from "../helpers/index"
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import {useBudget} from "../hooks/useBudget"

type ExpenseProps={
    expense:Expense
}

const ExpenseDetail = ({expense}:ExpenseProps) => {

 const expenseInfo=useMemo(()=>categories.filter(category=>category.id===expense.categories)[0],[expense])
 const {dispatch}=useBudget()



 const leadingActions=()=>(
  <LeadingActions>
    <SwipeAction
      onClick={()=>dispatch({type:"add-id", payload:{id:expense.id}})}
    >
      Actualizar
    </SwipeAction>
  </LeadingActions>
 )

 const trailingActions=()=>(
  <TrailingActions>
    <SwipeAction
    onClick={()=>dispatch({type:"delete-expense", payload:{id:expense.id}})} destructive={true}>
      Eliminar
    </SwipeAction>
  </TrailingActions>
 )



  return (


        <SwipeableList>
          <SwipeableListItem
          maxSwipe={1}
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
          
          >

          <div className='w-full' key={expense.id}>
               <p className="text-right">{formatDate(expense.date.toString())}</p>
               <div className="flex justify-between items-center gap-4 my-2">
                 <div>
                  <img src={`/icono_${expenseInfo.icon}.svg`} alt={expenseInfo.name} className="w-20"/>
               </div>
               <div className="flex-1 space-y-2">
                 <h1>{expenseInfo.name}</h1>
                 <h2 className="font-bold text-[#da627d] text-xl">{expense.expenseName}</h2>
               </div>
                 <p className="font-bold">{formatCurrency(expense.amount)}</p>
                 </div>
          </div>

          </SwipeableListItem>
        </SwipeableList>
  )
}

export default ExpenseDetail
