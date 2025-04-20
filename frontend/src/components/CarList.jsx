import {useEffect, useState} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function CarList () {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("/api/cars")
            .then(r => r.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (cars.length === 0) {
        return <p>No cars found.</p>;
    }
    const carList = cars.map((car) => {
        return (
            <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.vintage}</td>
                <td>{car.color}</td>
                <td>{car.kilometers}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" variant={"primary"} as={Link} to={"/cars/" + car.id}>Edit</Button>
                        <Button size="sm" variant={"danger"} onClick={() => remove(car.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        )
    });

    const remove = async (id) => {
        await fetch(`/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(r => {
            if (r.ok) {
                let updatedCars = [...cars].filter(i => i.id !== id);
                setCars(updatedCars);
            }
        });
    }

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Vintage</th>
                <th>Color</th>
                <th>Kilometers</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {carList}
            </tbody>
        </table>
    )
}