// TODO: import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
// TODO: import "react-circular-progressbar/dist/styles.css"
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

/**
 * TODO: Instalar las dependencias para hacer interactiva la gráfica
 * * npm i react-circular-progressbar
 * 
 */
export default function BudgetTracker() {

    const { state, totalExpense, remaininBudget, dispatch } = useBudget()

    const percentage = +((totalExpense / state.budget) * 100).toFixed(2)

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="./grafico.jpg" alt="gráfica de gastos" />
                {
                    /**
                     * TODO: descomentar
                     * <CircularProgressbar 
                     *  value={percentage}
                     * styles={buildStyles({                     
                     *  pathColor: percentage > 80 ? '#DC2626' : '#3b82f6',
                     *  trailColor: '#F5F5F5'
                     *  textSize:8
                     *  textColor: percentage > 80 ? '#DC2626' : '#3b82f6'
                     * })}
                     * text={`${percentage}% Gastado`}
                     * />
                     */
                }
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                    onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Resetear App
                </button>
                <AmountDisplay
                    label='Presupuesto'
                    amount={state.budget}
                />
                <AmountDisplay
                    label='Disponible'
                    amount={remaininBudget}
                />
                <AmountDisplay
                    label='Gastado'
                    amount={totalExpense}
                />


            </div>
        </div>

    )
}