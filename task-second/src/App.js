import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/card/Card';
import './App.css';

function App() {
  const[users, setUsers] = useState([]);
  useEffect(() => {axios.get("https://randomuser.me/api/?results=5").then(response => setUsers(response.data.results))}, []);
  return (
    <div className="App">
      <div className='container'>
        {users.map((user, i) => (<Card key={i} picture={user.picture.medium} gender={user.gender} name={user.name} date={user.dob.date} city={user.location.city} country={user.location.country}/>))}
      </div>
    </div>
  );
}

export default App;
