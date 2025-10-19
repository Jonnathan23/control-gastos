import { Link, Navigate, Outlet } from "react-router-dom";




export default function AppLayout() {

    return (
        <>
            <header className="bg-blue-600 py-8 max-h-72">

                <h1 className="uppercase text-center font-black text-4xl text-white">
                    Control de Ingresos Bingo
                </h1>

                <nav>
                    <Link to='/'>Planificador de Gastos</Link>
                    <Link to='/revenues'>Recaudación de Fondos</Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}
