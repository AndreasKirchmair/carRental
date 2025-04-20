import NavigationHeader from "../components/NavigationHeader.jsx";
import CarList from "../components/CarList.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function ManageCars () {
    return (
        <>
            <NavigationHeader />
            <div className="container">
                <h1>Manage cars</h1>
                <Button variant={"success"} as={Link} to={"/cars/new"} className={"float-end"}>Add car</Button>
                <CarList />
            </div>
        </>
    )
};