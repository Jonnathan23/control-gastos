import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";


export default function FilterByCategory() {

    const { dispatch } = useBudget()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category">Filtrar Gastos</label>
                    <select
                        id="cat_id"
                        className="bg-slate-10 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value="">Todas las categorias</option>
                        {categories.map(category => (
                            <option
                                key={category.cat_id}
                                value={category.cat_id}

                            >
                                {category.cat_name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}