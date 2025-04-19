import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("/api/customers")
            .then(r => r.json())
            .then(data => {
                setCustomers(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (customers.length === 0) {
        return <p>No customers found.</p>;
    }
    const customerList = customers.map((customer) => {
        return (
            <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" variant={"primary"} as={Link} to={"/customers/" + customer.id}>Edit</Button>
                        <Button size="sm" variant={"danger"} onClick={() => remove(customer.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    });

    const remove = async (id) => {
        await fetch(`/api/customers/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if (r.ok) {
                let updatedCustomers = [...customers].filter(i => i.id !== id);
                setCustomers(updatedCustomers);
            }
        });
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerList}
            </tbody>
        </table>
    )
};