import { useState } from "react";

export const StudentList= ()=> {
const initialData = 
[{"id":1,"first_name":"Lenci","last_name":"Chase","age":41,"gender":"Male"},
{"id":2,"first_name":"Lauryn","last_name":"Tough","age":81,"gender":"Female"},
{"id":3,"first_name":"Yul","last_name":"Neissen","age":81,"gender":"Male"},
{"id":4,"first_name":"Burl","last_name":"Litzmann","age":44,"gender":"Non-binary"},
{"id":5,"first_name":"De","last_name":"Grady","age":14,"gender":"Female"}]


const [student, studentData] = useState(initialData);
return (
    <div>
        id,first_name,last_name,age,gender;
    </div>
)
};