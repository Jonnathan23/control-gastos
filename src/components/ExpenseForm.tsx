import DatePicker from 'react-date-picker';
import { categories } from "../data/categories";
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { DraftExpense, Value } from '../types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useBudget } from '../hooks/useBudget';




export default function ExpenseForm() {
    const initialExpense: DraftExpense = { amount: 0, expenseName: '', category: '', date: new Date() }

    //*States
    const [expense, setExpense] = useState<DraftExpense>(initialExpense);

    const [error, setError] = useState('')
    const { dispatch } = useBudget()


    //* Funciones formulario
    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        const isAmountField = ['amount'].includes(name)
        console.log(`Is amount ${isAmountField}`)

        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })

    }

    const handleChangeDate = (value: Value) => {
        console.log(value)
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(expense).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        //Agregar un nuevo gasto
        dispatch({ type: 'add-expense', payload: { expense: expense } })

        //Reiniciar el state
        setExpense(initialExpense)
    }

    return (
        <form action="" className="space-y-5" onSubmit={handleSubmit} >
            <legend
                className="uppercase text-2xl text-center font-black border-b-4 border-blue-500 py-2"
            >
                Nuevo gasto
            </legend>

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
                value="Registrar Gasto"
            />


        </form>
    )
}