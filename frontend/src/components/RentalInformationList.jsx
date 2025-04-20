import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

export default function RentalInformationList() {
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/rental-information")
            .then(res => res.json())
            .then(data => {
                setInfos(data);
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    } else if (infos.length === 0) {
        return <p>No rental information found.</p>
    }

    const remove = async (id) => {
        await fetch(`/api/rental-information/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if (r.ok) {
                let updatedInfos = [...infos].filter(i => i.id !== id);
                setInfos(updatedInfos);
            }
        });
    }

    const infoList = infos.map((info) => {
        return (
            <tr key={info.id}>
                <td>{info.customer.id}</td>
                <td style={{borderRight: "3px solid black"}}>{info.customer.firstName + ' ' + info.customer.lastName}</td>
                <td>{info.car.id}</td>
                <td>{info.car.brand + ' ' + info.car.model + ' ' + info.car.vintage} </td>
                <td style={{borderRight: "3px solid black"}}>{info.car.kilometers}</td>
                <td>{info.rentalDate}</td>
                <td>
                    <Button size="sm" variant="danger" onClick={() => remove(info.id)}>Delete</Button>
                </td>
            </tr>
        )
    })

    return (
        <>
            <p className={"float-start"}>Number of rented cars: {infos.length}</p>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th style={{borderRight: "3px solid black"}}>Customer Name</th>
                    <th>Car VIN</th>
                    <th>Car</th>
                    <th style={{borderRight: "3px solid black"}}>Kilometers</th>
                    <th>Rental Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {infoList}
                </tbody>
            </table>
        </>
    )
};