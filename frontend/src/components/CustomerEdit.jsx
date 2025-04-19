import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function () {
    const initalFormState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    const [customer, setCustomer] = useState(initalFormState);
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        if (id !== 'new') {
            fetch('api/customers/' + id)
                .then(r => r.json())
                .then(data => setCustomer(data))
                .catch(err => console.log(err));
        }
    })
    return (

        <></>
    )
};