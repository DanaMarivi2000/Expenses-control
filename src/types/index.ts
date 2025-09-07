export type BudgetActions={type:"add-budget", payload:{budget:number}} |
{type:"show-modal"} | {type:"close-modal"}

export type State={
    budget:number,
    modal:boolean
 }

