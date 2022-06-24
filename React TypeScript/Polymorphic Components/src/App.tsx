import './App.css';
import { Text } from './components/polymorphic/Text';


function App() {
  return (
    <div className='"App'>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label 01</Text>
    </div>
  )
}


export default App