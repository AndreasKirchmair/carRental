import NavigationHeader from "../components/NavigationHeader.jsx";
import CustomerList from "../components/CustomerList.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function ManageCustomers () {

    return (
        <>
            <NavigationHeader />
            <div className="container">
                <h1>Manage Customers</h1>
                <Button variant={"success"} as={Link} to={"/customers/new"} className={"float-end"}>Add Customer</Button>
                <CustomerList/>
            </div>
        </>
    )
};