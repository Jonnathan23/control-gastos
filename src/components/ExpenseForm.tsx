import DatePicker from 'react-date-picker';
import { categories } from "../data/categories";
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { DraftExpense, Value } from '../types';
import { useBudget } from '../hooks/useBudget';
import ErrorMessage from './ErrorMessage';
import { ErrorFormExpense } from '../errors/errors';


export default function ExpenseForm() {
    const initialExpense: DraftExpense = { amount: 0, expenseName: '', category: '', date: new Date() }

    //* States
    const [expense, setExpense] = useState<DraftExpense>(initialExpense);
    const [previousAmount, setPreviousAmount] = useState(0)

    const [error, setError] = useState('')
    const { dispatch, state, remaininBudget } = useBudget()

    useEffect(() => {
        if (state.editingId) {
            const editingExpense = state.expenses.filter(expense => expense.id === state.editingId)[0]
            setExpense(editingExpense)
            setPreviousAmount(editingExpense.amount)
        }
    }, [state.editingId])


    //* Funciones formulario
    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        const isAmountField = ['amount'].includes(name)

        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })

    }

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const validForm = (): Boolean => {
        try {
            if (Object.values(expense).includes('')) throw new ErrorFormExpense('Todos los campos son obligatorios', setError)

            console.log(`state.budget: ${state.budget}`)
            console.log(`expense.amount - previousAmount: ${expense.amount} - ${previousAmount} = ${expense.amount - previousAmount}`)
            console.log(`reimainin: ${remaininBudget}`)
            if ((expense.amount - previousAmount) > remaininBudget) throw new ErrorFormExpense('Ese gasto supera el presupuesto', setError)

        } catch (error) {
            return false
        }
        return true
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Validar
        if (!validForm()) return

        //Agregar un nuevo gasto
        if (state.editingId) {
            dispatch({ type: 'update-expense', payload: { expense: { ...expense, id: state.editingId } } })
        } else {
            dispatch({ type: 'add-expense', payload: { expense: expense } })
        }

        //Reiniciar el state
        setExpense(initialExpense)
        setPreviousAmount(0)
    }

    return (
        <form action="" className="space-y-5" onSubmit={handleSubmit} >
            <legend
                className="uppercase text-2xl text-center font-black border-b-4 border-blue-500 py-2"
            >
                {state.editingId ? 'Editar Gasto' : 'Nuevo Gasto'}
            </legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Nombre Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    name="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-slate-100 p-250"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="amount"
                    className="text-xl"
                >
                    Cantidad:
                </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Añade la cantidad del gasto, ej: 300"
                    className="bg-slate-100 p-250"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >
                    Categoria:
                </label>
                <select
                    id="category"
                    name="category"
                    className="bg-slate-100 p-250"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="" defaultValue={categories[0].id} disabled>--- Seleccione Categoria ---'</option>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >
                    Fecha Gasto:
                </label>
                <DatePicker
                    className='bg-slate-100 p-2 border-0'
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>

            <input
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                type="submit"
                value={state.editingId ? 'Guardar Cambios' : 'Agregar Gasto'}
            />


        </form>
    )
}