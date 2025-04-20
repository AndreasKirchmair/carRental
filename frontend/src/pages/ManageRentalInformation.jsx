import NavigationHeader from "../components/NavigationHeader.jsx";
import RentalInformationList from "../components/RentalInformationList.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function ManageRentalInformation() {
    return (
        <>
            <NavigationHeader />
            <div className="container">
                <h1>Manage rental information</h1>
                <Button variant={"success"} as={Link} to={"/rental-information/new"} className={"float-end"}>Lend car</Button>
                <RentalInformationList />
            </div>
        </>

    )
}