import { categories } from "../data/categories"
import {useBudget} from "../hooks/useBudget"
import type {ChangeEvent} from "react"
const FilterByCategory = () => {

  const {dispatch}=useBudget()

  const handleCategoryChange=(e: ChangeEvent<HTMLSelectElement>)=>{
      dispatch({type:"filter-by-category", payload:{id:e.target.value}})
    }


  return (
    <div className="bg-white shadow-lg rounded-lg p-10 flex flex-col gap-5 mt-10">
      <label htmlFor="categories" className="text-xl">Selecciona una categoría:  </label>
        <select id="categories" className="p-2 w-50 mx-auto rounded-lg border-2
        border-[#ffe5ec] rounded" onChange={handleCategoryChange}>
          <option value="#"> Todas las categorías </option>
            {categories.map(category=>(
                    <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterByCategory
