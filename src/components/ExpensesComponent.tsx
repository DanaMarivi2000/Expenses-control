import AmountDisplay from "./AmountDisplay"
import { v4 as uuidv4 } from "uuid"
import { formatCurrency } from "../helpers"
import { useBudget } from "../hooks/useBudget"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ExpensesComponent = () => {
  
  const {presupuesto, gastado, disponible, dispatch}= useBudget()
  const percentage=+((gastado/presupuesto).toFixed(2))*100
  


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="flex justify-center items-center">
        <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#fb6f92',
          trailColor: '#f5c6d1',
          textSize:8,
          textColor:'#fb6f92',
        })}
        text={`${percentage}% Gastado`}
        
        />
      </div>
      
      <div className="flex flex-col justify-center items-center gap-8">
      
      <button className="bg-[#ff8fab] w-full p-2 text-white uppercase font-bold" onClick={()=>dispatch({type:"reset-app"})}>Resetear App</button>
      
      <AmountDisplay 
      presupuesto={{id:uuidv4(), label:<label className="text-2xl  text-[#fb6f92] font-bold">Presupuesto</label>,amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(presupuesto)}</span>}} 
      disponible={{id:uuidv4(), label:<label className="text-2xl text-[#fb6f92] font-bold">Disponible</label>, amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(disponible)}</span>}}
      gastado={{id:uuidv4(), label:<label className="text-2xl  text-[#fb6f92] font-bold">Gastado</label>, amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(gastado)}</span>}}
      />
      
      </div>
    </div>
    

  )
}

export default ExpensesComponent
