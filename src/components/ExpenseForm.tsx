import { categories } from "../data/categories"

export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
            >Nuevo Gasto
            </legend>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >Nombre del Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añadir el Nombre del Gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="expenseName"
                    className="text-xl"
                >Cantidad:
                </label>
                <input
                    type="number"
                    id="expenseName"
                    placeholder="Añadir cantidad del gasto: Ej. 200"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="category"
                    className="text-xl"
                >Categoría:
                </label>
                <select
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option 
                            key={category.id} 
                            value={category.id}
                            >{category.name}
                        </option>
                    ))}
                </select>
            </div>

            <input 
                type="submit"
                value={'Registrar Gasto'}
                className="bg-blue-600 text-white uppercase font-bold p-2 w-full cursor-pointer rounded-lg"
            />

        </form>
    )
}
