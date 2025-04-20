import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ManageCustomers from "./pages/ManageCustomers.jsx";
import ManageCars from "./pages/ManageCars.jsx";
import CustomerEdit from "./components/CustomerEdit.jsx";
import CarEdit from "./components/CarEdit.jsx";
import ManageRentalInformation from "./pages/ManageRentalInformation.jsx";
import RentalInformationAdd from "./components/RentalInformationAdd.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<Navigate to={"/home"} replace={true}/>}/>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/customers"} element={<ManageCustomers />} />
                <Route path={"/customers/:id"} element={<CustomerEdit />} />
                <Route path={"/cars"} element={<ManageCars />} />
                <Route path={"/cars/:id"} element={<CarEdit />} />
                <Route path={"/rental-information"} element={<ManageRentalInformation />} />
                <Route path={"/rental-information/new"} element={<RentalInformationAdd />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
