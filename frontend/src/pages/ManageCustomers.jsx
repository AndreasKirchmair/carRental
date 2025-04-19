import NavigationHeader from "../components/NavigationHeader.jsx";
import {useEffect, useState} from "react";
import ManageCustomers from "./ManageCustomers.jsx";

export default function () {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("localhost:8080/api/customers", {method: "GET"})
            .then(r => r.json())
            .then(data => setCustomers(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <NavigationHeader />
            <h1>Loaded {customers.length} customers</h1>
            <p>{}</p>
        </>
    )
};