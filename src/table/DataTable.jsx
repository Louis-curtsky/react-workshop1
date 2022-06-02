import { TableHeader } from "./TableHeader";
import studentList from "./StudentList";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React from "react";


export default function DataTable(data) {

    const clickHandle = item => {
        this.setState({item: data.id});
        console.log(data.id);
    };
    return (
        <Table striped bordered hover size="sm">    
            <TableHeader/>
            <tbody>
                {studentList.map(data => (
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.age}</td>
                    <td> <Button variant="outline-primary" type='button'
                    onClick={e=>clickHandle(data)}>Details</Button></td>
                    
                </tr>
                ))}      
            </tbody>
        </Table>
    );
}

    // functionconponent 


    // functionconponent action 


    // functionconponent 
