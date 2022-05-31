
import { TableHeader } from "./TableHeader";
import studentList from "./StudentList";
import {TableRow} from "./TableRow";


export default function DataTable() {

    // the initial state with objects containing the student data/properties.
    

    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties

    // functionconponent that returns table header

    return (
        <table>
            <thead>
            <TableHeader/>
            </thead>
            <tbody>
                {studentList.map(data => (
                    <TableRow {... data} />
                ))}      
            </tbody>
        </table>
    );
}

    // functionconponent 


    // functionconponent action 


    // functionconponent 
