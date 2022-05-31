import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { TableHeader } from "./TableHeader";
import studentList from "./StudentList";
import {TableRow} from "./TableRow";


export default function DataTable() {

    // the initial state with objects containing the student data/properties.
    

    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties

    // functionconponent that returns table header

    return (
        <MDBTable Hover>
            <MDBTableHead>
                <tr>
            <TableHeader/>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                {studentList.map(data => (
                    <TableRow {... data} />
                ))}      
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

    // functionconponent 


    // functionconponent action 


    // functionconponent 
