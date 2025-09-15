export type BudgetActions={type:"add-budget", payload:{budget:number}} |
{type:"show-modal"} | {type:"close-modal"} | 
{type:"add-expense", payload:{expense:DraftExpense}} |
{type:"delete-expense", payload:{id:Expense["id"]}} |
{type:"add-id", payload:{id:Expense["id"]}}|
{type:"update-expense", payload:{expense:Expense}}

export type State={
    budget:number,
    modal:boolean,
    expenses:Expense[],
    activeId:Expense["id"],
 }


export type Categories={
    id:string,
    name:string,
    icon:string
}

type ValuePiece= Date | string;

export type Value= ValuePiece | [ValuePiece, ValuePiece];


export type CategoriesArray=Categories[]

export type Expense={
    id:string,
    expenseName:string,
    amount:number,
    categories:string,
    date:Value,
}

export type DraftExpense = Omit<Expense, 'id'>