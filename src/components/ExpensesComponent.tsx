import AmountDisplay from "./AmountDisplay"
import { v4 as uuidv4 } from "uuid"
import { formatCurrency } from "../helpers"


const ExpensesComponent = () => {
  
  
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className="flex justify-center items-center">
        <img src="/grafico.jpg" alt="Gráfico de gastos" />
      </div>
      
      <div className="flex flex-col justify-center items-center gap-8">
      
      <button className="bg-[#ff8fab] w-full p-2 text-white uppercase font-bold">Resetear App</button>
      
      <AmountDisplay 
      presupuesto={{id:uuidv4(), label:<label className="text-2xl  text-[#fb6f92] font-bold">Presupuesto</label>,amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(300)}</span>}} 
      disponible={{id:uuidv4(), label:<label className="text-2xl text-[#fb6f92] font-bold">Disponible</label>, amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(500)}</span>}}
      gastado={{id:uuidv4(), label:<label className="text-2xl  text-[#fb6f92] font-bold">Gastado</label>, amount:<span className="text-[#edafb8] font-semibold text-xl">{formatCurrency(200)}</span>}}
      />
      
      </div>
          
    </div>
    

  )
}

export default ExpensesComponent
