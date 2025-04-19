import NavigationHeader from "../components/NavigationHeader.jsx";
import CustomerList from "../components/CustomerList.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function () {

    return (
        <>
            <NavigationHeader />
            <div className="container">
                <h1>Manage Customers</h1>
                <Button variant={"success"} as={Link} to={"/customers/new"}>Add Customer</Button>
                <CustomerList/>
            </div>
        </>
    )
};