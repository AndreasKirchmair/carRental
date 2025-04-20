import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Alert} from "react-bootstrap";

export default function RentalInformationAdd() {
    const initialFormState = {
        customerId: '',
        carId: ''
    };
    const navigate = useNavigate();
    const [info, setInfo] = useState(initialFormState);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        fetch('/api/rental-information',
            {
                method: 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(info)
            })
            .then(r => {
                if (r.ok) {
                    setInfo(initialFormState);
                    navigate('/rental-information');
                } else {
                    setError(r.statusText);
                }
            })
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    }

    return (
        <Card style={{width: '40rem', margin: '0 auto'}}>
            <Card.Header as={"h3"}>Lend a car</Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"mb-3"} controlId={"formBasicCustomerId"}>
                        <Form.Label>Customer ID</Form.Label>
                        <Form.Control required name={"customerId"} type={"number"} placeholder={"Enter customer ID"} onChange={handleChange} value={info.customer_id} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicCarId"}>
                        <Form.Label>Car VIN</Form.Label>
                        <Form.Control required name={"carId"} type={"text"} placeholder={"Enter car ID"} onChange={handleChange} value={info.car_id} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"buttons"}>
                        <Button variant={"success"} type={"submit"}>Save</Button>{'  '}
                        <Button variant={"danger"} as={Link} to={"/rental-information"}>Cancel</Button>
                    </Form.Group>
                </Form>
                {error && <Alert variant={"danger"}>{error}</Alert>}
            </Card.Body>
        </Card>
    )
}