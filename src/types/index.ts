export type Category = {
    cat_id: string
    cat_name: string
    cat_icon: string
}

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
    ex_id: string
    ex_expenseName: string
    ex_amount: number
    ex_category_id: Category['cat_id']
    ex_date: Value

}

export type DraftExpense = Omit<Expense, 'ex_id'>