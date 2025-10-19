import { useEffect, useMemo } from "react"
import BudgetForm from "../components/BudgetForm"
import BudgetTracker from "../components/BudgetTracker"
import ExpenseList from "../components/ExpenseList"
import ExpenseModal from "../components/ExpenseModal"
import FilterByCategory from "../components/FilterByCategory"
import { useBudget } from "../hooks/useBudget"



export default function ExpensesPage() {
    const { state } = useBudget()

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
        localStorage.setItem('budget', JSON.stringify(state.budget))
    }, [state])

    const isValidBudget = useMemo(() => state.budget > 0, [state])

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
            </div>
            {isValidBudget && (
                <main className="max-w-3xl mx-auto py-10">
                    <FilterByCategory />
                    <ExpenseList />
                    <ExpenseModal />
                </main>
            )}
        </>
    );
}
