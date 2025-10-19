import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ExpensesPage from "./pages/ExpensesPage";
import RevenuesPage from "./pages/RevenuesPage";



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<ExpensesPage />} />
                    <Route path='/revenues' element={<RevenuesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
