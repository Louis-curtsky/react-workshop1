import React from 'react';


export const TableRow = props => (
    <div  key={props.id}>
            <td scope='row'>
                {props.id}
            </td>
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
        </div>
);
            
