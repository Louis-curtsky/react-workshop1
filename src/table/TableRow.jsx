import React from 'react';
import Button from 'react-bootstrap/Button';


export const TableRow = props => (
    <div  key={props.id}>
            <tr>
            <th>
                {props.id}
            </th>
            <td>
                {props.first_name}
            </td>
            <td>
                {props.last_name}
            </td>
            <td>
                {props.age}
            </td>
            <td>
                {props.gender}
            </td>
            <td>
                <Button variant="outline-primary" type='button'>Details</Button>
            </td>
            </tr>
        </div>
);
            
