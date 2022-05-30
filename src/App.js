import React from 'react';
import './App.css';
import { StudentList } from './table/StudentList';
import DataTable from './table/DataTable';
import { TableHeader } from './table/TableHeader';

function App() {
  const students = StudentList;
  return (
    <div className="App">
      <h1>
        Workshop 1
      </h1>
      <h2>
        <TableHeader/>
      </h2>
      <hr/>
      <DataTable/>
    </div>
  );
}

export default App;
