import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import data from  './mockdata.json'

function App() {


 const [contacts , setContacts]= useState(data)
  return (
    <div className='app-container'>

      <Sidebar />
      <table>
          <thead>
            
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Photo</th>
                <th>Location</th>
                <th>Birth</th>
                <th>Hired on</th>
                <th>Address</th>
                <th>+ Add Column</th>
              </tr>
          </thead>

          <tbody>

            {contacts.map((contacts)=> (
                <tr>
                <td>{contacts.Num}</td>
                <td>{contacts.Name}</td>
                <td className='executive'>{contacts.Department}</td>
                <td>{contacts.Email}</td>
                <td>{contacts.Phone}</td>
                <td>{contacts.photo}</td>
                <td className='location'>{contacts.Location}</td>
                <td>{contacts.Birth}</td>
                <td>{contacts['Hired on']}</td>
                <td>{contacts.Address}</td>
                
              </tr>
            ))}
                
                <tr><td>+ Add new row</td></tr>
              </tbody>
      </table>
    </div>
  );
}

export default App;
