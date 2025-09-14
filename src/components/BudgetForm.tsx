import { useMemo, useState } from "react"
import {useBudget} from "../hooks/useBudget"
import type { FormEvent } from "react"

const BudgetForm = () => {
  
  
  const [budget, setBudget]=useState(0)
  const {dispatch}=useBudget()
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setBudget(+e.target.value)
  }


  const isValidBudget=useMemo(()=>{
    return isNaN(budget) || budget<=0
  }, [budget])
  
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    dispatch({type:"add-budget", payload:{budget:budget}})}
  
    return (
    <>
    
         <form className="space-y-5" onSubmit={handleSubmit}>
             <div className="flex flex-col space-y-5 mb-4">
               <label htmlFor="budget" className="text-4xl text-[#ffc8dd] font-bold text-center">Definir Presupuesto</label>
               <input type="number" id="budget" className="w-full bg-white border border-gray-200 p-2 rounded-sm" placeholder="Define tu presupuesto" value={budget} onChange={handleChange}/>
             </div>  
                     <input type="submit" value="Definir Presupuesto" className="bg-[#ffc8dd] hover:bg-[#f4acb7] cursor-pointer w-full p-2 text-white font-black uppercase rounded-md disabled:opacity-40" disabled={isValidBudget}/>
         </form>
         </>
  )
}

export default BudgetForm
