import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Read() {
    const setData = (data) => {
        let {id, firstName, lastName, checkbox }=data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox value', checkbox);
    };
    const getData = () => {
        axios.get(`https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData/${id}`)
        .then(()=>{
            getData();
        })
    };
    const [APIData, setAPIData] = useState([]);
    useEffect(()=>{
axios.get(`https://6474b7b67de100807b1b9da2.mockapi.io/api/v1/FakeData`).then((response)=>{
    setAPIData(response.data);
})
},[])
    return (
        <div>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>FirstName</Table.HeaderCell>
                    <Table.HeaderCell>LastName</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
               {APIData.map((data)=>{
                return (
                <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Link to='/update'>
                <Table.Cell> 
                    <Button onClick={()=>setData(data)}>Update</Button>
                </Table.Cell>
                </Link>
                <Table.Cell>
                    <Button onClick={()=> onDelete(data.id)}>Delete</Button>
                </Table.Cell>
                </Table.Row>
                )})}
                
            </Table.Body>
        </Table>
        </div>
    )
};