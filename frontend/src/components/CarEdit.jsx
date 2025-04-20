import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function CarEdit() {
    const initialFormState = {
        id: '',
        brand: '',
        model: '',
        vintage: '',
        color: '',
        kilometers: ''
    };

    const [car, setCar] = useState(initialFormState);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditForm = id !== "new";

    useEffect(() => {
        if (isEditForm) {
            fetch(`/api/cars/${id}`)
                .then(r => r.json())
                .then(data => setCar(data))
                .catch(err => console.log(err));
        }
    }, [id, isEditForm, setCar]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        fetch(isEditForm ? `/api/cars/${id}` : '/api/cars',
            {
                method: isEditForm ? 'PUT' : 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(car)
            })
            .then(r => {
                if (r.ok) {
                    setCar(initialFormState);
                    navigate('/cars');
                }
            })
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    }

    return (
        <Card style={{width: '40rem', margin: '0 auto'}}>
            <Card.Header as={"h3"}>{isEditForm ? 'Edit car' : 'Add car'}</Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"mb-3"} controlId={"formBasidVIN"}>
                        <Form.Label>Vehicle Identification Number</Form.Label>
                        <Form.Control required disabled={isEditForm} name={"id"} type={"text"} placeholder={"Enter the vehicle identification number"} onChange={handleChange} value={car.id} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicmodel"}>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control required name={"brand"} type={"text"} placeholder={"Enter the brand"} onChange={handleChange} value={car.brand} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicModel"}>
                        <Form.Label>Model</Form.Label>
                        <Form.Control required name={"model"} type={"text"} placeholder={"Enter model"} onChange={handleChange} value={car.model} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicVintage"}>
                        <Form.Label>Vintage</Form.Label>
                        <Form.Control required name={"vintage"} type={"number"} placeholder={"Enter vintage"} onChange={handleChange} value={car.vintage} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicColor"}>
                        <Form.Label>Color</Form.Label>
                        <Form.Control required name={"color"} type={"text"} placeholder={"Enter color"} onChange={handleChange} value={car.color} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicKilometers"}>
                        <Form.Label>Kilometers</Form.Label>
                        <Form.Control required name={"kilometers"} type={"number"} placeholder={"Enter kilometers"} onChange={handleChange} value={car.kilometers} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"buttons"}>
                        <Button variant={"success"} type={"submit"}>Save</Button>{'  '}
                        <Button variant={"danger"} as={Link} to={"/cars"}>Cancel</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
};