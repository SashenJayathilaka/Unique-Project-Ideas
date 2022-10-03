import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';


function App() {

  const personName = {
    first: "Hasindu",
    last: "Perera",
  }


  const nameList = [
  {
    first: "Tom",
    last: "Wayne"
  },
  {
    first:"Clark",
    last: "Kent"
  },
  {
    first:"Oscar",
    last: "Diana"
  }
  ]

  return (
    <div className="App">
      <Greet name='Hasindu' messageCount={20} isLoogin = {false} />
      <Person name = {personName} />
      <Personlist name = {nameList} />
    </div>
  )
}

export default App;
