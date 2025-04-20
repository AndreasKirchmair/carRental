import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function CustomerEdit() {
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    const [customer, setCustomer] = useState(initialFormState);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/customers/${id}`)
                .then(r => r.json())
                .then(data => setCustomer(data))
                .catch(err => console.log(err));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        fetch(customer.id ? `/api/customers/${id}` : '/api/customers',
            {
                method: customer.id ? 'PUT' : 'POST',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify(customer)
            })
            .then(r => {
                if (r.ok) {
                    setCustomer(initialFormState);
                    navigate('/customers');
                }
            })
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    }

    return (
        <Card style={{width: '40rem', margin: '0 auto'}}>
            <Card.Header as={"h3"}>{customer.id ? 'Edit customer' : 'Add customer'}</Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className={"mb-3"} controlId={"formBasicFirstName"}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required name={"firstName"} type={"text"} placeholder={"Enter first name"} onChange={handleChange} value={customer.firstName} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicLastName"}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required name={"lastName"} type={"text"} placeholder={"Enter last name"} onChange={handleChange} value={customer.lastName} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicEmail"}>
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control required name={"email"} type={"email"} placeholder={"Enter E-Mail"} onChange={handleChange} value={customer.email} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"formBasicPhone"}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control required name={"phone"} type={"tel"} placeholder={"Enter phone number"} onChange={handleChange} value={customer.phone} />
                    </Form.Group>
                    <Form.Group className={"mb-3"} controlId={"buttons"}>
                        <Button variant={"success"} type={"submit"}>Save</Button>{'  '}
                        <Button variant={"danger"} as={Link} to={"/customers"}>Cancel</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
};