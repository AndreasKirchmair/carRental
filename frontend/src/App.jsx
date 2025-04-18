import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ManageCustomers from "./pages/ManageCustomers.jsx";
import ManageCars from "./pages/ManageCars.jsx";
import CustomerEdit from "./components/CustomerEdit.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Navigate to={"/home"} replace={true}/>}/>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/customers"} element={<ManageCustomers />} />
                <Route path={"/customers/:id"} element={<CustomerEdit />} />
                <Route path={"/cars"} element={<ManageCars />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
