import React from 'react'

import { UserList, Heading } from './components/UserList'

function App()
{
  // const name = "Abc"
  // const div = <div>
  //   <h1>Hello! {name}</h1>
  //   <p>Inside div</p>
  // </div>
  // const heading = React.createElement('H1', null, "Hello World")
  // const para = React.createElement('p', null, "Inside div element")
  // const div = React.createElement('div', null, heading, para)

  // const condition = true;
  // const name = "Abcd"
  // const div = <div>
  //   {name.length > 3 ? <p>{name}</p>
  //     : <input placeholder="Enter a name" type="text" />}
  // </div>


  // const users = [
  //   { name: "John Doe", email: "john@example.com", age: 25 },
  //   { name: "Jane Smith", email: "jane@example.com", age: 30 },
  //   { name: "Alice Johnson", email: "alice@example.com", age: 28 },
  //   { name: "Bob Brown", email: "bob@example.com", age: 22 },
  //   { name: "Charlie Davis", email: "charlie@example.com", age: 35 }
  // ];

  // const ul = <ul>
  //   {
  //     users.map(user =>
  //     {
  //       return <li key={user.index}>{user.name}</li>
  //     })
  //   }
  // </ul>

  return (
    <div>
      <Heading />
      <UserList />
    </div>
  )


}

export default App;
