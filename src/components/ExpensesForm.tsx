import type { FieldValue } from "react-hook-form"
import { useForm, Controller  } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import type {Value} from "../types";


type FormData = {
  expenseName: string,
  amount:number,
  categories:string,
  date:Value
};


const ExpensesForm = () => {
  
  const {register, handleSubmit,  formState: { errors }, control}=useForm()
  const onSubmit = (data: FieldValue<FormData>) => {
    console.log(data)
  }
  


  // const onChangee = (
  //   e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> 
  // ) => {
  //   setExpense({
  //     ...expense,
  //     [e.target.id]: e.target.value
  //   })
  // }


    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-[#fb6f92] py-2">Nuevo Gasto</legend>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">Nuevo Gasto: </label>
        <input type="text" 
        id="expenseName" 
        placeholder="Añade el nombre del gasto" 
        className="bg-slate-100 p-2" 
        {...register("expenseName",{
            required:"El nombre es obligatorio"
            
        })}
        />
        <ErrorMessage errors={errors} name="expenseName" />
      </div>
      <div className="flex flex-col gap-2">
      <label htmlFor="amount" className="text-xl">Cantidad: </label>
        <input type="number" 
          id="amount" 
          className="bg-slate-100 p-2" 
          placeholder="Añade la cantidad del gasto: ej.300"
          {...register("amount",{
            required:"La cantidad es obligatoria",
            setValueAs:value=>Number(value),
            validate:value=>value>0  || "El valor debe ser mayor a 0"
          })}
        />
      {<ErrorMessage errors={errors} name="amount"/>}
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="categories" className="text-xl">Categoría </label>
        <select id="categories"
         className="bg-slate-100 p-2"
          {...register("categories",{
            validate:value=>value!=="0" || "Selecciona una categoría"
          })}
         >
          <option value="0">-- Seleccione--</option>
          {categories.map(category=>(
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
        {<ErrorMessage errors={errors} name="categories"/>}
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-xl">Fecha Gasto:</label>
        
        <Controller
        control={control}
        name="date"
        rules={{ required: "La fecha es obligatoria" }}
        render={({ field }) => (
          <DatePicker
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />

        {<ErrorMessage errors={errors} name="date"/>}
      </div>

      <div className="flex flex-col p-2">
        <button type="submit" className="bg-[#fb6f92] opacity-50 hover:opacity-90 p-1.5 text-white text-xl w-50 mx-auto mt-2 rounded-lg">Enviar</button>
      </div>
    </form>
  )
}

export default ExpensesForm
