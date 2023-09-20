import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


function Users() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
      resp.json().then((result)=>{
        console.log(result)
        setData(result)
       
      })
     
    })
  },[])
  
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {data&&data.map((item)=>{
       return(<tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address.street}</td>
      </tr>)
      })}
      
    </tbody>
  </Table>
  )
}

export default Users