import Table from 'react-bootstrap/Table';

export const DisplayDetail = (id, first_name, last_name, age)=>(onclick)=> {
return(
    <div>
        <Table>
            <thead>
                <tr>
                <th>ID</th>
                <td>{id}</td>
                </tr>
                <tr>
                <th>First Name</th>
                <td>-</td>
                </tr>
                <tr>
                <th>Last Name</th>
                <td>-</td>
                </tr>
                <tr>
                <th>Age</th>
                <td>-</td>
                </tr>
                <tr>
                <th>Gender</th>
                <td>-</td>
                </tr>
            </thead>
        </Table>
        </div>
)};
