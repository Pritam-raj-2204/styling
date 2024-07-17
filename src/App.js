// Path: src/App.js

import React,{useState} from 'react';
import Button from './components/Button.js';
import User from './components/User.js';
import Layout from './components/Layout.js';
import "./App.css";



const App = () => {
  const style ={
    background: "grey",
    height: "60px",
    borderRadius: "5px",
    marginTop: "2px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px"
  }
  const [users, setUsers] = useState([
    { id: 2, age: 24, name: 'B' },
    { id: 3, age: 21, name: 'C' },
    { id: 4, age: 29, name: 'D' },
  ]);
  const [doneItems, setdoneItem] = useState([
    { id: 1, age: 30, name: 'A' },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState(); // <-- State to hold the user's input
  const addUserHandler = () => {
    const newUser = {
      id: users.length + doneItems.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };
	const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    const doneItem = users.filter((user) => user.id === id)[0];
    setUsers(newUserList);
    setdoneItem([...doneItems, doneItem]);
  };
  return (
    <Layout>
      <div>
        <div style={style}>
          Title:  
          <input value={name} 
          onChange={(e)=> {setName(e.target.value)}} 
          />
          Content: 
          <input value={age} 
          onCanPlay={(e)=>{setAge(e.target.value)}}
          />
          <Button onClick={addUserHandler}>Add</Button>
        </div>
        <div>
           <h3>Working..</h3>
        </div>
        <div className='app-style'>
          {users.map((user)=>{
            return <User user={user} key={user.id} handleDelete ={deleteUserHandler}/>
          })}
        </div>
        <hr />
        <h3>Done..</h3>
          <div className='app-style'>
          {doneItems.map((doneItem)=>{
            return <User user={doneItem} key={doneItem.id} />
          })}
          </div>
      </div>
    </Layout>
  );
};

export default App;
