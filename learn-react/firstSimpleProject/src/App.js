import React from 'react';
import NewUser from './components/Users/NewUser'
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([{name:'anas jaidi', age: 20, id:"random"}]);

  const addNewUserHandler = user => {
    setUsers(prevUsers => [user, ...prevUsers])
  }

  return (
    <div className='app'>
      <NewUser addNewUser={addNewUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
