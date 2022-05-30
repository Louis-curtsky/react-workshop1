import { StudentList } from "./StudentList";
import React from 'react';


function TableRow ({id,first_name,last_name,age,gender}) {
    return (
        <div>
        {StudentList.map(data=>
            <div>
                <div>
                {data.id}
                </div>
                <div>
                {data.first_name}
                </div>
                <div>
                {data.last_name}
                </div>
                <div>
                {data.age}
                </div>
                <div>
                {data.gender}
                </div>
            </div>
        )}
    </div>
            )
}
export default TableRow;
