import './App.css'
import Child from './Child'

function App() {

  function getName(data){
      console.log(data)
  }
  return (
    <>
      <Child childProps={getName}/>
    </>
  )
}

export default App
