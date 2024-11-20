import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"
import { ErrorBudgedContext } from "../errors/errors"


export const useBudget = () => {
    const context = useContext(BudgetContext)

    if (!context) throw new ErrorBudgedContext('useBudget must be used within a BudgetProvider')

    return context
}