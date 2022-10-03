import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';
import { Status } from './components/Status';


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
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
      <Heading>Oscar goes to Company</Heading>
      </Oscar>
      <Greet name='Osacr'  isLoogin={false} />
    </div>
  )
}

export default App;
