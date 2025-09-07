import type{ JSX } from "react"

type Amount={
    id:string
    label:JSX.Element, 
    amount:JSX.Element
}

type AmountDisplayProps={
    presupuesto:Amount,
    gastado:Amount,
    disponible:Amount
 
}


const AmountDisplay = ({presupuesto, gastado, disponible}:AmountDisplayProps) => {
    
    
    const data=[presupuesto, gastado, disponible]


    return (
    <>

    {data.map(item=>(
        <div key={item.id}>{item.label} {" "} {item.amount}</div>
    ))}
    </>
  )
}

export default AmountDisplay
