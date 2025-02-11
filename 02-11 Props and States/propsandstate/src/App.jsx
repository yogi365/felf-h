import Props from './components/Props'
import States from './components/States'
function App()
{
  var name = "Abc"
  var marks = [25, 26, 15, 10]
  return (
    <>
      {/* <Props name={name} age="25" marks={marks} /> */}
      <States />
    </>
  )
}

export default App
