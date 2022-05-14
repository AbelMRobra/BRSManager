import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Header from "../components/headers/PageHeader";

const columns = [
    { field: 'id', headerName: 'Codigo', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 330 },
    { field: 'unid', headerName: 'Unidad', width: 130 },
    {
      field: 'amount',
      headerName: 'Precio',
      type: 'number',
      width: 120,
    },
    {
      field: 'fullName',
      headerName: 'Constante',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', amount: 3500.00 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', amount: 42123.1 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', amount: 4523123.1 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', amount: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', amount: null },
    { id: 6, lastName: 'Melisandre', firstName: null, amount: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', amount: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', amount: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', amount: 65 },
];

export default function DataTable() {
    return (
      <div style={{ height: 400, width: '100%' }}>
            
            <Header title='Supplies' />  

            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            style={{'marginTop': '30px'}}
            />
      </div>
    );
  }