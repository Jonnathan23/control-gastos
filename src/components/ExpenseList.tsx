import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpeseList() {

    const { state } = useBudget()

    const filteredExtenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses
    const isEmpty = useMemo(() => filteredExtenses.length === 0, [filteredExtenses])

    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl  font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>

                    {filteredExtenses.map(expense => (
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            )}
        </div>
    )
}