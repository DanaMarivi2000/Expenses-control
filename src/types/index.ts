export type BudgetActions={type:"add-budget", payload:{budget:number}} |
{type:"show-modal"} | {type:"close-modal"}

export type State={
    budget:number,
    modal:boolean
 }

export type Categories={
    id:string,
    name:string,
    icon:string
}

type ValuePiece= Date | null;

export type Value= ValuePiece | [ValuePiece, ValuePiece];


export type CategoriesArray=Categories[]

export type Expense={
    id:string,
    expenseName:string,
    amount:number,
    category:string,
    date:Value,
}

export type DraftExpense = Omit<Expense, 'id'>