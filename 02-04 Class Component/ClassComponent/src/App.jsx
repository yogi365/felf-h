import TableRow from "./components/TableRow";
import TableRowClass from "./components/TableRowClass";
import StateComponent from './components/StateComponent'
import SampleClass from "./components/SampleClass";
function App()
{
  const users = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com', isActive: true },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com', isActive: false },
    { id: 3, name: 'Alice Johnson', age: 28, email: 'alice@example.com', isActive: true },
    { id: 4, name: 'Bob Brown', age: 35, email: 'bob@example.com', isActive: false },
    { id: 5, name: 'Charlie Davis', age: 22, email: 'charlie@example.com', isActive: true }
  ];
  var count = 1
  return (
    <div>
      <table>
        <tbody>
          {
            users.map(user =>
            {
              return (
                // <TableRow user={user} />
                <TableRowClass user={user} />
              )
            })
          }
        </tbody>
      </table>

      {/* <StateComponent /> */}


      {

        setInterval(() =>
        {
          console.log(count);
          <SampleClass counter={count++} />
        }, 2000)
      }
    </div>
  )

}

export default App
